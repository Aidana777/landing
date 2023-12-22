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
import './injectionSection.css'

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
        <div className="injection__box_wrapp">
          <div className="injection__box_container">
            <input
              className="injection__box_input"
              type="text"
              placeholder={placeholder1}
            />
        
            <button
              className="global_burger_menu_button"
              onClick={() => openModal(modalContent)}
            >
              <img
                src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg"
                alt=""
              />
            </button>
          </div>
          <div className="injection__box_container">
            <input
              className="injection__box_input"
              type="text"
              placeholder={placeholder2}
            />
            <button
              className="global_burger_menu_button"
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
    <div className="injection__contaier">
    <h3>Тип иньеций</h3>
      <div className="injectionBtns_container">
        <button
          className={`global_button ${selectedButton === 'Игла' ? 'global_button_active' : ''}`}
          onClick={() => {
            onButtonClick('Игла');
            openNeedleTypeModal();
          }}
        >
          Игла
        </button>
        <button
          className={`global_button ${selectedButton === 'Катетер' ? 'global_button_active' : ''}`}
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

