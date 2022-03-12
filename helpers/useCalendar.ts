export default function useCalendar() {
  const months: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const d: Date = new Date()
  const days: number = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate()
  const today: number = d.getDate()
  const currentMonth: string = months[d.getMonth()]
  const currentYear: number = d.getFullYear()
  const daysInMonth: Array<number | string> = findDaysInMonth(days)

  return {
    months,
    days,
    today,
    currentMonth,
    currentYear,
    daysInMonth,
  }
}

function findDaysInMonth(noOfDays: number) {
  let daysInMonth = []
  for (let i = 1; i <= noOfDays; i++) {
    if (i < 10) daysInMonth.push('0' + i.toString())
    else daysInMonth.push(i)
  }

  return daysInMonth
}