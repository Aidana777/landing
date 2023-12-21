import React, { useState } from 'react';
import Modal from '../ModalProps/ModalProps';
import './home.css'
interface TableRow {
    id: number;
    medication: string;
    path: string;
    start: string;
    end: string;
    session: number;
    days: number;
}

const HomeBlock = () => {
    const [showModalFirst, setShowModalFirst] = useState(false);
    const [showModalSecond, setShowModalSecond] = useState(false);
    const [showDosageModal, setShowDosageModal] = useState(false);
    const [showModalBanner, setShowModalBanner] = useState(false);

    const [itemsModalDoza] = useState<string[]>(['мкг', 'мл ', 'мг/ кг ']);
    const [itemsModalSecondBanner] = useState<string[]>(['Перорально', 'Подкожно ', 'Артериально ']);
    const [itemsModalDays] = useState<string[]>(['1 рад в день', '2 рад в день ', '1 рад в день ']);

    const [selectedButton] = useState<number | null>(null);
    const [tableData, setTableData] = useState<TableRow[]>([
        { id: 1, medication: 'Medication 1', path: 'Path 1', start: 'Start 1', end: 'End 1', session: 1, days: 7 },
        { id: 2, medication: 'Medication 2', path: 'Path 2', start: 'Start 2', end: 'End 2', session: 2, days: 14 },
    ]);

    const [inputValueFirst, setInputValueFirst] = useState('');
    const [itemsModalFirst, setItemsModalFirst] = useState<string[]>([
        'Лекарственный препарат №1',
        'Лекарственный препарат №2',
        'Лекарственный препарат №3',
        'Лекарственный препарат №4',
    ]);

    const handleCreateRow = () => {
        const newId = tableData.length + 1;
        const newRow: TableRow = {
            id: newId,
            medication: 'New Medication',
            path: 'New Path',
            start: 'New Start',
            end: 'New End',
            session: selectedButton || 1,
            days: 0,
        };
        setTableData((prevData) => [...prevData, newRow]);
    };

    const openModalBanner = () => {
        setShowModalBanner(true);
    };

    const closeModalBanner = () => {
        setShowModalBanner(false);
    };

    const openDosageModal = () => {
        setShowDosageModal(true);
    };

    const closeDosageModal = () => {
        setShowDosageModal(false);
    };

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

    return (
        <div>
            <div className="container">
                <h3 className='bannerTitle'>Лечение на дому</h3>
                <h3 className='homeTitle'>Лекарственный препарат</h3>
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
                                    <h3 >Лекарственные препараты</h3>
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

                                    <section className='textDelete'>
                                        <ul>
                                            {itemsModalFirst.map((item, index) => (
                                                <div className="textList">
                                                    <li className='innerTextAlem' key={index}>
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
                    </div>
                )}
            </div>
            <section className='doze'>
                <div className="textBox">
                    <h3 className='homeTitle'>Путь приёма</h3>
                    <div className="bannerFirst">
                        <input className='bannerInput' type="text" placeholder='Спр. "Путь приема"' />
                        <button className='bannerBtn' onClick={openDosageModal}>
                            <img src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg" alt="" />
                        </button>

                    </div>
                </div>
                {showDosageModal && (
                    <div className="centerModal" onClick={closeDosageModal}>
                        <div className="modal" onClick={(e) => e.stopPropagation()}>
                            <div className="blockTiteCarbont">
                                <h3 className='listCarbonModalTitle'>Справочник "Путь приема"</h3>
                            </div>
                            {itemsModalSecondBanner.map((item, index) => (
                                <div key={index} className='listCarbonModal'>
                                    <p className='listCarboneText'>{item}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                )}


                <div className="textBox">
                    <h3 className='homeTitle'>Дозировка </h3>
                    <div className="bannerFirst">
                        <input className='bannerInput' type="text" placeholder='Спр. "Дозы препаратов' />
                        <button className='bannerBtn' onClick={openModalSecond}>
                            <img src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg" alt="" />
                        </button>

                    </div>
                </div>

                {showModalSecond && (
                    <div className="centerModal" onClick={closeModalSecond}>
                        <div className="modal" onClick={(e) => e.stopPropagation()}>
                            <div className="blockTiteCarbont">
                                <h3 className='listCarbonModalTitle'>Справочник "Дозы препаратов"</h3>
                            </div>
                            {itemsModalDoza.map((item, index) => (
                                <div key={index} className='listCarbonModal'>
                                    <p className='listCarboneText'>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}


            </section>

            <section className='dateBlock'>
                <div className="textBox">
                    <h3 className='homeTitle'>Кратность приёма </h3>
                    <div className="bannerFirst">

                        <input className='dataInput' type="text" placeholder='Спр. "Кр-ть приема"' />
                        <button className='bannerBtn' onClick={openModalBanner}>
                            <img src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg" alt="" />
                        </button>

                    </div>
                    {showModalBanner && (
                        <Modal isOpen={showModalBanner} onClose={closeModalBanner}>

                            <div className="modalContent">
                                <div className="blockTiteCarbont">
                                    <h3 className='listCarbonModalTitle'>Справочник "Кратность приема"</h3>
                                </div>
                                {itemsModalDays.map((item, index) => (
                                    <div key={index} className='listCarbonModal'>
                                        <p className='listCarboneText'>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </Modal>
                    )}
                </div>



                <div className="endnDate">
                    <h3 className='homeTitle'>Начало приёма</h3>
                    <input className='dataInput' type="date" name="begin" />
                </div>
                <div className="endnDate">
                    <h3 className='homeTitle'>Конец приёма</h3>
                    <input className='dataInput' type="date" name="begin" />
                </div>
            </section>
            <div className='endStartText'>
                <p>Количество дней: <span>ХХ</span>  </p>
            </div>
            <div>
                <button onClick={handleCreateRow} className='totalBtn'>Добавить</button>
                <h3>Лечение на дому</h3>
                <div className="totalBlock">
       
        <div className="listTotalBlock">
          <ul className='listFirstTotal'>
            <li>Лекарственный препарат</li>
            <li>2 раза в день утром и вечером</li>
           
          </ul>
          <ul className='listSecondTotal'>
            <li>Перорально 5 мг</li>
            <li> с 01.01.222 по 10.01.2022</li>
          </ul>
          <ul className='listThirdtTotal'>
            <li>10 дней </li>
          </ul>
        </div> 
        </div>

                

            </div>

            
        </div>
    );
}

export default HomeBlock;
