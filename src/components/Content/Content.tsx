import React, { useState } from 'react';
import ProgramButtons from './ProgramButtons';
import ThreeBtnSection from '../ThreeBtnSection/ThreeBtnSection';
import InjectionSection from '../InjectionSection/InjectionSection';
import Banner from '../Banner/Banner';
import TextBlock from '../TextBlock/TextBlock';
import HomeBlock from '../HomeBlock/HomeBlock';
import CarboneSection from '../CarboneSection/CarboneSection';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {
  setSelectedProgram,
  setSelectedButton,
} from '../Slices/contentSlice';

const Content = () => {
  const dispatch = useDispatch();
  const contentState = useSelector((state: RootState) => state.content);

  const [showModalBanner, setShowModalBanner] = useState(false);

  const openModalBanner = () => {
    setShowModalBanner(true);
  };

  const closeModalBanner = () => {
    setShowModalBanner(false);
  };

  return (
    <div className="container">
      <h3 className="subTitle">Назначения сеанса гемодиализа</h3>
      <p className="content_Text">Программа аппарата Назначения сеанса гемодиализа</p>

      <ProgramButtons
        programOptions={['HD', 'HDF', 'UF']}
        selectedProgram={contentState.selectedProgram}
        onSelectProgram={(program) => dispatch(setSelectedProgram(program))}
      />

      <ThreeBtnSection />

      <InjectionSection
        selectedButton={contentState.selectedButton}
        onButtonClick={(btn: string | null) => {
          dispatch(setSelectedButton(btn));
          // Additional logic if needed
        }}
      />

      <CarboneSection
        openModalBanner={openModalBanner}
        closeModalBanner={closeModalBanner}
        showModalBanner={showModalBanner}
      />



      <div>
        <button className='totalBtn'>Сформировать сеанс</button>
      </div>
      <div className="totalBlock">
        <h3>Назначения сеанса гемодиализа</h3>
        <div className="listTotalBlock">
          <ul className='listFirstTotal'>
            <li>Программа</li>
            <li>Концентратор Объём</li>
            <li>Антикоагуляция ед.</li>
          </ul>
          <ul className='listSecondTotal'>
            <li>Диализатор</li>
            <li> Игла/ Катетер</li>
            <li>Сухой вес кг</li>
          </ul>
          <ul className='listThirdtTotal'>
            <li>Бикарбонат мл</li>
          </ul>
        </div> 
        </div>

      <Banner />
      <HomeBlock />
      <TextBlock />
    </div>
  );
};

export default Content;
