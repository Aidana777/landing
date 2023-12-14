import React from 'react'
import './catheter.css'
const Catheters = () => {
    return (
        <div>
            <div className="cathetersBlock">
                <div className="customBlock firstModal">
                    <div className="customBox first_Modal">
                        <input className='customInput modalFi' type="text" placeholder='Спр. "Катетеры"' />
                        <button className='customBtn btn_First'>
                            <img src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg" alt="" />
                        </button>
                    </div>

                </div>

                <div className="customBlock secondModal">
                    <div className="customBox Modal_Second">
                        <input className='customInput modal_Second' type="text" placeholder='Спр. "Типы катетеров"' />
                        <button className='customBtn btn_Second'>
                            <img src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg" alt="" />
                        </button>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Catheters
