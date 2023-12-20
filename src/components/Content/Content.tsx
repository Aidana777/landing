// Content.tsx
import React, { useState } from 'react';
import '../css/style.css'
import ProgramButtons from './ProgramButtons';
import ThreeBtnSection from '../ThreeBtnSection/ThreeBtnSection';
import InjectionSection from '../InjectionSection/InjectionSection';
import ModalSection from '../ModalSection/ModalSection';
import Banner from '../Banner/Banner';
import TextBlock from '../TextBlock/TextBlock';
import HomeBlock from '../HomeBlock/HomeBlock';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {
  setSelectedProgram,
  setSelectedButton,
  setIsModalOpen,
  setItemsModalFirst,

} from '../Slices/contentSlice';

const Content = () => {
  const dispatch = useDispatch();
  const contentState = useSelector((state: RootState) => state.content);
  const [inputValueFirst, setInputValueFirst] = useState('');

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

      <ModalSection
        isOpen={contentState.isModalOpen}
        onClose={() => {
          dispatch(setIsModalOpen(false));
          // Additional logic if needed
        }}
        selectedButton={contentState.selectedButton}
        needleTypeContent={contentState.needleTypeContent}
        catheterTypeContent={contentState.catheterTypeContent}
        itemsModalFirst={contentState.itemsModalFirst}
        onRemoveItemFirst={(index: number) => dispatch(setItemsModalFirst(contentState.itemsModalFirst.filter((_, i) => i !== index)))}
        onInputChangeFirst={(e: React.ChangeEvent<HTMLInputElement>) => setInputValueFirst(e.target.value)}
        onAddItemFirst={() => {
          if (inputValueFirst.trim() !== '') {
            dispatch(setItemsModalFirst([...contentState.itemsModalFirst, inputValueFirst]));
            setInputValueFirst('');
          }
        }}
      />

     <Banner/>
     <HomeBlock/>
     <TextBlock/>
    </div>
  );
};

export default Content;
