// FilterSection.tsx
import React from 'react';

interface FilterSectionProps {
  title: string;
  placeholder: string;
  isNumericInput?: boolean;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, placeholder, isNumericInput = false }) => {
  return (
    <section className="block">
      <h3 className="medicalText">{title}</h3>
      <div className="box">
        <input
          className={`inputField ${isNumericInput ? 'inputFieldLiq' : ''}`}
          type={isNumericInput ? 'number' : 'text'}
          placeholder={`Спр. '${placeholder}'`}
        />
        <button className="filterBtn">
          <img
            className="btnImgMenu"
            src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg"
            alt=""
          />
        </button>
      </div>
      {isNumericInput && (
        <div className="addInput">

        </div>
      )}
    </section>
  );
};

export default FilterSection;

