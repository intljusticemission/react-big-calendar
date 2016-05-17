import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import TimeGutter from '../TimeGutter.jsx';
import '../../less/reset.less'
import '../../less/styles.less'
import moment from 'moment'

storiesOf('components.TimeGutter', module)
  .add('default view', () => {
    return (
      <TimeGutter min={moment('9:00am', 'h:mma').toDate()}
                  max={moment('5:00pm', 'h:mma').toDate()}
                  now={moment('9:20am', 'h:mma').toDate()}
      />
    )
  })

  .add('time is 9:23am', () => {
    return (
      <TimeGutter min={moment('9:00am', 'h:mma').toDate()}
                  max={moment('5:00pm', 'h:mma').toDate()}
                  now={moment('9:23am', 'h:mma').toDate()}
      />
    )
  })

  .add('time is 9:19:59am', () => {
    return (
      <TimeGutter min={moment('9:00am', 'h:mma').toDate()}
                  max={moment('5:00pm', 'h:mma').toDate()}
                  now={moment('9:19:59am', 'h:mm:ssa').toDate()}
      />
    )
  })

  .add('time is 9:20:01am', () => {
    return (
      <TimeGutter min={moment('9:00am', 'h:mma').toDate()}
                  max={moment('5:00pm', 'h:mma').toDate()}
                  now={moment('9:20:01am', 'h:mm:ssa').toDate()}
      />
    )
  })
