
export const hyphenizePhone = (string) => {
  const array = string.split('');

  array.splice(3, 0, '-');
  array.splice(7, 0, '-');

  return array.join('');
};
