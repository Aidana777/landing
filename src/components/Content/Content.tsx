// Content.tsx

import React, { useState } from 'react';
import ThreeBtnItem from '../ThreeBtnItem/ThreeBtnItem';
import Modal from '../ModalProps/ModalProps';
import './content.css';
import Banner from '../Banner/Banner';
import TextBlock from '../TextBlock/TextBlock';
import HomeBlock from '../HomeBlock/HomeBlock';

const Content = () => {
  const [selectedProgram, setSelectedProgram] = useState<string>('');
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [, setModalContent] = useState<string>('');
  const [inputValueFirst, setInputValueFirst] = useState('');
  const [itemsModalFirst, setItemsModalFirst] = useState<string[]>([
    'Игла размер №1',
    'Игла размер №2',
    'Игла размер №3',
    'Игла размер №4',
  ]);

  const [isNeedleTypeModalOpen, setIsNeedleTypeModalOpen] = useState<boolean>(false);
  const [isCatheterTypeModalOpen, setIsCatheterTypeModalOpen] = useState<boolean>(false);

  const [needleTypeContent, setNeedleTypeContent] = useState<string>('');
  const [catheterTypeContent, setCatheterTypeContent] = useState<string>('');
  const [showModalBanner, setShowModalBanner] = useState(false);
  const openModalBanner = () => {
    setShowModalBanner(true);
};

const closeModalBanner = () => {
    setShowModalBanner(false);
};

  const handleRemoveItemFirst = (index: number) => {
    setItemsModalFirst((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handleInputChangeFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValueFirst(e.target.value);
  };

  const handleAddItemFirst = () => {
    if (inputValueFirst.trim() !== '') {
      setItemsModalFirst((prevItems) => [...prevItems, inputValueFirst]);
      setInputValueFirst('');
    }
  };

  const handleButtonClick = (btn: string) => {
    setSelectedButton(btn);
  };

  const openModal = (content: string) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const openNeedleTypeModal = () => {
    setIsNeedleTypeModalOpen(true);
    // Set content for NeedleTypeModal
    setNeedleTypeContent('Content for Типы иглы');
  };

  const openCatheterTypeModal = () => {
    setIsCatheterTypeModalOpen(true);
    // Set content for CatheterTypeModal
    setCatheterTypeContent('Content for Типы катетеров');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsNeedleTypeModalOpen(false);
    setIsCatheterTypeModalOpen(false);
    setModalContent('');
    setNeedleTypeContent('');
    setCatheterTypeContent('');
    setSelectedButton(null);
  };

  const renderContent = () => {
    if (selectedButton === 'Игла' || selectedButton === 'Катетер') {
      const placeholder1 = selectedButton === 'Игла' ? 'Спр. "Иглы"' : 'Спр. "Катетеры"';
      const placeholder2 =
        selectedButton === 'Игла' ? 'Спр. "Типы иглы"' : 'Спр. "Типы катетеров"';
      const modalContent = selectedButton === 'Игла' ? needleTypeContent : catheterTypeContent;

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

  const handleProgramSelect = (program: string) => {
    setSelectedProgram(program);
  };

  const programOptions = ['HD', 'HDF', 'UF'];

  return (
    <div className="container">
      <h3 className="subTitle">Назначения сеанса гемодиализа</h3>
      <p className="content_Text">Программа аппарата Назначения сеанса гемодиализа</p>
      <div className="buttonChose">
        {programOptions.map((program, index) => (
          <button
            key={index}
            className={`contentItem ${selectedProgram === program ? 'selected' : ''}`}
            onClick={() => handleProgramSelect(program)}
          >
            {program}
          </button>
        ))}
      </div>
      <div className="threeBtn">
        <ThreeBtnItem label="Диализатор" placeholder='Спр. "Диализаторы"' />
        <div className="innerBlockBtns">
          <ThreeBtnItem label="Концентратор" placeholder='Спр. "Концентраторы"' />
          <div className="boxThreeBtnSmall">
            <p className="textBtnBlock">Объем л.</p>
            <div className="div">
              <p className="divText">10 л.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="injection">
        <div className="injectionBtns">
          <button
            className={`injectionBtn ${selectedButton === 'Игла' ? 'selected' : ''}`}
            onClick={() => {
              handleButtonClick('Игла');
              openNeedleTypeModal();
            }}
          >
            Игла
          </button>
          <button
            className={`injectionBtn ${selectedButton === 'Катетер' ? 'selected' : ''}`}
            onClick={() => {
              handleButtonClick('Катетер');
              openCatheterTypeModal();
            }}
          >
            Катетер
          </button>
        </div>

        {renderContent()}

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {selectedButton === 'Игла' && (
            <div className="needleInnerModal">
              <div className="needleInnerModal">
                <h3>Лекарственные препараты</h3>
                <button onClick={closeModal}>Закрыть</button>
                <div className="innerFoms">
                  <div className="starchForm">
                    <input
                      className="inerField"
                      type="text"
                      placeholder="Поиск позиции по первым символам"
                    />
                    <button className="innerBtn">
                      <img
                        src="../../../icons/search-svgrepo-com.svg"
                        alt=""
                      />
                    </button>
                  </div>

                  <div className="innerTodos">
                    <input
                      className="inerField"
                      type="text"
                      placeholder="Добавить новую запись"
                      value={inputValueFirst}
                      onChange={handleInputChangeFirst}
                    />
                    <button className="innerBtn" onClick={handleAddItemFirst}>
                      <img src="../../../icons/add.svg" alt="" />
                    </button>
                  </div>
                  <section className='textDelete'>
                    <ul>
                      {itemsModalFirst.map((item, index) => (
                        <div className="textList" key={index}>
                          <li className='innerTextAlem'>
                            {item}
                            <button
                              className="deleteBtn"
                              onClick={() => handleRemoveItemFirst(index)}
                            >
                              <img src="../../../icons/delete.svg" alt="" />
                            </button>
                          </li>
                          <button className='rightArrow'>
                            <img src="../../../icons/right.svg" alt="" />
                          </button>
                        </div>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          )}

          {selectedButton === 'Катетер' && (
            <div className="catheterInnerModal">
              <h3> "Катетеры"</h3>
              {/* ... (rest of the code for the Catheter modal) */}
            </div>
          )}

          {isNeedleTypeModalOpen && (
            <div className="needleTypeInnerModal">
              <h3>Справочник "Типы иглы"</h3>
              {needleTypeContent}
            </div>
          )}

          {isCatheterTypeModalOpen && (
            <div className="catheterTypeInnerModal">
              <h3>Справочник "Типы катетеров"</h3>
              {catheterTypeContent}
            </div>
          )}
        </Modal>
      </div>

      <div className="cantainerCarbonen">
        <div className="boxCarbone">
          <h3 className='carboneText'>Бикарбонат</h3>
          <div className="blockCarbone">
            <input type="text" className='blockCarbonInput' placeholder='ХХХ гр / л' />
            <button className='carboneBtn'  onClick={openModalBanner}>
              <img
                src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg"
                alt=""
              />
            </button>
          </div>
        </div>

        {showModalBanner && (
    <Modal isOpen={showModalBanner} onClose={closeModalBanner}>
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
)}


        <div className="boxCarbone">
          <h3 className='carboneText'>Сухой Вес пациента</h3>
          <div className="blockCarbone">
            <input type="number" className='blockCarbonInputSmall' placeholder='ХХХ кг' />
          </div>
        </div>

        <div className="boxCarbone">
          <h3 className='carboneText'>Антикоагуляция</h3>
          <div className="blockCarbone">
            <input type="text" className='blockCarbonInput' placeholder='Наименование' />
            <button className='carboneBtn'>
              <img
                src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="boxCarbone">
          <h3 className='carboneText'>Объем</h3>
          <div className="blockCarbone">
            <input type="number" className='blockCarbonInputSmall' placeholder='ХХХ ед' />
          </div>
        </div>
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
