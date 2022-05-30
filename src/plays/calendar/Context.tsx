import { format } from "date-fns";
import React, { useCallback, useState } from "react";
import { orderBy } from 'lodash'
import { getDummyEvents } from "./utils";
import EventType from "./EventType";

export const Context = React.createContext<any>({
  modalTitle: '',
  modalContent: undefined,
  getEvents: (date: Date) => {},
  addEvent: (event: EventType) => {},
  updateEvent: (event: EventType) => {},
  deleteEvent: (event: EventType) => {},
  showModal: (content: React.ReactNode, title?: '') => {},
  hideModal: () => {}
})

export const ContextProvider = ({ children }: any) => {
  const [events, setEvents] = useState<EventType[]>(getDummyEvents())
  const [modalTitle, setModalTitle] = useState('')
  const [modalContent, setModalContent] = useState<React.ReactNode | undefined>(undefined)

  const getEvents = useCallback((date: Date) => {
    return orderBy(events.filter(e => e.date === format(date, 'yyyy-MM-dd')), ['startTime'])
  }, [events])

  const addEvent = (event: EventType) => {
    event.id = (new Date()).getTime().toString()
    setEvents(oldValue => ([...oldValue, event]))
  }

  const updateEvent = (event: EventType) => {
    setEvents(oldValue => {
      const newEvents = [...oldValue]
      const index = newEvents.findIndex(e => e.id === event.id)

      if (index === -1) return newEvents

      newEvents[index] = event

      return newEvents
    })
  }

  const deleteEvent = (event: EventType) => {
    setEvents(oldValue => {
      const newEvents = [...oldValue]
      const index = newEvents.findIndex(e => e.id === event.id)

      if (index === -1) return newEvents

      newEvents.splice(index, 1)

      return newEvents
    })
  }

  const showModal = (content: React.ReactNode, title?: '') => {
    setModalTitle(title || '')
    setModalContent(content)
  }
  
  const hideModal = () => {
    setModalTitle('')
    setModalContent(undefined)
  }
  
  return (
    <Context.Provider
      value={{
        modalTitle,
        modalContent,
        getEvents,
        addEvent,
        updateEvent,
        deleteEvent,
        showModal,
        hideModal
      }}
    >
      {children}
    </Context.Provider>
  )
}

