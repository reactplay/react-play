import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  getWeekOfMonth,
  isWeekend,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import EventType from "./EventType";

export const getDummyEvents = (): EventType[] => {
  // create fake events

  const startDate = startOfWeek(startOfMonth(new Date()), { weekStartsOn: 0 });
  const endDate = endOfWeek(endOfMonth(new Date()), { weekStartsOn: 0 });

  let curDate = startDate;

  let events: EventType[] = [];

  const addEvent = (date: Date) => {
    // add event only if date is Mon - Fri
    if (isWeekend(date)) return;

    events.push({
      id: format(date, "yyyy-MM-dd"),
      date: format(date, "yyyy-MM-dd"),
      title: "Daily stand up",
      startTime: "09:30",
      endTime: "10:00",
    });

    if (getWeekOfMonth(date) % 2 === 0 && date.getDay() === 2) {
      events.push({
        id: `${format(date, "yyyy-MM-dd")}-key`,
        date: format(date, "yyyy-MM-dd"),
        title: "Sprint Planning",
        startTime: "15:00",
        endTime: "17:00",
      });
    }
  };

  do {
    addEvent(curDate);
    curDate = addDays(curDate, 1);
  } while (format(curDate, "yyyy-MM-dd") !== format(endDate, "yyyy-MM-dd"));

  addEvent(curDate);

  events = events.concat([
    {
      id: "1",
      date: format(new Date(), "yyyy-MM") + "-13",
      title: "Lorem ipsum dolor sit amet",
      startTime: "07:30",
      endTime: "08:30",
    },
    {
      id: "2",
      date: format(new Date(), "yyyy-MM") + "-13",
      title: "Lorem ipsum dolor sit amet",
      startTime: "10:00",
      endTime: "11:00",
    },
    {
      id: "3",
      date: format(new Date(), "yyyy-MM") + "-13",
      title: "Lorem ipsum dolor sit amet",
      startTime: "12:30",
      endTime: "13:30",
    },
    {
      id: "4",
      date: format(new Date(), "yyyy-MM") + "-13",
      title: "Lorem ipsum dolor sit amet",
      startTime: "14:00",
      endTime: "14:30",
    },
  ]);

  return events;
};
