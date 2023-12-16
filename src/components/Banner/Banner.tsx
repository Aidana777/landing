import { useState } from 'react';
import './banner.css'

interface TableRow {
    id: number;
    medication: string;
    path: string;
    start: string;
    end: string;
    session: number;
    days: number;
}

const Banner = () => {
    const [showModalFirst, setShowModalFirst] = useState(false);
    const [showModalSecond, setShowModalSecond] = useState(false);
    const [itemsModalSecond] = useState<string[]>(['мкг', 'мл ', 'мг/ кг ']);
    const [itemsModalSecondBanner] = useState<string[]>(['Перорально', 'Подкожно ', 'Артериально ']);
    const [selectedButton, setSelectedButton] = useState<number | null>(null);
    const [showDosageModal, setShowDosageModal] = useState(false);

    // ... (другие состояния)

    const openDosageModal = () => {
        setShowDosageModal(true);
    };

    const closeDosageModal = () => {
        setShowDosageModal(false);
    };




    const handleButtonClick = (buttonNumber: number) => {
        setSelectedButton(buttonNumber);
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

    const handleDeleteRow = (id: number) => {
        setTableData((prevData) => prevData.filter((row) => row.id !== id));
    };

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
            <section className='doze'>
                <div className="textBox">
                    <h3>Путь приёма</h3>
                    <div className="bannerFirst">
                        <input className='bannerInput' type="text" placeholder='Спр. "Путь приема"' />
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
                            {itemsModalSecondBanner.map((item, index) => (
                                <div key={index} className="deleteBlock">
                                    <p className='todosText'>{item}</p>

                                </div>
                            ))}
                        </div>
                    </div>
                )}





                <div className="textBox">
                    <h3>Дозировка</h3>
                    <div className="bannerFirst">
                        <input className='bannerInput' type="text" placeholder='Спр. "Дозы препаратов"' />
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
                            {itemsModalSecond.map((item, index) => (
                                <div key={index} className="deleteBlock">
                                    <p className='todosText'>{item}</p>

                                </div>
                            ))}
                        </div>
                    </div>
                )}



            </section>
            <div className="seans">
                <h4>Номера сеансов:</h4>
                <button
                    className={`seansBtn ${selectedButton === 1 ? 'selected' : ''}`}
                    onClick={() => handleButtonClick(1)}
                >
                    1
                </button>
                <button
                    className={`seansBtn ${selectedButton === 2 ? 'selected' : ''}`}
                    onClick={() => handleButtonClick(2)}
                >
                    2
                </button>
                <button
                    className={`seansBtn ${selectedButton === 3 ? 'selected' : ''}`}
                    onClick={() => handleButtonClick(3)}
                >
                    3
                </button>
                <button
                    className={`seansBtn ${selectedButton === 4 ? 'selected' : ''}`}
                    onClick={() => handleButtonClick(4)}
                >
                    4
                </button>
                <button
                    className={`seansBtn ${selectedButton === 5 ? 'selected' : ''}`}
                    onClick={() => handleButtonClick(5)}
                >
                    5
                </button>
                <button
                    className={`seansBtn ${selectedButton === 6 ? 'selected' : ''}`}
                    onClick={() => handleButtonClick(6)}
                >
                    6
                </button>
                <button
                    className={`seansBtn ${selectedButton === 7 ? 'selected' : ''}`}
                    onClick={() => handleButtonClick(7)}
                >
                    7
                </button>
            </div>
            <section className='dateBlock'>
                <div className="begginDate">
                    <h3>Начало приёма</h3>
                    <input type="date" name="begin" />
                </div>
                <div className="endnDate">
                    <h3>Конец приёма</h3>
                    <input type="date" name="begin" />
                </div>
                <div className='dateText'>Количество сеансов:3</div>
            </section>
            <div>
                <button onClick={handleCreateRow}>Сформировать</button>
            </div>
            <div className="tablet">
                <table>
                    <thead>
                        <tr>
                            <th>Лекарство</th>
                            <th>Путь приёма</th>
                            <th>Начало приёма</th>
                            <th>Конец приёма</th>
                            <th>Номер сеанса</th>
                            <th>Дней</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.medication}</td>
                                <td>{row.path}</td>
                                <td>{row.start}</td>
                                <td>{row.end}</td>
                                <td>{row.session}</td>
                                <td>{row.days}</td>
                                <td>
                                    <img
                                        src="../../../icons/delete.svg"
                                        alt="Delete"
                                        onClick={() => handleDeleteRow(row.id)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </td>
                            </tr>
                        ))}
                        {[...Array(8 - tableData.length)].map((_, index) => (
                            <tr key={`empty-${index}`}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Banner