import React from 'react'
import { storiesOf } from '@storybook/react'

import { DragableCalendar } from './helpers'
import resources from './helpers/resourceEvents'

storiesOf('Resources')
  .add('demo', () => (
    <DragableCalendar events={resources.events} resources={resources.list} />
  ))
  .add('group by day first', () => (
    <DragableCalendar
      resourceWeekViewHeader="day"
      events={resources.events}
      resources={resources.list}
    />
  ))
