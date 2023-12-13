import React, { useState } from 'react';
import ModalContent from '../ModalContentProps/ModalContentProps';

const InjectionBlock: React.FC = () => {
  const [selectedType] = useState<string | null>(null);
  const [isModalOpenNeedle, setModalOpenNeedle] = useState(false);
  const [isModalOpenType, setModalOpenType] = useState(false);
  const [newTodoInput, setNewTodoInput] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  const openModalNeedle = () => {
    setModalOpenNeedle(true);
  };

  const closeModalNeedle = () => {
    setModalOpenNeedle(false);
  };

  const openModalType = () => {
    setModalOpenType(true);
  };

  const closeModalType = () => {
    setModalOpenType(false);
  };

  const handleNewTodoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoInput(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodoInput.trim() !== '') {
      setTodos([...todos, newTodoInput]);
      setNewTodoInput('');
    }
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <section className="injection">
      <h3>Тип инъекции</h3>
      <div className="injectionBtns">
        <button
          className={`injectionBtnElem ${selectedType === 'Игла' ? 'selected' : ''}`}
          onClick={() => ('Игла')}
          disabled={selectedType === 'Катетер'}
        >
          Игла
        </button>
        <button
          className={`injectionBtnElem ${selectedType === 'Катетер' ? 'selected' : ''}`}
          onClick={() => ('Катетер')}
          disabled={selectedType === 'Игла'}
        >
          Катетер
        </button>
      </div>

      <div className="dictionary">
        <div className="form">
          <input
            className="injectonInput"
            type="text"
            placeholder='Спр. "Иглы"'
          />
          <button className="filterBtn" onClick={openModalNeedle}>
            <img
              className="btnImgMenu"
              src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg"
              alt=""
            />
          </button>
          {isModalOpenNeedle && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModalNeedle}>
                  &times;
                </span>
                <ModalContent
                  closeModal={closeModalNeedle}
                  handleNewTodoInputChange={handleNewTodoInputChange}
                  handleAddTodo={handleAddTodo}
                  handleDeleteTodo={handleDeleteTodo}
                  newTodoInput={newTodoInput}
                  todos={todos}
                />
              </div>
            </div>
          )}
        </div>

        <div className="form">
          <input
            type="text"
            placeholder='Спр. "Типы иглы"'
            className="injectonInput"
          />
          <button className="filterBtn" onClick={openModalType}>
            <img
              className="btnImgMenu"
              src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg"
              alt=""
            />
          </button>
          {isModalOpenType && (
            <div className="modal">
              <div className="modalContent">
                <span className="close" onClick={closeModalType}>
                  &times;
                </span>
                <ModalContent
                  closeModal={closeModalType}
                  handleNewTodoInputChange={handleNewTodoInputChange}
                  handleAddTodo={handleAddTodo}
                  handleDeleteTodo={handleDeleteTodo}
                  newTodoInput={newTodoInput}
                  todos={todos}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InjectionBlock;
