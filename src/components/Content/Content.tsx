
import '../css/style.css'
import ProgramButtons from './ProgramButtons';
import ThreeBtnSection from '../ThreeBtnSection/ThreeBtnSection';
import InjectionSection from '../InjectionSection/InjectionSection';
import Banner from '../Banner/Banner';
import TextBlock from '../TextBlock/TextBlock';
import HomeBlock from '../HomeBlock/HomeBlock';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {
  setSelectedProgram,
  setSelectedButton,
} from '../Slices/contentSlice';

const Content = () => {
  const dispatch = useDispatch();
  const contentState = useSelector((state: RootState) => state.content);

  return (
    <div className="container">
      <h3 className="subTitle">Назначения сеанса гемодиализа</h3>
      <p className="content_Text">Программа аппарата Назначения сеанса гемодиализа</p>

      <ProgramButtons
        programOptions={['HD', 'HDF', 'UF']}
        selectedProgram={contentState.selectedProgram}
        onSelectProgram={(program) => dispatch(setSelectedProgram(program))}
      />

      <ThreeBtnSection />

      <InjectionSection
        selectedButton={contentState.selectedButton}
        onButtonClick={(btn: string | null) => {
          dispatch(setSelectedButton(btn));
          // Additional logic if needed
        }}
      />



     <Banner/>
     <HomeBlock/>
     <TextBlock/>
    </div>
  );
};

export default Content;
