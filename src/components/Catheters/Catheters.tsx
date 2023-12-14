import React, { useState } from 'react';
import CatheterModal from '../CatheterModal/CatheterModal';
import './catheter.css';

const Catheters = () => {
    const [isCatheterModalOpen, setIsCatheterModalOpen] = useState(false);
    const [selectedCatheter, setSelectedCatheter] = useState('');

    const openCatheterModal = () => {
        setIsCatheterModalOpen(true);
    };

    const closeCatheterModal = () => {
        setIsCatheterModalOpen(false);
    };

    const handleSelectCatheter = (catheter: string) => {
        setSelectedCatheter(catheter);
        closeCatheterModal();
    };

    return (
        <div>
            <div className="cathetersBlock">
                <div className="block firstModal">
                    <div className="box first_Modal">
                        <input className='input modalFi' type="text" placeholder='Спр. "Катетеры"' />
                        <button className='btn btn_First'>
                            <img src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg" alt="" />
                        </button>
                    </div>
                </div>

                <div className="block secondModal">
                    <div className="box Modal_Second">
                        <input
                            className='input modal_Second'
                            type="text"
                            placeholder='Справочник "Катетеры"'
                            value={selectedCatheter}
                            readOnly
                        />
                        <button className='btn btn_Second' onClick={openCatheterModal}>
                            <img src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>

            {isCatheterModalOpen ? (
                <CatheterModal isOpen={isCatheterModalOpen} onClose={closeCatheterModal} onSelectCatheter={handleSelectCatheter} />
            ) : null}
        </div>
    );
};

export default Catheters;
