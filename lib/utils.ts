const dateOptions: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

export const formatDateFrom = (date?: string) =>
  new Date(date).toLocaleDateString('en-GB', dateOptions)

export const todayFormattedDate = () =>
  new Date().toLocaleDateString('en-GB', dateOptions)
