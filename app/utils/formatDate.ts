export function formatRelative(timestamp: number) {
  const getDiff = +new Date(timestamp) - +new Date();
  const time = Math.abs(getDiff);

  let humanTime, units;

  if (time > 1000 * 60 * 60 * 24 * 365) {
    humanTime = parseInt(String(time / (1000 * 60 * 60 * 24 * 365)), 10);
    units = 'years';
  } else if (time > 1000 * 60 * 60 * 24 * 30) {
    humanTime = parseInt(String(time / (1000 * 60 * 60 * 24 * 30)), 10);
    units = 'months';
  } else if (time > 1000 * 60 * 60 * 24 * 7) {
    humanTime = parseInt(String(time / (1000 * 60 * 60 * 24 * 7)), 10);
    units = 'weeks';
  } else if (time > 1000 * 60 * 60 * 24) {
    humanTime = parseInt(String(time / (1000 * 60 * 60 * 24)), 10);
    units = 'days';
  } else if (time > 1000 * 60 * 60) {
    humanTime = parseInt(String(time / (1000 * 60 * 60)), 10);
    units = 'hours';
  } else if (time > 1000 * 60) {
    humanTime = parseInt(String(time / (1000 * 60)), 10);
    units = 'minutes';
  } else {
    humanTime = parseInt(String(time / 1000), 10);
    units = 'seconds';
  }

  const timeUnits = `${humanTime} ${units}`;

  return `${timeUnits} ago`;
}
