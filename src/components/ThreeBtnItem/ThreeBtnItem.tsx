// ThreeBtnItem.tsx
import './ThreeBtnItem.css'
interface ThreeBtnItemProps {
  label: string;
  placeholder: string;
}

const ThreeBtnItem: React.FC<ThreeBtnItemProps> = ({ label, placeholder }) => {
  return (
  <div className="boxItems">
     <label className="threeBtnItemLabel">{label}</label>
      <div className="threeBtnItem">
      <input className="threeBtnItemInput" type="text" placeholder={placeholder} />
      <button className="threeBtnItemBtn">
        <img src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg" alt="" />
      </button>
    </div>
  </div>
  );
};

export default ThreeBtnItem;
