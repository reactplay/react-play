import axios from "axios";
// import { credential, UMAMI } from "common/const/umami";

const page_figures = async (start_date, end_date, tz, unit) => {
  // const url = `${UMAMI.base_url}${UMAMI.website}/1/pageviews?start_at=1664649000000&end_at=1664861026995&unit=month&tz=Asia/Calcutta`;

  try {
    const result = await axios({
      method: 'GET',
      withCredentials: true,
      url: 'https://analytics.reactplay.io/api/websites',
      headers: {
        'Authorization': `Bearer KOCazGR0IoyYOS7MT0XggVLEGAaLGeJnOuezhhWj9pVJwkdVZg+jhVyI/yh6p4Yu9Pc/hqnatgIxaHRmIeokaTNDnNfIB7iJO0j+/f0ktqbmfj0xQ3FSMQw6qgoVwIofiQuLlUYhv+CTcAB/+9emekjaqBV/uyvJd2iaEpRt+IEnAC/eaf4U7vfLc1SLzeLv6cgeCxdYfHHbQgLoJSn56eeTsF333hXV/nVgoOaKxPx8T2dMChrfabVFJqtr2kc+GK8UAffs5Bo6y3usU6EQlErpmhK/qOxSJZnyJJcCkJ/OK6aZnsCS0rYuYoF/0Qcgkplv0XBYlWeen1v5/QnOKD9pga2Tm0notX1Qtte4ZBI=`
      }
    })
    console.log(result);
  } catch (e) {
    console.log(e);
  }
  return "hello world";
}

const page_stats = (start_date, end_date) => {

}

export {
  page_figures,
  page_stats
}