// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseHrtimeToSeconds(hrtime: any) {
  const seconds = (hrtime[0] + hrtime[1] / 1e9).toFixed(3);
  return seconds;
}
