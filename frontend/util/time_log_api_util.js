export const fetchTimeLogs = () => (
  $.ajax({
    method: 'GET',
    url: `api/time_logs`
  })
);
