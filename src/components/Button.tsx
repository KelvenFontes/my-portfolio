import { FC } from 'react';

interface ButtonProps {
    text: string;
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'outline' | 'disabled';
    onClick?: () => void;
  }
  
  const Button: FC<ButtonProps> = ({ text, variant = 'primary', onClick }) => {
    const baseStyle = "font-bold py-2 px-4 rounded transition-all duration-300";
  
    const variants = {
      primary: "bg-blue-500 hover:bg-blue-600 text-white",
      secondary: "bg-gray-500 hover:bg-gray-600 text-white",
      success: "bg-green-500 hover:bg-green-600 text-white",
      danger: "bg-red-500 hover:bg-red-600 text-white",
      outline: "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
      disabled: "bg-gray-300 text-gray-600 cursor-not-allowed"
    };
  
    return (
      <button 
        className={`${baseStyle} ${variants[variant]}`} 
        onClick={onClick} 
        disabled={variant === 'disabled'}
      >
        {text}
      </button>
    );
  };
  
  export default Button;