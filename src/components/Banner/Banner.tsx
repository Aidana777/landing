// Banner.tsx
import React, { useState } from 'react';
import Modal from '../ModalProps/ModalProps';
import Button from '../Button/Button';
import './banner.css';

interface TableRow {
    id: number;
    medication: string;
    path: string;
    start: string;
    end: string;
    session: number;
    days: number;
}

const Banner: React.FC = () => {
    const [showModalFirst, setShowModalFirst] = useState(false);
    const [showDosageModal, setShowDosageModal] = useState(false);
    const [selectedButton, setSelectedButton] = useState<number | null>(null);
    const [itemsModalSecondDoza] = useState<string[]>(['мкг', 'мл ', 'мг/ кг ']);
    const [itemsModalSecond] = useState<string[]>(['доза 1', 'доза 2']); // Add your items

    const closeModalFirst = () => {
        setShowModalFirst(false);
    };

    const closeDosageModal = () => {
        setShowDosageModal(false);
    };

    const handleButtonClick = (sessionNumber: number) => {
        setSelectedButton(sessionNumber);
    };

    return (
        <div>
            <div className="container">
                <h3>Назначения после сеанса</h3>
                <p>Лекарственный препарат</p>
            </div>

            {/* Medication Modal */}
            <Modal isOpen={showModalFirst} onClose={closeModalFirst}>
                <div className="inner innerModalFirst">
                    {/* ... (content for Medication Modal) */}
                </div>
            </Modal>

            {/* Dosage Modal */}
            <Modal isOpen={showDosageModal} onClose={closeDosageModal}>
                <div>
                    <h3>Справочник "Дозы препаратов"</h3>
                    {itemsModalSecondDoza.map((item, index) => (
                        <div key={index} className="deleteBlock">
                            <p className="todosText">{item}</p>
                        </div>
                    ))}
                </div>
            </Modal>
            <div className="seans">
                <h4>Номера сеансов:</h4>
                {[1, 2, 3, 4, 5, 6, 7].map((sessionNumber) => (
                    <Button
                        key={sessionNumber}
                        label={sessionNumber.toString()}
                        onClick={() => handleButtonClick(sessionNumber)}
                        selected={selectedButton === sessionNumber}
                    />
                ))}
            </div>

        </div>
    );
};

export default Banner;
