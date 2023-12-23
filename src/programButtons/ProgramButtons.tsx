// ProgramButtons.tsx
import React from 'react';
import './programButtons.css'

interface ProgramButtonsProps {
  programOptions: string[];
  selectedProgram: string | null;
  onSelectProgram: (program: string) => void;
}

const ProgramButtons: React.FC<ProgramButtonsProps> = ({ programOptions, selectedProgram, onSelectProgram }) => {
  return (
    <div className="program_button__container">
      {programOptions.map((program, index) => (
        <button
          key={index}
          className={`global_button ${selectedProgram === program ? 'global_button_active' : ''}`}
          onClick={() => onSelectProgram(program)}
        >
          {program}
        </button>
      ))}
    </div>
  );
};

export default ProgramButtons;
