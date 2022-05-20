import { isBefore } from 'date-fns'
import { format } from 'date-fns/esm'
import { isEqual } from 'lodash'
import React, { useState, useContext, useEffect } from 'react'
import CalendarEventInfo from './CalendarEventInfo'
import { Context } from './Context'
import EventType from './EventType'

interface Props {
  date: Date,
  event?: EventType,
  onCancel: VoidFunction
}

const CalendarEventForm = ({ date, event, onCancel }: Props) => {
  const [calendarEvent, setCalendarEvent] = useState<EventType>()
  const [data, setData] = useState<any>()
  const [editable, setEditable] = useState(false)
  const context = useContext(Context)
  const { addEvent, updateEvent, deleteEvent } = context

  useEffect(() => {
    if (event) {
      setData({...event})
      setCalendarEvent({...event})
      setEditable(false)
      return
    }

    setData({
      date: format(date, 'yyyy-MM-dd'),
      title: '',
      startTime: '',
      endTime: ''
    })
    setEditable(true)
  }, [date, event])

  const handleSave = () => {
    if (!data.title) {
      alert('Please provide title')
      return
    }

    if (!data.startTime) {
      alert('Please provide start time')
      return
    }

    if (!data.endTime) {
      alert('Please provide end time')
      return
    }

    const start = new Date(`1990-01-01 ${data.startTime}`)
    const end = new Date(`1990-01-01 ${data.endTime}`)
    if (isEqual(start, end) || isBefore(end, start)) {
      alert('Invalid time values')
      return
    }

    if (event) {
      updateEvent(data)
      setCalendarEvent({...data})
      setEditable(false)
      return
    }
    
    addEvent(data)
    onCancel()
  }

  const handleDelete = () => {
    deleteEvent(event)
    onCancel()
  }

  const handleCancel = () => {
    if (event) {
      setEditable(false)
      return
    }

    onCancel()
  }

  const handleEdit = () => {
    setData({...calendarEvent})
    setEditable(true)
  }

  if (!data) return null

  if (calendarEvent && !editable) {
    return (
      <CalendarEventInfo
        event={calendarEvent}
        onEdit={handleEdit}
      />
    )
  }

  return (
    <div
      className="calendar-play-event-form"
      onClick={(ev) => ev.stopPropagation()}
    >
      <input
        name="title"
        type="text"
        placeholder="Title"
        value={data.title || ''}
        onChange={(ev) => setData({ ...data, title: ev.target.value })}
      />
      <div>
        <div>
          <label>Start time</label>
          <input
            name="startTime"
            type="time"
            value={data.startTime || ''}
            onChange={(ev) =>
              setData({ ...data, startTime: ev.target.value })
            }
          />
        </div>
        <div>
          <label>End time</label>
          <input
            name="endTime"
            type="time"
            value={data.endTime || ''}
            onChange={(ev) => setData({ ...data, endTime: ev.target.value })}
          />
        </div>
      </div>
      <div>
        {Boolean(event) && (
          <button className="delete" onClick={handleDelete}>
            Delete
          </button>
        )}
        <button className="close" onClick={handleCancel}>
          Cancel
        </button>
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  )
}

export default CalendarEventForm