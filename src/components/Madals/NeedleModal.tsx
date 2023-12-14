// NeedleModal.tsx

import React, { useState } from 'react';
import './needle.css';

const NeedleModal: React.FC = () => {
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState('');

  const openModal1 = () => {
    setIsModal1Open(true);
  };

  const closeModal1 = () => {
    setIsModal1Open(false);
  };

  const openModal2 = () => {
    setIsModal2Open(true);
  };

  const closeModal2 = () => {
    setIsModal2Open(false);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem(e.target.value);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <h3>Тип инъекции</h3>
      <section className='needleCatheter'>
        <button className='needleCatheterBtn'>
          Игла
        </button>
        <button className='needleCatheterBtn' >
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
            <input className='input modal_Second' type="text" placeholder='Спр. "Типы иглы"' />
            <button className='btn btn_Second' onClick={openModal2}>
              <img src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg" alt="" />
            </button>
          </div>
        </div>

        {/* Modal 1 */}
        {isModal1Open && (
  <div className="centerModal" onClick={closeModal1}>
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <div className="modal-content">
        <div className=" inner  innerModalFirst">
          <h3>Лекарственные препараты</h3>
          <button className='closeModal' onClick={closeModal1}>Закрыть</button>
          <div className="innerFoms">
            <div className="starchForm">
              <input className='inerField'
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
                onChange={handleInputChange}
              />
              <button className='innerBtn' onClick={handleAddItem}>
                <img src="../../../icons/add.svg" alt="" />
              </button>
            </div>
          </div>

          <section className="textTodosBlocks">
            <div className="textDelete">
              {items.map((item, index) => (
                <div key={index} className="deleteBlock">
                  <p className='todosText'>{item}</p>
                  <button className="deleteBtn" onClick={() => handleRemoveItem(index)}>
                    <img src="../../../icons/delete.svg" alt="" />
                  </button>
                </div>
              ))}
            </div>
            <button className='textBtn'>
              <img src="../../../icons/right.svg" alt="" />
            </button>
          </section>
        </div>
      </div>
    </div>
  </div>
)}


        {/* Modal 2 */}
        {isModal2Open && (
          <div className="centerModal" onClick={closeModal2}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content">
                {/* Add content for the second modal here */}
                <p>This is the content of modal 2.</p>
                <button className='closeModal' onClick={closeModal2}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NeedleModal;
