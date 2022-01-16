import React from 'react';
import classNames from 'classnames';
import { DAYSOFWEEK } from '../../constants';
import Day from '../../components/Day';
import styles from './Calendar.module.scss';

const Calendar: React.FC = () => {
  const renderDaysOfWeek = () => {
    return DAYSOFWEEK.map((weekday, index) => {
      return (
        <div className="column" key={index}>
          {weekday}
        </div>
      )
    });
  };

  const renderDaysOfMonth = () => {
    return new Array(30).fill(null).map((_, index) => {
      return <Day key={index + 1} numberOfDay={index + 1} />
    });
  };

  return (
    <div className={classNames("ui container", styles['wrapper'])}>
      <div className="ui seven column celled grid">
        <div className="row center aligned segment">
          {renderDaysOfWeek()}
        </div>
        <div className="row">
          {renderDaysOfMonth()}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
