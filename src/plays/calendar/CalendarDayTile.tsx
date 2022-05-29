import React, { useContext } from 'react'
import { format } from 'date-fns'
import CalendarEvents from './CalendarEvents'
import CalendarEventForm from './CalendarEventForm'
import { Context } from './Context'

interface Props {
  date: Date,
  showWeek?: boolean,
  isToday?: boolean
}

const CalendarDayTile = ({ date, showWeek, isToday }: Props) => {
  const context = useContext(Context)
  const { showModal, hideModal } = context
  
  const handleClick = () => {
    showModal(
      <CalendarEventForm
        date={date}
        onCancel={hideModal}
      />,
      format(date, 'ccc, MMMM dd')
    )
  }

  return (
    <div
      className={`calendar-play-day-tile ${isToday ? "today" : ""}`}
      onClick={handleClick}
    >
      {showWeek && (
        <span className="calendar-play-week">{format(date, "EEE")}</span>
      )}
      <span className="calendar-play-day">
        {format(date, date.getDate() === 1 && !isToday ? "MMM d" : "d")}
      </span>
      <CalendarEvents date={date} />
    </div>
  );
}

export default CalendarDayTile