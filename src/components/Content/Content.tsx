import React, { useState } from 'react';
import Filter from '../Filters/Filter';
import './content.css';

const Content = () => {
  const [selectedProgram, setSelectedProgram] = useState<string>(''); // Updated type to string

  const handleProgramSelect = (program: string) => {
    setSelectedProgram(program);
  };

  return (
    <div className="container">
      <h3 className="subTitle">Назначения сеанса гемодиализа</h3>
      <p className="content_Text">
        Программа аппарата Назначения сеанса гемодиализа
      </p>
      <div className="buttonChose">
        <button
          className={`contentItem ${selectedProgram === 'HD' ? 'selected' : ''}`}
          onClick={() => handleProgramSelect('HD')}
        >
          HD
        </button>
        <button
          className={`contentItem ${selectedProgram === 'HDF' ? 'selected' : ''}`}
          onClick={() => handleProgramSelect('HDF')}
        >
          HDF
        </button>
        <button
          className={`contentItem ${selectedProgram === 'UF' ? 'selected' : ''}`}
          onClick={() => handleProgramSelect('UF')}
        >
          UF
        </button>
      </div>
      <Filter />
    </div>
  );
};

export default Content;
