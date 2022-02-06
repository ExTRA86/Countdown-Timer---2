import React from 'react';
import Countdown from 'react-countdown';

const Timer = ({ newDate, switcher }) => {
  return (
    <Countdown
      date={Date.now() + newDate}
      intervalDelay={0}
      precision={3}
      onComplete={switcher}
      renderer={props => (
        <div>
          <div style={{ marginTop: 20 }} className='loader'>
            <span></span>
          </div>

          <div style={{ marginTop: 20 }}>
            <span className='sub-message'>
              До установленной даты осталось :
            </span>
          </div>

          <div className='clock'>
            <div className='column days'>
              <div className='timer' id='days'>
                {props.days}
              </div>
              <div className='text'>ДНЕЙ</div>
            </div>
            <div className='timer days'>:</div>
            <div className='column'>
              <div className='timer' id='hours'>
                {props.hours}
              </div>
              <div className='text'>ЧАСОВ</div>
            </div>
            <div className='timer'>:</div>
            <div className='column'>
              <div className='timer' id='minutes'>
                {props.minutes}
              </div>
              <div className='text'>МИНУТ</div>
            </div>
            <div className='timer'>:</div>
            <div className='column'>
              <div className='timer' id='seconds'>
                {props.seconds}
              </div>
              <div className='text'>СЕКУНД</div>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default Timer;
