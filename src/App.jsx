import { useState } from 'react';
import MyModal from './components/myModal/MyModal';
import Alert from './components/alert/Alert';
import MyButton from './components/button/MyButton';
import Timer from './components/timer/Timer';

function App() {
  const [value1, setValue1] = useState('');

  const [show, setShow] = useState(false);
  const [end, setEnd] = useState(false);
  const [modal, setModal] = useState(false);

  const switcher = () => {
    if (!show && !end) {
      setShow(true);
      setEnd(false);
    } else if (show && !end) {
      setShow(false);
      setEnd(true);
    } else {
      setShow(true);
      setEnd(false);
    }
  };

  let date = new Date(value1);
  let currentDate = new Date();
  let newDate = date - currentDate;

  let minDate =
    currentDate.getFullYear() +
    '-' +
    (currentDate.getMonth() < 9
      ? '0' + (currentDate.getMonth() + 1)
      : currentDate.getMonth() + 1) +
    '-' +
    (currentDate.getDate() < 9
      ? '0' + currentDate.getDate()
      : currentDate.getDate());

  return (
    <>
      <div className='container'>
        <h1>ВИДЖЕТ ТАЙМЕРА ОБРАТНОГО ОТСЧЕТА</h1>
      </div>
      <MyModal visible={modal} setVisible={setModal}>
        <Alert setVisible={setModal} />
      </MyModal>
      <div className='wrapper'>
        {show ? <h2> </h2> : <h2>Введите нужную дату и время </h2>}

        <div>
          <input
            type='datetime-local'
            value={value1}
            min={`${minDate}T00:00`}
            onChange={event => setValue1(event.target.value)}
          />
        </div>
        {show && value1 ? (
          ''
        ) : (
          <MyButton
            onClick={() => {
              value1 && newDate > 0 ? switcher() : setModal(true);
            }}
          >
            Показать отсчет времени
          </MyButton>
        )}

        {show ? <Timer newDate={newDate} switcher={switcher} /> : ''}
      </div>
      {end ? (
        <div style={{ marginTop: 50, fontSize: 80 }}>
          Установленная дата наступила!
        </div>
      ) : (
        ''
      )}
      <div className='footer'>
        <p>Countdown Timer Widget 2022</p>
      </div>
    </>
  );
}

export default App;
