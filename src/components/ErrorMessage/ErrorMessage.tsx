import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  console.log("Error message received:", message); 
  
  return message ? <div className="error-message">{message}</div> : null;
};

export default ErrorMessage;