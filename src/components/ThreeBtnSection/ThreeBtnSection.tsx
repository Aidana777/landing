import ThreeBtnItem from '../ThreeBtnItem/ThreeBtnItem';
import './threeBtnSection.css'

const ThreeBtnSection: React.FC = () => {
  return (
    <div className="three__Content">
      <ThreeBtnItem label="Диализатор" placeholder='Спр. "Диализаторы"' />
      <div className="threeContent__block2_continer">
        <ThreeBtnItem label="Концентратор" placeholder='Спр. "Концентраторы"' />
        <div className='threeContent__block2_container_input' >
          <h3 >Объем л.</h3>
         <input className='threeContent__block2_input' type="number" placeholder='10 л' />
        </div>
      </div>
    </div>
  );
};

export default ThreeBtnSection;
