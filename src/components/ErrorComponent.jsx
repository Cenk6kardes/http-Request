/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
export default function ErrorComponent({ title, message, onConfirm }) {
    return (
      <div className="error">
        <h2>{title}</h2>
        <p>{message}</p>
        {onConfirm && (
          <div id="confirmation-actions">
            <button onClick={onConfirm} className="button">
              Okay
            </button>
          </div>
        )}
      </div>
    );
  }