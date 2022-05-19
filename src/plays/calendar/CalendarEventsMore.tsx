import React from 'react'
import { format } from 'date-fns'
import CalendarEvent from './CalendarEvent'

interface Props {
  date: Date,
  events: any
}

const CalendarEventsMore = ({ date, events }: Props) => {
  return (
    <div className="calendar-events-more">
      <span>{events.length} more</span>
      <div className="calendar-events-more-popup">
        <div>
          <span>{format(date, "ccc")}</span>
          <span>{format(date, "dd")}</span>
        </div>
        <div>
          {events.map((event: any) => (
            <CalendarEvent key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CalendarEventsMore