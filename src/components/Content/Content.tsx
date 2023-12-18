import React, { useState } from 'react';
import ThreeBtnItem from '../ThreeBtnItem/ThreeBtnItem';
import Modal from '../ModalProps/ModalProps';
import './content.css';

const Content = () => {
  const [selectedProgram, setSelectedProgram] = useState<string>('');
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>('');
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
    // Reset content when modal is closed
    setModalContent('');
    setNeedleTypeContent('');
    setCatheterTypeContent('');
  };

  const renderContent = () => {
    if (selectedButton === 'Игла' || selectedButton === 'Катетер') {
      const placeholder1 = selectedButton === 'Игла' ? 'Спр. "Иглы"' : 'Спр. "Катетеры"';
      const placeholder2 =
        selectedButton === 'Игла' ? 'Спр. "Типы иглы"' : 'Спр. "Типы катетеров"';
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
              onClick={() => openModal('Content for Игла')}
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
              onClick={() => openModal('Content for Катетер')}
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

        {/* Updated modal content based on the selected button */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {selectedButton === 'Игла' && (
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
          )}

          {selectedButton === 'Катетер' && (
            <div className="catheterInnerModal">
              <h3> "Катетеры"</h3>
              {/* ... (добавьте нужный контент для "Катетеров") */}
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
              {/* Use the CatheterTypeContent state here */}
              <h3>Справочник "Типы катетеров"</h3>
              {catheterTypeContent}
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Content;
