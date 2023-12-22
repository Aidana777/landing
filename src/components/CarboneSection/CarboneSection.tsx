import Modal from '../ModalProps/ModalProps';
import './carboneSection.css'
interface CarboneSectionProps {
  openModalBanner: () => void;
  closeModalBanner: () => void;
  showModalBanner: boolean;
}

const CarboneSection: React.FC<CarboneSectionProps> = ({
  openModalBanner,
  closeModalBanner,
  showModalBanner,
}) => {
  return (
    <div className="carbonen__container">
      <CarboneBox openModalBanner={openModalBanner} />
      {showModalBanner && <CarboneModal onClose={closeModalBanner} />}
      <CarboneBoxInputSmall label="Сухой Вес пациента" placeholder="ХХХ кг" />
      <CarboneBoxWithButton label="Антикоагуляция" placeholder="Наименование" />
      <CarboneBoxInputSmall label="Объем" placeholder="ХХХ ед" />
    </div>
  );
};

interface CarboneBoxProps {
  openModalBanner: () => void;
}

const CarboneBox: React.FC<CarboneBoxProps> = ({ openModalBanner }) => {
  return (
    <div className="carbone__box">
      <h3 >Бикарбонат</h3>
      <div className="carbone__block">
        <input type="text" className='carbone__input' placeholder='ХХХ гр / л' />
        <button className='global_burger_menu_button' onClick={openModalBanner}>
          <img
            src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

interface CarboneModalProps {
  onClose: () => void;
}

const CarboneModal: React.FC<CarboneModalProps> = ({ onClose }) => {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="modalContent">
        <div className="blockTiteCarbont">
          <h3 className='listCarbonModalTitle'>Справочник "Бикарбонат"</h3>
        </div>
        <div className="listCarbonModal">
          <p className='listCarboneText'> граммов</p>
          <p className='listCarboneText'> литров</p>
        </div>
      </div>
    </Modal>
  );
};

interface CarboneBoxInputSmallProps {
  label: string;
  placeholder: string;
}

const CarboneBoxInputSmall: React.FC<CarboneBoxInputSmallProps> = ({ label, placeholder }) => {
  return (
    <div className="carbone__box">
      <h3 className='carbone_small__h3' >{label}</h3>
        <input type="number" className='carbone_small__input' placeholder={placeholder} />
    </div>
  );
};

interface CarboneBoxWithButtonProps {
  label: string;
  placeholder: string;
}

const CarboneBoxWithButton: React.FC<CarboneBoxWithButtonProps> = ({ label, placeholder }) => {
  return (
    <div className="carbone__box">
      <h3 >{label}</h3>
      <div className="carbone__block">
        <input type="text" className='carbone__input' placeholder={placeholder} />
        <button className='global_burger_menu_button'>
          <img
            src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default CarboneSection;
