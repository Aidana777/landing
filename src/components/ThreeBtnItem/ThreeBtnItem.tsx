// ThreeBtnItem.tsx
import './ThreeBtnItem.css'
interface ThreeBtnItemProps {
  label: string;
  placeholder: string;
}

const ThreeBtnItem: React.FC<ThreeBtnItemProps> = ({ label, placeholder }) => {
  return (
  <div className="threeBtn__container">
     <h3 >{label}</h3>
      <div className="threeBtn__container_input">
      <input className="threeBtn__input" type="text" placeholder={placeholder} />
      <button className='global_burger_menu_button'>
        <img src="../../../icons/burger-checklist-list-menu-navigation-svgrepo-com.svg" alt="" />
      </button>
    </div>
  </div>
  );
};

export default ThreeBtnItem;
