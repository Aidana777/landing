

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {
  setIsNeedleTypeModalOpen,
  setIsCatheterTypeModalOpen,
  setNeedleTypeContent,
  setCatheterTypeContent,
  setModalContent,
  setIsModalOpen,
} from '../Slices/contentSlice';

interface InjectionSectionProps {
  selectedButton: string | null;
  onButtonClick: (btn: string | null) => void;
}

const InjectionSection: React.FC<InjectionSectionProps> = ({ selectedButton, onButtonClick }) => {
  const dispatch = useDispatch();
  const contentState = useSelector((state: RootState) => state.content);



  const openModal = (content: string) => {
    dispatch(setModalContent(content));
    dispatch(setIsModalOpen(true));
  };

  const openNeedleTypeModal = () => {
    dispatch(setIsNeedleTypeModalOpen(true));
    dispatch(setNeedleTypeContent('Content for Типы иглы'));
  };

  const openCatheterTypeModal = () => {
    dispatch(setIsCatheterTypeModalOpen(true));
    dispatch(setCatheterTypeContent('Content for Типы катетеров'));
  };

  const renderContent = () => {
    if (selectedButton === 'Игла' || selectedButton === 'Катетер') {
      const placeholder1 = selectedButton === 'Игла' ? 'Спр. "Иглы"' : 'Спр. "Катетеры"';
      const placeholder2 =
        selectedButton === 'Игла' ? 'Спр. "Типы иглы"' : 'Спр. "Типы катетеров"';
      const modalContent =
        selectedButton === 'Игла' ? contentState.needleTypeContent : contentState.catheterTypeContent;

      return (
        <div className="injectionContent">
          <div className="injectionContentBox">
            <input
              className="injectionContentInput"
              type="text"
              placeholder={placeholder1}
            />
            <button
              className="injectionContentBtn"
              onClick={() => openModal(modalContent)}
            >
              <img
                src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg"
                alt=""
              />
            </button>
          </div>
          <div className="injectionContentBox">
            <input
              className="injectionContentInput"
              type="text"
              placeholder={placeholder2}
            />
            <button
              className="injectionContentBtn"
              onClick={() => openModal(modalContent)}
            >
              <img
                src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg"
                alt=""
              />
            </button>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="injection">
      <div className="injectionBtns">
        <button
          className={`injectionBtn ${selectedButton === 'Игла' ? 'selected' : ''}`}
          onClick={() => {
            onButtonClick('Игла');
            openNeedleTypeModal();
          }}
        >
          Игла
        </button>
        <button
          className={`injectionBtn ${selectedButton === 'Катетер' ? 'selected' : ''}`}
          onClick={() => {
            onButtonClick('Катетер');
            openCatheterTypeModal();
          }}
        >
          Катетер
        </button>
      </div>

      {renderContent()}


    </div>
  );
};

export default InjectionSection;

