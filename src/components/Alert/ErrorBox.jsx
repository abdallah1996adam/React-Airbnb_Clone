import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

function ErrorMessage(props) {
  return (
    <div className="alert alert-danger">
      <p>{props.text}</p>
      <FontAwesomeIcon icon={faTimes} className="icon" onClick={props.removeMessage}/>
    </div>
  );
}

export default ErrorMessage;
