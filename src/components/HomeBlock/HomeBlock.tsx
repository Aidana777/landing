import { useState } from 'react';

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
    const [itemsModalDoza] = useState<string[]>(['мкг', 'мл ', 'мг/ кг ']);
    const [itemsModalSecondBanner] = useState<string[]>(['Перорально', 'Подкожно ', 'Артериально ']);
    const [selectedButton] = useState<number | null>(null);
    const [itemsModalDays] = useState<string[]>(['1 рад в день', '2 рад в день ', '1 рад в день ']);

    const [showDosageModal, setShowDosageModal] = useState(false);

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

    const [tableData, setTableData] = useState<TableRow[]>([
        { id: 1, medication: 'Medication 1', path: 'Path 1', start: 'Start 1', end: 'End 1', session: 1, days: 7 },
        { id: 2, medication: 'Medication 2', path: 'Path 2', start: 'Start 2', end: 'End 2', session: 2, days: 14 },
    ]);



    const [inputValueFirst, setInputValueFirst] = useState('');
    const [itemsModalFirst, setItemsModalFirst] = useState<string[]>([
        'Игла размер №1',
        'Игла размер №2',
        'Игла размер №4',
        'Игла размер №4',
    ]);

    const handleCreateRow = () => {
        const newId = tableData.length + 1;
        const newRow: TableRow = {
            id: newId,
            medication: 'New Medication', // Default value for medication
            path: 'New Path', // Default value for path
            start: 'New Start', // Default value for start
            end: 'New End', // Default value for end
            session: selectedButton || 1,
            days: 0,
        };
        setTableData((prevData) => [...prevData, newRow]);
    };

    return (
        <div>
            <div className="container">
                <h3>Лечение на дому</h3>
                <p >Лекарственный препарат</p>
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
                    <h3>Путь приёма</h3>
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
                            <div>
                                <h3>Справочник "Дозы препаратов"</h3>
                            </div>
                            {itemsModalSecondBanner.map((item, index) => (
                                <div key={index} className="deleteBlock">
                                    <p className='todosText'>{item}</p>

                                </div>
                            ))}
                        </div>
                    </div>
                )}


                <div className="textBox">
                    <h3>Дозировка </h3>
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
                            <div>
                                <h3>Справочник "Дозы препаратов"</h3>
                            </div>
                            {itemsModalDoza.map((item, index) => (
                                <div key={index} className="deleteBlock">
                                    <p className='todosText'>{item}</p>

                                </div>
                            ))}
                        </div>
                    </div>
                )}


            </section>

            <section className='dateBlock'>
                <div className="textBox">
                    <h3>Кратность приёма </h3>
                    <div className="bannerFirst">

                        <input className='dataInput' type="text" placeholder='Спр. "Кр-ть приема"' />
                        <button className='bannerBtn' onClick={openModalSecond}>
                            <img src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg" alt="" />
                        </button>

                    </div>
                </div>

                {showModalSecond && (
                    <div className="centerModal" onClick={closeModalSecond}>
                        <div className="modal" onClick={(e) => e.stopPropagation()}>
                            <div>
                                <h3>Справочник "Кратность приема"</h3>
                            </div>
                            {itemsModalDays.map((item, index) => (
                                <div key={index} className="deleteBlock">
                                    <p className='todosText'>{item}</p>

                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="endnDate">
                    <h3>Начало приёма</h3>
                    <input className='dataInput' type="date" name="begin" />
                </div>
                <div className="endnDate">
                    <h3>Конец приёма</h3>
                    <input className='dataInput' type="date" name="begin" />
                </div>
            </section>
            <div className='endStartText'>
                <p>Количество дней: <span>ХХ</span>  </p>
            </div>
            <div>
                <button onClick={handleCreateRow} className='addAllInfo'>Добавить</button>

                <div className="formShow">
                    <h3>Лечение на дому</h3>
                    <div className="formShowTab">
                        <ul className="listRow">
                            <li className='listElem'>Лекарственный препарат
                                Перорально
                                5 мг</li>
                            <li className='listElem'>2 раза в день утром и вечером</li>
                        </ul>
                        <ul className="listRowTwo">
                            с 01.01.222 по 10.01.2022
                        </ul >
                        <ul className='listRowThree'>
                            <li className='listElem'>10 дней</li>
                        </ul>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default HomeBlock