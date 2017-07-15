export const fetchTimeLogs = () => (
  $.ajax({
    method: 'GET',
    url: `api/timeLogs`
  })
);
