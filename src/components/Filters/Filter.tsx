import React from 'react';
import NeedleModal from '../Madals/NeedleModal';

import './filter.css';

const Filter = () => {
  return (
    <div className='filterContainer'>
      <section className="block1">
        <h3 className="medicalText">Диализатор</h3>
        <div className="box">
          <input
            className='inputField'
            type="text"
            placeholder="Спр. 'Диализаторы'"
          />
          <button className="filterBtn">
            <img
              className="btnImgMenu"
              src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg"
              alt=""
            />
          </button>
        </div>
      </section>

      <section className="addSecondBlock">
        <h3 className="medicalText">Концентратор</h3>
        <div className="block2">
          <div className="box">
            <input className='inputField' type="text"
              placeholder="Спр. 'Концентраторы'"
            />
            <button className="filterBtn">
              <img
                className="btnImgMenu"
                src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg"
                alt=""
              />
            </button>
          </div>
          <div className="addInput">
            <div className="box">
              <input className='inputFieldLiq' type="number" />
            </div>
          </div>
        </div>
      </section>
      <NeedleModal />
    </div>
  );
}

export default Filter;
