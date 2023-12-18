import React from 'react';

interface InjectionButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const InjectionButton: React.FC<InjectionButtonProps> = ({ label, selected, onClick }) => {
  return (
    <button
      className={`injectionBtn ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default InjectionButton;
