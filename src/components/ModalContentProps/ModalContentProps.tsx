import './modal.css'

interface ModalContentProps {
  closeModal: () => void;
  handleNewTodoInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddTodo: () => void;
  handleDeleteTodo: (index: number) => void;
  newTodoInput: string;
  todos: string[];
}

const ModalContent: React.FC<ModalContentProps> = ({
  closeModal,
  handleNewTodoInputChange,
  handleAddTodo,
  handleDeleteTodo,
  newTodoInput,
  todos,
}) => {
  return (
    <div>
      <h3>Иглы</h3>
      <button className='closeModal' onClick={closeModal}>Закрыть</button>
      <div className="searchBlock">
        <input
          placeholder='Поиск позиции по первым символам'
          type="text"
          className='inputModal'
        />
        <button className='btnSearchIcon'>
          <img className='searchImg' src="../../../icons/search-svgrepo-com.svg" alt="searchImg" />
        </button>
      </div>

      <div className="todos">
        <input
          type="text"
          className='inputModal'
          placeholder='Добавить новую запись'
          value={newTodoInput}
          onChange={handleNewTodoInputChange}
        />
        <button className='btnSearchIcon' onClick={handleAddTodo}>
          <img className='searchImg' src="../../../icons/add-circle-svgrepo-com.svg" alt="searchImg" />
        </button>
      </div>

      <div className="textTodosBlock">
        {todos.map((todo, index) => (
          <div key={index} className="todoItem">
            <p className="textTodos">{todo}</p>
            <div className='deleteBtn' onClick={() => handleDeleteTodo(index)}>
              <img className='deleteBtnImg' src="../../../icons/delete-filled-svgrepo-com.svg" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalContent;
