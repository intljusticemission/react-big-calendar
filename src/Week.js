import PropTypes from 'prop-types';
import React from 'react';
import dates from './utils/dates';
import localizer from './localizer';
import { navigate, views } from './utils/constants';

import TimeGrid from './TimeGrid';

class Week extends React.Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
  };

  static defaultProps = TimeGrid.defaultProps;

  render() {
    let { date, ...props } = this.props;
    let range = Week.range(date, this.props);

    return (
      <TimeGrid {...props} range={range} eventOffset={15} view={views.WEEK} />
    );
  }
}

Week.navigate = (date, action) => {
  switch (action){
    case navigate.PREVIOUS:
      return dates.add(date, -1, 'week');

    case navigate.NEXT:
      return dates.add(date, 1, 'week');

    default:
      return date;
  }
};

Week.range = (date, { culture }) => {
  let firstOfWeek = localizer.startOfWeek(culture);
  let start = dates.startOf(date, 'week', firstOfWeek);
  let end = dates.endOf(date, 'week', firstOfWeek);

  return dates.range(start, end)
};


export default Week;
