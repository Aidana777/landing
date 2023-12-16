
import NeedleModal from '../Madals/NeedleModal';
import FilterSection from './FilterSection';

import './filter.css';

const Filter = () => {
  return (
    <div className="filterContainer">
      <FilterSection title="Диализатор" placeholder="Диализаторы" />
      <FilterSection title="Концентратор" placeholder="Концентраторы" isNumericInput />
      <NeedleModal />
    </div>
  );
};

export default Filter;
