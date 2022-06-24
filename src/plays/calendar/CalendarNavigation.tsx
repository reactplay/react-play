import { addMonths, format } from 'date-fns'
import React from 'react'

interface Props {
  currentDate: Date,
  onDateChange: (date: Date) => void
}

const CalendarNavigation = ({ currentDate, onDateChange }: Props) => {
  const navigateTo = (direction: number) => {
    /*
      -1 = prev
      0 = today
      1 = next
    */

    if (direction === 0) {
      onDateChange(new Date())
      return
    }

    onDateChange(addMonths(currentDate, direction))
  }

  return (
    <div className='calendar-play-navigation'>
      <button onClick={() => navigateTo(0)}>
        Today
      </button>
      <span
        className='calendar-play-navigation-arrow'
        onClick={() => navigateTo(-1)}
      >
        &#x3c;
      </span>
      <span
        className='calendar-play-navigation-arrow'
        onClick={() => navigateTo(1)}
      >
        &#x3e;
      </span>
      <span className='calendar-play-navigation-current-date'>
        {format(currentDate, 'MMMM yyyy')}
      </span>
    </div>
  )
}

export default CalendarNavigation