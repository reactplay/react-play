import { useState } from 'react';

const useAge = () => {
  const [message, setMessage] = useState('');
  const [year, setYear] = useState('-');
  const [month, setMonth] = useState('-');
  const [day, setDay] = useState('-');
  const [birthday, setBirthday] = useState('');

  const reset = (e) => {
    e.preventDefault();
    setMessage('Input your birthday');
    setYear('-');
    setMonth('-');
    setDay('-');
    setBirthday('');
  };

  const change = (e) => {
    const { value } = e.target;
    setBirthday(new Date(value));
  };

  const onSubmit = (e) => {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (birthday === '') {
      setMessage('Input your birthday');
    } else {
      const today = new Date();
      const inputDate = new Date(birthday);
      let birthMonth;
      let birthDate;
      let birthYear;
      const birthDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth() + 1,
        year: inputDate.getFullYear()
      };
      const currentYear = today.getFullYear();
      if (currentYear % 4 === 0 || (currentYear % 400 === 0 && currentYear % 100 !== 0)) {
        months[1] = 29;
      } else {
        months[1] = 28;
      }
      const currentMonth = today.getMonth() + 1;
      const currentDate = today.getDate();
      // Not Born check
      if (
        birthDetails.year > currentYear ||
        (birthDetails.month > currentMonth && birthDetails.year === currentYear) ||
        (birthDetails.date > currentDate && birthDetails.year === currentYear)
      ) {
        setMessage('You are not born yet');
        e.preventDefault();
        setYear('-');
        setMonth('-');
        setDay('-');
        reset();
      } else {
        // Calculate Birth Year
        birthYear = currentYear - birthDetails.year;
        // Calculate Birth Month
        if (currentMonth >= birthDetails.month) {
          birthMonth = currentMonth - birthDetails.month;
        } else {
          birthYear -= 1;
          birthMonth = 12 + currentMonth - birthDetails.month;
        }
        // Calculate Birth Date
        if (currentDate >= birthDetails.date) {
          birthDate = currentDate - birthDetails.date;
        } else {
          birthMonth -= 1;
          const days = months[currentMonth - 2];
          birthDate = days + currentDate - birthDetails.date;
          if (birthMonth < 0) {
            birthMonth = 11;
            birthYear -= 1;
          }
        }
        e.preventDefault();
        setYear(birthYear);
        setMonth(birthMonth);
        setDay(birthDate);
        setMessage(`You're ${birthYear} years, ${birthMonth} months, ${birthDate} days old`);
      }
    }
  };

  return { message, day, month, year, change, reset, onSubmit };
};

export default useAge;
