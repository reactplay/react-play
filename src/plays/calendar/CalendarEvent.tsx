import React, { useContext } from 'react'
import { format } from 'date-fns'
import CalendarEventForm from './CalendarEventForm'
import { Context } from './Context'

interface Props {
  event: any
}

const CalendarEvent = ({ event }: Props) => {
  const context = useContext(Context)
  const { showModal, hideModal } = context
  
  const handleClick = () => {
    showModal(
      <CalendarEventForm
        date={new Date(event.date)}
        event={event}
        onCancel={hideModal}
      />,
      format(new Date(event.date), 'ccc, MMMM dd')
    )
  }
  
  return (
    <div
      className='vincentBCP-calendar-event'
      onClick={handleClick}
    >
      <div />
      <span>{format(new Date(`1990-01-01 ${event.startTime}`), 'h:mm aaa')}</span>
      <span>{event.title}</span>
    </div>
  )
}

export default CalendarEvent