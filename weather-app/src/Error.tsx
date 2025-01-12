import { faFrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Error() {
  return (
    <span className="error-message">
      <FontAwesomeIcon icon={faFrown} />
      <span style={{ fontSize: "20px", marginLeft: "1rem" }}>
        City not found
      </span>
    </span>
  );
}
