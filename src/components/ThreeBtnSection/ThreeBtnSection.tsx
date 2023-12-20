
import ThreeBtnItem from '../ThreeBtnItem/ThreeBtnItem';

const ThreeBtnSection: React.FC = () => {
  return (
    <div className="threeBtn">
      <ThreeBtnItem label="Диализатор" placeholder='Спр. "Диализаторы"' />
      <div className="innerBlockBtns">
        <ThreeBtnItem label="Концентратор" placeholder='Спр. "Концентраторы"' />
        <div className="boxThreeBtnSmall">
          <p className="textBtnBlock">Объем л.</p>
          <div className="div">
            <p className="divText">10 л.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeBtnSection;
