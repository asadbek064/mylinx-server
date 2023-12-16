export const randomID = (length = 8): string => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let counter = 0;

  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * 62));
    counter += 1;
  }

  return result;
};
