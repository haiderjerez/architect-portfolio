const Button = ({ text, onClick, className }) => {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 ${className}`}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  