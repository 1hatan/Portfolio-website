import "./Loader.css";

/**
 * Full-screen loader shown briefly while the app mounts.
 * Uses a typing "<HG />" mark to echo the hero's code-editor motif
 * instead of a generic spinner.
 */
export default function Loader({ visible }) {
  return (
    <div className={`loader ${visible ? "" : "loader--hidden"}`} aria-hidden={!visible}>
      <div className="loader__mark">
        <span>&lt;</span>Harani Gayathri<span>/&gt;</span>
      </div>
      <div className="loader__bar">
        <div className="loader__bar-fill" />
      </div>
    </div>
  );
}
