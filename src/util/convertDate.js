export const convertTimestampToDate = (timestamp) => {
  const date = new Date(timestamp * 1000).toDateString();

  const newdate = date.slice(4);
  console.log(typeof date);
  return newdate;
};
