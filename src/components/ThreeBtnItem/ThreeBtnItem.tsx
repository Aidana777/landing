// ThreeBtnItem.tsx

import React, { FC, ReactNode } from 'react';

interface ThreeBtnItemProps {
  label: string;
  placeholder?: string;
}

const ThreeBtnItem: FC<ThreeBtnItemProps> = ({ label, placeholder }) => {
  return (
    <div className="boxThreeBtn">
      <div className='inputBtnBox'>
        <p className='textBtnBlock'>{label}</p>
        <div className="inputBoxContainer">
          <input type="text" className='inputBoxBox' placeholder={placeholder} />
          <button className='btnThreeBlock'>
            <img className='mainBtnImg' src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreeBtnItem;
