import React from "react";


const Successful = () => {
  return (
    <div className="success-container">
      <div className="success-card">

        <div className="checkmark-container">
          <div className="checkmark">✔</div>
        </div>

        <h2 className="success-title">Payment Successful!</h2>
        <p className="success-text">
          Thank you! Your payment has been processed securely.
        </p>

        <div className="emoji">
          🎉✨💳
        </div>

      </div>

      {/* Confetti */}
      <div className="confetti"></div>
    </div>
  );
};

export default Successful;
