export const GRANULARITY_TYPE = {
  day: 'day',
  week: 'week',
  month: 'month',
};

export const FILTER_TYPE = {
  datetime: 'datetime',
  hour: 'hour',
  day: 'day',
};

export const OPERATOR_NAME = {
  Kiln: 'Kiln',
  Stakefish: 'Stakefish',
};

export const VALIDATOR_ID = {
  TWO: '1624891',
  ONE: '1624890',
};

export const GET_DATE = (pastDay: number) => {
  let date = new Date();
  date.setDate(date.getDate() - pastDay);
  // Step 2: Extract the year, month, and day
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-based month
  const day = String(date.getDate()).padStart(2, '0');

  // Step 3: Combine the values into the desired format
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};
