import React from 'react';
import MyButton from './../button/MyButton';

const Alert = ({ setVisible }) => {
  return (
    <div>
      <h1>Введите корректную дату</h1>
      <MyButton onClick={() => setVisible(false)}>Закрыть</MyButton>
    </div>
  );
};

export default Alert;
