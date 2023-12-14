import React from 'react';
import './catheterModal.css';

interface CatheterModalProps {
    isOpen: React.ReactElement | null; // Change the type here
    onClose: () => void;
    onSelectCatheter: (catheter: string) => void;
}

const CatheterModal: React.FC<CatheterModalProps> = ({ isOpen, onClose, onSelectCatheter }) => {
    const catheters = ["Катетер Фолея", "Катетер Малеко", "Катетер Пеццера", "Катетер Тиманна", "Катетер Нелатона"];

    return (
        isOpen && (
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <h3>Справочник катетеров</h3>
                    <ul>
                        {catheters.map((catheter, index) => (
                            <li key={index} onClick={() => onSelectCatheter(catheter)}>
                                {catheter}
                            </li>
                        ))}
                    </ul>
                    <button onClick={onClose}>Закрыть</button>
                </div>
            </div>
        )
    );
};

export default CatheterModal;
