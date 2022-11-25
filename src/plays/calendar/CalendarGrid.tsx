import React, { useState } from 'react'
import CalendarNavigation from './CalendarNavigation'
import CalendarDayTile from './CalendarDayTile'
import { endOfMonth, format, startOfMonth, startOfWeek } from 'date-fns'
import { addDays, endOfWeek } from 'date-fns/esm'

const WEEK_STARTS_ON = 0 // Sunday

const CalendarGrid = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  const generateTiles = () => {
    const startDate = startOfWeek(startOfMonth(currentDate), { weekStartsOn: WEEK_STARTS_ON })
    const endDate = endOfWeek(endOfMonth(currentDate), { weekStartsOn: WEEK_STARTS_ON })

    let curDate = startDate

    const tiles: React.ReactNode[] = []

    do {
      tiles.push(
        <CalendarDayTile
          key={format(curDate, 'yyyy-MM-dd')}
          date={curDate}
          showWeek={tiles.length < 7}
          isToday={format(new Date(), "yyyy-MM-dd") === format(curDate, "yyyy-MM-dd")}
        />
      )

      curDate = addDays(curDate, 1)
    } while(format(curDate, 'yyyy-MM-dd') !== format(endDate, 'yyyy-MM-dd'))

    tiles.push(
      <CalendarDayTile
        key={format(curDate, 'yyyy-MM-dd')}
        date={curDate}
      />
    )

    return tiles
  }

  return (
    <div className='calendar'>
      <CalendarNavigation
        currentDate={currentDate}
        onDateChange={date => setCurrentDate(date)}
      />
      <div className='calendar-play-body'>
        { generateTiles() }
      </div>
    </div>
  )
}

export default CalendarGrid