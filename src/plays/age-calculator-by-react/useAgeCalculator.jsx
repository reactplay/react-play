import useState from 'react';

const useAgeCalculator = () => {
  const [message, setMessage] = useState('');
  const [year, setYear] = useState('-');
  const [daysInMonth, setdaysInMonth] = useState('-');
  const [day, setDay] = useState('-');
  const [birthday, setBirthday] = useState('');

  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const today = new Date();

  const reset = (event) => {
    event.preventDefault();
    setMessage('Input your birthday');
    setYear('-');
    setdaysInMonth('-');
    setDay('-');
    setBirthday('');
  };

  const change = (event) => {
    const { value } = event.target;
    setBirthday(new Date(value));
  };

  const onSubmit = (event) => {
    if (birthday === '') {
      setMessage('Input your birthday');
    } else {
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
        event.preventDefault();
        setYear('-');
        setdaysInMonth('-');
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
        event.preventDefault();
        setYear(birthYear);
        setdaysInMonth(birthMonth);
        setDay(birthDate);
        setMessage(`You're ${birthYear} years, ${birthMonth} months, ${birthDate} days old`);
      }
    }
  };

  return { message, day, daysInMonth, year, change, reset, onSubmit };
};

export default useAgeCalculator;
