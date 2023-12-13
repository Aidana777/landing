import Filter from '../Filters/Filter'
import './content.css'

const Content = () => {
    return (
        <div className='container'>
            <h3 className='subTitle'>Назначения сеанса гемодиализа</h3>
            <p className='content_Text'>Программа аппарата
                Назначения сеанса гемодиализа
            </p>
            <div className="buttonChose">
                <button className='contentItem'>HD</button>
                <button className='contentItem'>HDF</button>
                <button className='contentItem'>UF</button>
            </div>
            <Filter />
        </div>
    )
}

export default Content