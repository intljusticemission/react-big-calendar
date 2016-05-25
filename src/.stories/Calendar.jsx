import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Calendar from '../Calendar.jsx';
import moment from 'moment';
import momentLocalizer from '../localizers/moment.js'
import '../less/styles.less'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
momentLocalizer(moment); // or globalizeLocalizer

storiesOf('module.Calendar', module)
  .add('default view', () => {
    return (
      <div style={{height: 900}}>
        <Calendar
          events={[{
            title: 'test',
            start: moment().add(1, 'days').toDate(),
            end: moment().add(1, 'days').add(1, 'hours').toDate()
          }]}
          defaultDate={new Date()}
        />
      </div>
    )
  })
