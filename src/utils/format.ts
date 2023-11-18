export const formatDate = (
  value: Date | string,
  formatting: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" }
) => {
  if (!value) return value;

  return new Intl.DateTimeFormat("en-US", formatting).format(new Date(value));
};
