import moment from 'moment';
import { submit } from 'json-graphql-parser/v2';
import { fetchPlaysDateFiltered } from '../request/query/fetch-plays-date-filtered';

const calculateDateDiff = (day, dateObj) => {
  let period;
  switch (day) {
    case 'Sunday':
      period = dateObj.toISOString();
      break;
    case 'Monday':
      period = moment(dateObj).subtract(1, 'days').toDate()
      break;
    case 'Tuesday':
      period = moment(dateObj).subtract(2, 'days').toDate()
      break;
    case 'Wednesday':
      period = moment(dateObj).subtract(3, 'days').toDate().toISOString();
      break;
    case 'Thursday':
      period = moment(dateObj).subtract(4, 'days').toDate().toISOString();
      break;
    case 'Friday':
      period = moment(dateObj).subtract(5, 'days').toDate().toISOString();
      break;
    case 'Saturday':
      period = moment(dateObj).subtract(6, 'days').toDate().toISOString();
      break;
    default:
      break;
  }
  return period;
}

export const getPlay = async (selectedPeriod) => {
  let period;

  switch (selectedPeriod) {
    case 'year': {
      let year = new Date().getFullYear();
      let month = 'Jan';
      let date = 1;
      period = new Date(`${year} ${month},${date}`).toISOString()
      break;
    }
    case 'month': {
      const dateObj = new Date()
      let year = dateObj.getFullYear();
      let month = dateObj.getMonth() + 1;
      let date = 1;
      period = new Date(`${year} ${month},${date}`).toISOString()
      break;
    }
    case 'week': {
      let dateObj = new Date();
      let day = dateObj.toLocaleString('en-us', {
        weekday: 'long'
      });
      period = calculateDateDiff(day, dateObj);
      break;
    }
    default:
      break;
  }

  try {
    console.log(fetchPlaysDateFiltered(period));
    const result = await submit(fetchPlaysDateFiltered(period), `https://rgkjmwftqtbpayoyolwh.nhost.run/v1/graphql`);
    console.log(await result);
  } catch (e) {
    console.log(e);
  }
}