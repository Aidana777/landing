
import Modal from '../ModalProps/ModalProps';

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
    <div className="cantainerCarbonen">
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
    <div className="boxCarbone">
      <h3 className='carboneText'>Бикарбонат</h3>
      <div className="blockCarbone">
        <input type="text" className='blockCarbonInput' placeholder='ХХХ гр / л' />
        <button className='carboneBtn' onClick={openModalBanner}>
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
    <div className="boxCarbone">
      <h3 className='carboneText'>{label}</h3>
      <div className="blockCarbone">
        <input type="number" className='blockCarbonInputSmall' placeholder={placeholder} />
      </div>
    </div>
  );
};

interface CarboneBoxWithButtonProps {
  label: string;
  placeholder: string;
}

const CarboneBoxWithButton: React.FC<CarboneBoxWithButtonProps> = ({ label, placeholder }) => {
  return (
    <div className="boxCarbone">
      <h3 className='carboneText'>{label}</h3>
      <div className="blockCarbone">
        <input type="text" className='blockCarbonInput' placeholder={placeholder} />
        <button className='carboneBtn'>
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
