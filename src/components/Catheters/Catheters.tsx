import React from 'react'
import './catheter.css'
const Catheters = () => {
    return (
        <div>
            <div className="cathetersBlock">

                <div className="catheterModalFirst">
                    <div className="boxCather">
                        <input className='inputCather' type="text" placeholder=' Спр. "Катетеры"' />
                        <button className='catherBtn'>
                            <img src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg" alt="" />
                        </button>
                    </div>
                </div>

                <div className="catheterModalSecond">
                    <div className="boxCather">
                        <input className='inputCather' type="text" placeholder='Спр. "Типы катетеров"' />
                        <button className='catherBtn'>
                            <img src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Catheters
