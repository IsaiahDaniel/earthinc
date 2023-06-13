import React, { Children } from 'react'

type ButtonProps = {
    text: string;
    classNames?: string;
    buttonType: "button" | "submit" | "reset";
    onClick?: () => void;
  };

const Button = ({text, classNames, buttonType, onClick}: ButtonProps) => {
  return (
    <button type={buttonType} onClick={onClick} className={`font-['Poppins'] font-semibold text-white py-4 px-12 rounded-xl ${classNames && classNames}`} style={{background: 'linear-gradient(137.25deg, #EA6EE7 -20.44%, #FD68E3 11.72%, #B66FFA 45.25%, #7668FD 76.73%, #7D2AE7 110.95%)'}}>
        {text}
    </button>
  )
}

export default Button