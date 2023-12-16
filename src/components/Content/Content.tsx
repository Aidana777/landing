// Content.tsx
import React, { useState } from 'react';
import Filter from '../Filters/Filter';
import './content.css';

const Content = () => {
  const [selectedProgram, setSelectedProgram] = useState<string>('');

  const handleProgramSelect = (program: string) => {
    setSelectedProgram(program);
  };

  const programOptions = ['HD', 'HDF', 'UF'];

  return (
    <div className="container">
      <h3 className="subTitle">Назначения сеанса гемодиализа</h3>
      <p className="content_Text">
        Программа аппарата Назначения сеанса гемодиализа
      </p>
      <div className="buttonChose">
        {programOptions.map((program, index) => (
          <button
            key={index}
            className={`contentItem ${selectedProgram === program ? 'selected' : ''}`}
            onClick={() => handleProgramSelect(program)}
          >
            {program}
          </button>
        ))}
      </div>
      <Filter />
    </div>
  );
};

export default Content;
