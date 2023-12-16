
import NeedleModal from '../Madals/NeedleModal';
import FilterSection from './FilterSection';

import './filter.css';

const Filter = () => {
  return (
    <div className="filterContainer">
      <FilterSection title="Диализатор" placeholder="Диализаторы" />
     <div className="boxfilter">
     <FilterSection title="Концентратор" placeholder="Концентраторы" isNumericInput />
     <FilterSection  title="Объем л." placeholder="10л" isNumericInput />
     </div>
      <NeedleModal />
    </div>
  );
};

export default Filter;
