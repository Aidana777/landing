import React, { useState } from 'react';
import ProgramButtons from "../../programButtons/ProgramButtons";
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
import './content.css'

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
    <div >
      <div className='content_title'>
        <h2 >Назначения сеанса гемодиализа</h2>
        <h3>Программа аппарата </h3>
      </div>
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
      <div className='total_block___buttton_container'>
        <button className='global_button'>Сформировать сеанс</button>
      </div>
      <div className="total__block_container">
        <h4 className='total__block_h3'>Назначения сеанса гемодиализа</h4>
        {/* <div className="listTotalBlock"> */}
          <div className='total__block_list'>
            <span className='total__block_title_container'>
              <img className='total__block_icon' src="" alt="icon" />
              <h4>- Программа</h4> <div></div>
            </span>
            <span className='total__block_title_container'>
              <img className='total__block_icon' src="" alt="icon" />
              <h4>- Диализатор</h4> <div></div>
            </span>
          </div>
          <div className='total__block_list'>
            <span className='total__block_title_container'>
                <img className='total__block_icon' src="" alt="icon" />
                <h4>- Концентратор Объём:</h4> <div></div>
              </span>
              <span className='total__block_title_container'>
                <img className='total__block_icon' src="" alt="icon" />
                <h4>- Игла/ Катетер</h4> <div></div>
              </span>
              <span className='total__block_title_container'>
                <img className='total__block_icon' src="" alt="icon" />
                <h4>- Бикарбонат мл</h4> <div></div>
              </span>
          </div>
          <div className='total__block_list'>
            <span className='total__block_title_container'>
                  <img className='total__block_icon' src="" alt="icon" />
                  <h4>- Антикоагуляция ед. </h4> <div></div>
            </span>
            <span className='total__block_title_container'>
              <img className='total__block_icon' src="" alt="icon" />
              <h4>- Сухой вес кг.</h4> <div></div>
            </span>
          </div>
        </div>
      <Banner />
      <HomeBlock />
      <TextBlock />
    </div>
  );
};

export default Content;
