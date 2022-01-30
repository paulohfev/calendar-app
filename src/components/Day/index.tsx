import React from 'react';
import classNames from 'classnames';
import styles from './Day.module.scss';

type DayProps = {
  numberOfDay: number;
}

const Day: React.FC<DayProps> = ({ numberOfDay }) => {
  return (
    <div className={classNames("column", styles['day-block'])}>
      {numberOfDay}
    </div>
  );
};

export default Day;
