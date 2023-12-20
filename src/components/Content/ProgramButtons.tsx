// ProgramButtons.tsx
import React from 'react';

interface ProgramButtonsProps {
  programOptions: string[];
  selectedProgram: string | null;
  onSelectProgram: (program: string) => void;
}

const ProgramButtons: React.FC<ProgramButtonsProps> = ({ programOptions, selectedProgram, onSelectProgram }) => {
  return (
    <div className="buttonChose">
      {programOptions.map((program, index) => (
        <button
          key={index}
          className={`contentItem ${selectedProgram === program ? 'selected' : ''}`}
          onClick={() => onSelectProgram(program)}
        >
          {program}
        </button>
      ))}
    </div>
  );
};

export default ProgramButtons;
