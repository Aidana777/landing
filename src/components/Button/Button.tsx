// Button.tsx
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;
  selected?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, selected = false }) => {
  return (
    <button className={`seansBtn ${selected ? 'selected' : ''}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
