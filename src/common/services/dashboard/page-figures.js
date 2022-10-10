import axios from "axios";
// import { credential, UMAMI } from "common/const/umami";

const page_figures = async (start_date, end_date, tz, unit) => {
  // const url = `${UMAMI.base_url}${UMAMI.website}/1/pageviews?start_at=1664649000000&end_at=1664861026995&unit=month&tz=Asia/Calcutta`;

  try {
    const result = await axios({
      method: 'POST',
      url: 'https://analytics.reactplay.io/api/auth/login',
      data: {
        username: "reactplayio",
        password: "reactplayadmin"
      },
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