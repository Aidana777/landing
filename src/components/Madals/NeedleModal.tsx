// NeedleModal.tsx
import React, { useState } from 'react';
import Catheters from '../Catheters/Catheters';
import './needle.css';

const NeedleModal: React.FC = () => {
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [selectedInjectionType, setSelectedInjectionType] = useState<string | null>(null);

  const [itemsModal1, setItemsModal1] = useState<string[]>(['Венозные', 'Артериальные']);
  const [newItemModal1, setNewItemModal1] = useState('');

  const [itemsModal2, setItemsModal2] = useState<string[]>(['Игла размер №1', 'Игла размер №2', 'Игла размер №4', 'Игла размер №4']);
  const [newItemModal2, setNewItemModal2] = useState('');

  const openModal1 = () => {
    setIsModal1Open(true);
    setSelectedInjectionType('Игла');
  };

  const closeModal1 = () => {
    setIsModal1Open(false);
    setSelectedInjectionType(null);
  };

  const openModal2 = () => {
    setIsModal2Open(true);
    setSelectedInjectionType('Катетер');
  };

  const closeModal2 = () => {
    setIsModal2Open(false);
    setSelectedInjectionType(null);
  };

  const handleInputChangeModal1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItemModal1(e.target.value);
  };

  const handleAddItemModal1 = () => {
    if (newItemModal1.trim() !== '') {
      setItemsModal1([...itemsModal1, newItemModal1]);
      setNewItemModal1('');
    }
  };

  const handleRemoveItemModal1 = (index: number) => {
    const updatedItems = [...itemsModal1];
    updatedItems.splice(index, 1);
    setItemsModal1(updatedItems);
  };

  const handleInputChangeModal2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItemModal2(e.target.value);
  };

  const handleAddItemModal2 = () => {
    if (newItemModal2.trim() !== '') {
      setItemsModal2([...itemsModal2, newItemModal2]);
      setNewItemModal2('');
    }
  };

  const handleRemoveItemModal2 = (index: number) => {
    const updatedItems = [...itemsModal2];
    updatedItems.splice(index, 1);
    setItemsModal2(updatedItems);
  };

  return (
    <div>
      <h3>Тип инъекции</h3>
      <section className="needleCatheter">
        <button
          className={`needleCatheterBtn ${selectedInjectionType === 'Игла' ? 'selected' : ''}`}
          onClick={openModal1}
          disabled={!selectedInjectionType}
        >
          Игла
        </button>
        <button
          className={`needleCatheterBtn ${selectedInjectionType === 'Катетер' ? 'selected' : ''}`}
          onClick={openModal2}
          disabled={!selectedInjectionType}
        >
          Катетер
        </button>
      </section>


      <div className="containerNeedle">
        <div className="block firstModal">
          <div className="box first_Modal">
            <input className='input modalFi' type="text" placeholder='Спр. "Иглы"' />
            <button className='btn btn_First' onClick={openModal1}>
              <img src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="block secondModal">
          <div className="box Modal_Second">
            <input className='input modal_Second' type="text" placeholder='Спр. "Типы катетера"' />
            <button className='btn btn_Second' onClick={openModal2}>
              <img src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg" alt="" />
            </button>
          </div>
        </div>

        {isModal1Open && (
          <div className="centerModal" onClick={closeModal1}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content">
                <div className=" inner  innerModalFirst">
                  <h3>Иглы</h3>
                  <button className='closeModal' onClick={closeModal1}>Закрыть</button>
                  <div className="innerFoms">
                    <div className="starchForm">
                      <input
                        className='inerField'
                        type="text"
                        placeholder='Поиск позиции по первым символам'
                      />
                      <button className='innerBtn'>
                        <img src="../../../icons/search-svgrepo-com.svg" alt="" />
                      </button>
                    </div>
                    <div className="innerTodos">
                      <input
                        className='inerField'
                        type="text"
                        placeholder='Добавить новую запись'
                        onChange={handleInputChangeModal1}
                      />
                      <button className='innerBtn' onClick={handleAddItemModal1}>
                        <img src="../../../icons/add.svg" alt="" />
                      </button>
                    </div>
                  </div>

                  <section className="textTodosBlocks">
                    <div className="textDelete">
                      {itemsModal1.map((item, index) => (
                        <div key={index} className="deleteBlock">
                          <p className='todosText'>{item}</p>
                          <div className="boxBtn">
                            <button className="deleteBtn" onClick={() => handleRemoveItemModal1(index)}>
                              <img src="../../../icons/delete.svg" alt="" />
                            </button>
                            <button className='rightArrow'>
                              <img src="../../../icons/right.svg" alt="" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        )}

        {isModal2Open && (
          <div className="centerModal" onClick={closeModal2}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content">
                <div className="inner innerModalFirst">
                  <h3>Типы катетера</h3>
                  <button className='closeModal' onClick={closeModal2}>Закрыть</button>
                  <div className="innerFoms">
                    <div className="starchForm">
                      <input
                        className='inerField'
                        type="text"
                        placeholder='Поиск позиции по первым символам'
                      />
                      <button className='innerBtn'>
                        <img src="../../../icons/search-svgrepo-com.svg" alt="" />
                      </button>
                    </div>
                    <div className="innerTodos">
                      <input
                        className='inerField'
                        type="text"
                        placeholder='Добавить новую запись'
                        onChange={handleInputChangeModal2}
                      />
                      <button className='innerBtn' onClick={handleAddItemModal2}>
                        <img src="../../../icons/add.svg" alt="" />
                      </button>
                    </div>
                  </div>
                  <section className="textTodosBlocks">
                    <div className="textDelete">
                      {itemsModal2.map((item, index) => (
                        <div key={index} className="deleteBlock">
                          <p className='todosText'>{item}</p>
                          <div className="boxBtn">
                            <button className="deleteBtn" onClick={() => handleRemoveItemModal2(index)}>
                              <img src="../../../icons/delete.svg" alt="" />
                            </button>
                            <button className='deleteBtn'></button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Catheters />
    </div>
  );
};

export default NeedleModal;
