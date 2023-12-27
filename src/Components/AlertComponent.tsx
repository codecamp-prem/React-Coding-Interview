import { useState } from "react";
import "./alertcomponent.css";
interface Props {
  alertMessage: {
    msg: string;
    handler: () => void;
  };
}
function AlertComponent({ alertMessage }: Props) {
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
    alertMessage.handler();
  };

  return (
    <>
      {showAlert && (
        <div className="alert">
          <div className="alert-content">
            <button className="alert-close-button" onClick={handleCloseAlert}>
              &times;
            </button>
            <div>{alertMessage.msg}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default AlertComponent;
