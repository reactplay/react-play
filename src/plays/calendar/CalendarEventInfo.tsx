import { format } from 'date-fns'
import React from 'react'
import EventType from './EventType'

interface Props {
  event: EventType,
  onEdit: VoidFunction
}

const CalendarEventInfo = ({ event, onEdit }: Props) => {
  return (
    <div className='calendar-play-event-info'>
      <p>{event.title}</p>
      <p>{format(new Date(`1990-01-01 ${event.startTime}`), 'h:mm a')} - {format(new Date(`1990-01-01 ${event.endTime}`), 'h:mm a')}</p>
      <div>
        <button onClick={onEdit}>
          Edit
        </button>
      </div>
    </div>
  )
}

export default CalendarEventInfo