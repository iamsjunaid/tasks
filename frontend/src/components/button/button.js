function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`border hover:border-gray-800 border-gray-400 py-1 px-16 rounded ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
