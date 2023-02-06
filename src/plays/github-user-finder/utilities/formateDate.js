export default function formatDate(data) {
  if (data === undefined) return '';
  const dataarr = data.split('T')[0].split('-');
  const day = dataarr[2];
  const month = dataarr[1];
  const year = dataarr[0];
  const datemonth = Date(year, month, day).split(' ');

  return `Joined ${day} ${datemonth[1]} ${year}`;
}
