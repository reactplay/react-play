import React from 'react'
import { format } from 'date-fns'
import CalendarEvent from './CalendarEvent'
import EventType from './EventType'

interface Props {
  date: Date,
  events: EventType[]
}

const CalendarEventsMore = ({ date, events }: Props) => {
  return (
    <div className="calendar-play-events-more">
      <span>{events.length} more</span>
      <div className="calendar-play-events-more-popup">
        <div>
          <span>{format(date, "ccc")}</span>
          <span>{format(date, "dd")}</span>
        </div>
        <div>
          {events.map(event => (
            <CalendarEvent key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CalendarEventsMore