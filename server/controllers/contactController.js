import Contact from "../models/Contact.js";

/**
 * POST /api/contact
 * Validates and stores a contact form submission.
 */
export async function createContact(req, res, next) {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are all required.",
      });
    }

    const contact = await Contact.create({ name, email, message });

    return res.status(201).json({
      success: true,
      message: "Message received. Thank you for reaching out!",
      data: { id: contact._id, createdAt: contact.createdAt },
    });
  } catch (error) {
    // Mongoose validation errors -> 400 with a readable message
    if (error.name === "ValidationError") {
      const firstError = Object.values(error.errors)[0]?.message || "Invalid input.";
      return res.status(400).json({ success: false, message: firstError });
    }
    next(error);
  }
}

/**
 * GET /api/contact
 * Lists submissions, newest first. Intended for the site owner only —
 * add authentication before exposing this in production.
 */
export async function getContacts(req, res, next) {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    next(error);
  }
}
