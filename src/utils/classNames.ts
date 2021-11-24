const classNames = (...args: Array<any>): string =>
  args.filter((item) => item).join(' ');

export default classNames;
