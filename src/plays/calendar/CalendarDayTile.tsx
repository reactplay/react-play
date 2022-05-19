import React, { useContext } from 'react'
import { format } from 'date-fns'
import CalendarEvents from './CalendarEvents'
import CalendarEventForm from './CalendarEventForm'
import { Context } from './Context'

interface Props {
  date: Date,
  showWeek?: boolean
}

const CalendarDayTile = ({ date, showWeek }: Props) => {
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
      className="vincentBCP-calendar-day-tile"
      onClick={handleClick}
    >
      {showWeek && <span className='vincentBCP-calendar-week'>{format(date, "EEE")}</span>}
      <span className="vincentBCP-calendar-day">
        {format(date, date.getDate() === 1 ? "MMM d" : "d")}
      </span>
      <CalendarEvents date={date} />
    </div>
  )
}

export default CalendarDayTile