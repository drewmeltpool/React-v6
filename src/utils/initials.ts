type initialsType = (v: string) => string;

const initials: initialsType = (value) =>
  value
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('');

export default initials;
