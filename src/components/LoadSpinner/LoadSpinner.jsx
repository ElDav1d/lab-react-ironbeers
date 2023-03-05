import Spinner from "react-bootstrap/Spinner";
import "./LoadSpinner.css";

function LoadSpinner({ hidddenText }) {
  return (
    <section className="load-spinner">
      <Spinner variant="info" animation="border" role="status">
        <span className="visually-hidden">{hidddenText}...</span>
      </Spinner>
    </section>
  );
}

export default LoadSpinner;
