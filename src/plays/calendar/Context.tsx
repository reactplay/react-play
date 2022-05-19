import { format } from "date-fns";
import React, { useState, useCallback } from "react";
import { orderBy } from 'lodash'

export const Context = React.createContext<any>({
  modalTitle: '',
  modalContent: undefined,
  getEvents: (date: Date) => {},
  addEvent: (event: any) => {},
  updateEvent: (event: any) => {},
  deleteEvent: (event: any) => {},
  showModal: (content: React.ReactNode, title?: '') => {},
  hideModal: () => {}
})

export const ContextProvider = ({ children }: any) => {
  const [events, setEvents] = useState<any[]>([
    {
      id: '1',
      date: '2022-05-11',
      title: 'Lorem ipsum dolor sit amet consectutar adispiscing',
      startTime: '08:30',
      endTime: '09:00'
    },
    {
      id: '2',
      date: '2022-05-19',
      title: 'Lorem ipsum dolor',
      startTime: '08:30',
      endTime: '09:00'
    },
    {
      id: '3',
      date: '2022-05-23',
      title: 'Lorem ipsum dolor',
      startTime: '08:30',
      endTime: '09:00'
    },
    {
      id: '4',
      date: '2022-05-27',
      title: 'Lorem ipsum dolor',
      startTime: '08:30',
      endTime: '09:00'
    },
    {
      id: '5',
      date: '2022-05-27',
      title: 'Lorem ipsum dolor',
      startTime: '10:30',
      endTime: '11:30'
    },
    {
      id: '6',
      date: '2022-05-27',
      title: 'Lorem ipsum dolor',
      startTime: '12:00',
      endTime: '13:30'
    },
    {
      id: '7',
      date: '2022-05-27',
      title: 'Lorem ipsum dolor',
      startTime: '15:00',
      endTime: '15:30'
    },
    {
      id: '8',
      date: '2022-05-27',
      title: 'Lorem ipsum dolor',
      startTime: '16:30',
      endTime: '17:00'
    }
  ])
  const [modalTitle, setModalTitle] = useState('')
  const [modalContent, setModalContent] = useState<React.ReactNode | undefined>(undefined)

  const getEvents = useCallback((date: Date) => {
    return orderBy(events.filter(e => e.date === format(date, 'yyyy-MM-dd')), ['startTime'])
  }, [events])

  const addEvent = useCallback((event: any) => {
    event.id = (new Date()).getTime().toString()
    setEvents(oldValue => ([...oldValue, event]))
  }, [])

  const updateEvent = useCallback((event: any) => {
    setEvents(oldValue => {
      const newEvents = [...oldValue]
      const index = newEvents.findIndex(e => e.id === event.id)

      if (index === -1) return newEvents

      newEvents[index] = event

      return newEvents
    })
  }, [])

  const deleteEvent = useCallback((event: any) => {
    setEvents(oldValue => {
      const newEvents = [...oldValue]
      const index = newEvents.findIndex(e => e.id === event.id)

      if (index === -1) return newEvents

      newEvents.splice(index, 1)

      return newEvents
    })
  }, [])

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

