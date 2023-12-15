import { useState } from 'react';
import './banner.css'
const Banner = () => {
    const [showModalFirst, setShowModalFirst] = useState(false);
    const [showModalSecond, setShowModalSecond] = useState(false);
    const [itemsModalSecond] = useState<string[]>(['мкг', 'мл ', 'мг/ кг ']);
    const [itemsModalSecondBanner] = useState<string[]>(['Перорально', 'Подкожно ', 'Аретериально ']);
    const openModalSecond = () => {
        setShowModalSecond(true);
    };

    const closeModalSecond = () => {
        setShowModalSecond(false);
    };

    const openModalFirst = () => {
        setShowModalFirst(true);
    };

    const closeModalFirst = () => {
        setShowModalFirst(false);
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

    const handleRemoveItemFirst = (index: number) => {
        setItemsModalFirst((prevItems) => prevItems.filter((_, i) => i !== index));
    };

    const [inputValueFirst, setInputValueFirst] = useState('');
    const [itemsModalFirst, setItemsModalFirst] = useState<string[]>(['Игла размер №1', 'Игла размер №2', 'Игла размер №4', 'Игла размер №4']);
    return (
        <div>
            <div className="container">
                <h3>Назначения после сеанса</h3>
                <p>Лекарственный препарат</p>
            </div>
            <div className="modalSession">
                <input className='bannerInput' type="text" placeholder='Спр. "Препараты"' />
                <button className='bannerBtn' onClick={openModalFirst}>
                    <img src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg" alt="" />
                </button>
                {showModalFirst && (
                    <div className="centerModal" onClick={closeModalFirst}>
                        <div className="modal" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-content">
                                <div className=" inner  innerModalFirst">
                                    <h3>Лекарственные препараты</h3>
                                    <button className='closeModal' onClick={closeModalFirst}>Закрыть</button>
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
                                                onChange={handleInputChangeFirst}
                                            />
                                            <button className='innerBtn' onClick={handleAddItemFirst}>
                                                <img src="../../../icons/add.svg" alt="" />
                                            </button>
                                        </div>
                                    </div>

                                    <section className="textTodosBlocks">
                                        <div className="textDelete">
                                            {itemsModalFirst.map((item, index) => (
                                                <div key={index} className="deleteBlock">
                                                    <p className='todosText'>{item}</p>
                                                    <div className="boxBtn">
                                                        <button className="deleteBtn" onClick={() => handleRemoveItemFirst(index)}>
                                                            <img src="../../../icons/delete.svg" alt="" />
                                                        </button>
                                                        <button className='deleteBtn'>
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
            </div>
            <section className='doze'>
                <div className="bannerFirst">
                    <input className='bannerInput' type="text" placeholder='Спр. "Препараты"' />
                    <button className='bannerBtn' onClick={openModalSecond}>
                        <img src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg" alt="" />
                    </button>

                </div>

                {showModalSecond && (
                    <div className="centerModal" onClick={closeModalSecond}>
                        <div className="modal" onClick={(e) => e.stopPropagation()}>
                            <div>
                                <h3>Путь приёма</h3>
                            </div>
                            {itemsModalSecond.map((item, index) => (
                                <div key={index} className="deleteBlock">
                                    <p className='todosText'>{item}</p>

                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="bannerSecond">

                    <input className='bannerInput' type="text" placeholder='Спр. "Препараты"' />
                    <button className='bannerBtn' onClick={openModalSecond}>
                        <img src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg" alt="" />
                    </button>
                </div>
                {showModalSecond && (
                    <div className="centerModal" onClick={closeModalSecond}>
                        <div className="modal" onClick={(e) => e.stopPropagation()}>
                            <div>
                                <h3>Справочник "Дозы препаратов"</h3>
                            </div>
                            {itemsModalSecond.map((item, index) => (
                                <div key={index} className="deleteBlock">
                                    <p className='todosText'>{item}</p>

                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </section>


        </div>
    )
}

export default Banner