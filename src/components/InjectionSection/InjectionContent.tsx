
import '../css/style.css'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setModalContent, setIsModalOpen } from '../Slices/contentSlice';
import Modal from '../ModalProps/ModalProps';

const InjectionContent: React.FC = () => {
  const dispatch = useDispatch();
  const contentState = useSelector((state: RootState) => state.content);

  const openModal = (content: string) => {
    dispatch(setModalContent(content));
    dispatch(setIsModalOpen(true));
  };

  const renderContent = () => {
    if (contentState.selectedButton === 'Игла' || contentState.selectedButton === 'Катетер') {
      const placeholder1 = contentState.selectedButton === 'Игла' ? 'Спр. "Иглы"' : 'Спр. "Катетеры"';
      const placeholder2 =
        contentState.selectedButton === 'Игла' ? 'Спр. "Типы иглы"' : 'Спр. "Типы катетеров"';
      const modalContent =
        contentState.selectedButton === 'Игла' ? contentState.needleTypeContent : contentState.catheterTypeContent;

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
    <>
      {renderContent()}
    </>
  );
};

export default InjectionContent;
