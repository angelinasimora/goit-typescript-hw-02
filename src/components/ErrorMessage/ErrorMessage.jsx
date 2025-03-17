const ErrorMessage = ({ message }) => {
  console.log("Error message received:", message);  // Додайте логування для перевірки
  return message ? <div className="error-message">{message}</div> : null;
};

export default ErrorMessage;