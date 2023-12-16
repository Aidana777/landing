// Catheters.tsx
import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import HomeBlock from '../HomeBlock/HomeBlock';
import TextBlock from '../TextBlock/TextBlock';
import './catheter.css';

const Catheters: React.FC = () => {
    const [showModalFirst, setShowModalFirst] = useState(false);
    const [inputValueFirst, setInputValueFirst] = useState('');
    const [itemsModalFirst, setItemsModalFirst] = useState<string[]>(['Игла размер №1', 'Игла размер №2', 'Игла размер №4', 'Игла размер №4']);
    const [showModalSecond, setShowModalSecond] = useState(false);
    const [itemsModalSecond] = useState<string[]>(['Катетер Фолея,', 'Катетер Малеко', 'Катетер Пеццера', 'Игла размер №4']);




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

    const openModalSecond = () => {
        setShowModalSecond(true);
    };

    const closeModalSecond = () => {
        setShowModalSecond(false);
    };
    const [showModalBicarbonate, setShowModalBicarbonate] = useState(false);

    const openModalBicarbonate = () => {
        setShowModalBicarbonate(true);
    };

    const closeModalBicarbonate = () => {
        setShowModalBicarbonate(false);
    };
    return (
        <div>
            <div className="cathetersBlock">
                <div className="catheterModalFirst">
                    <div className="boxCather">
                        <input
                            className="inputCather"
                            type="text"
                            placeholder=' Спр. "Катетеры"'
                            onClick={openModalFirst}
                        />
                        <button className="catherBtn" onClick={openModalFirst}>
                            <img src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg" alt="" />
                        </button>
                    </div>
                    {showModalFirst && (
                        <div className="centerModal" onClick={closeModalFirst}>
                            <div className="modal" onClick={(e) => e.stopPropagation()}>
                                <div className="modal-content">
                                    <div className=" inner  innerModalFirst">
                                        <h3> Спр. "Катетеры"</h3>
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
                </div>

                {/* Modal for catheterModalSecond */}
                <div className="catheterModalSecond">
                    <div className="boxCather">
                        <input
                            className="inputCather"
                            type="text"
                            placeholder='Спр. "Типы катетеров"'
                            onClick={openModalSecond}
                        />
                        <button className="catherBtn" onClick={openModalSecond}>
                            <img src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg" alt="" />
                        </button>
                    </div>
                    {showModalSecond && (
                        <div className="centerModal" onClick={closeModalSecond}>
                            <div className="modal" onClick={(e) => e.stopPropagation()}>
                                <div>
                                    <h3>Справочник "Катетеры</h3>
                                </div>
                                {itemsModalSecond.map((item, index) => (
                                    <div key={index} className="deleteBlock">
                                        <p className='todosText'>{item}</p>

                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="mainBlock">
                <div className="subBlock">
                    <p> Бикарбонат</p>
                    <section className="mainBox">

                        <input className='subBlockInput' type="number" placeholder="ХХХ гр / л" />
                        <button className='mainBtn' onClick={openModalBicarbonate}>
                            <img className='mainBtnImg' src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg" alt="" />
                        </button>
                    </section>
                </div>
                {/* Modal for "Бикарбонат" */}
                {showModalBicarbonate && (
                    <div className="centerModal" onClick={closeModalBicarbonate}>
                        <div className="modal" onClick={(e) => e.stopPropagation()}>
                            <div className="bioCarbanat">
                                <h3>Справочник "Бикарбонат"</h3>
                                <div className="textBioCarbanat">
                                    <p>граммов</p>
                                    <p>литров</p>
                                </div>
                            </div>

                        </div>
                    </div>
                )}

                <div className="subBlock">
                    <p>Сухой Вес
                        пациента</p>
                    <section className="mainBox">

                        <input className='subBlockInput' type="number" placeholder=" ХХХ кг" />
                        <button className='mainBtn'>
                            <img className='mainBtnImg' src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg" alt="" />
                        </button>
                    </section>
                </div>
                <div className="subBlock">
                    <p>Антикоагуляция</p>
                    <section className="mainBox">

                        <input className='subBlockInput' type="text" placeholder="Наименование" />
                        <button className='mainBtn'>
                            <img className='mainBtnImg' src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg" alt="" />
                        </button>
                    </section>
                </div>
                <div className="subBlock">
                    <p> Объем</p>
                    <section className="mainBox">
                        <input className='smallBlockInput' type="number" placeholder="ХХХ ед" />
                    </section>
                </div>

            </div>
            <button>Сформировать сеанс</button>
            <div className="formShow">
                <h3>Назначения сеанса гемодиализа</h3>
                <div className="formShowTab">
                    <div className="listRow">
                        <p>Программа</p>
                        <p>Диализатор</p>
                    </div>
                    <div className="listRow">
                        <p>Концентратор
                            Объём</p>

                        <p>Игла/Катетер</p>
                        <p>Бикарбонат мл</p>
                    </div>
                    <div className="listRow">
                        <p>Антикоагуляция ед.</p>
                        <p>Сухой вес кг.</p>
                    </div>
                </div>
            </div>


            <Banner />
            <HomeBlock />
            <TextBlock />
        </div>
    );
};

export default Catheters;
