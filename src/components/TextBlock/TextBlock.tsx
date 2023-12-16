import './text.css'
import { useState, useEffect } from 'react';

const TextBlock: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>('');
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = now.getFullYear();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');

      const formattedDateTime = `${day}.${month}.${year} ${hours}:${minutes}`;
      setCurrentDateTime(formattedDateTime);
    };

    // Update the date and time every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Initial update
    updateDateTime();

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div>
        <h3>Рекомендации</h3>
        <div className="recomedationTodos">
          <input type="text" className='recomedationTodosInput' placeholder='Текст рекомендации пациенту' />
          <button className='addBtn'>
            <img src="../../../icons/add.svg" alt="" />
          </button>
        </div>
        <textarea placeholder='Рекомендации лечащего врача пациенту' rows={10} cols={107} name="text"></textarea>
      </div>
   <div className="mainDataBlock">

   <div className="dateAndTimeBlock">
          <img src="../../../icons/calendar-month-schedule-time-date-svgrepo-com.svg" alt="" />
          <p>{currentDateTime}</p>
        </div>
   
          <img src="../../../icons/doctor.svg" alt="" />
          <p>ФИО лечащего врача  Должность</p>
   </div>
      <button>Сохранить назначения</button>
    </div>
  );
}

export default TextBlock;
