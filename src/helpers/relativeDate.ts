import type { CreatedDate } from 'interfaces/index'

export function relativeDate(date: CreatedDate) {
  const delta = Math.round(
    (Number(new Date()) - Number(new Date(date as Date))) / 1000,
  )

  const minute = 60
  const hour = minute * 60
  const day = hour * 24

  if (delta < 30)
    return 'just now'
  else if (delta < minute)
    return `${String(delta)} seconds ago`
  else if (delta < 2 * minute)
    return 'a minute ago'
  else if (delta < hour)
    return `${String(Math.floor(delta / minute))} minutes ago`
  else if (Math.floor(delta / hour) === 1)
    return '1 hour ago'
  else if (delta < day)
    return `${String(Math.floor(delta / hour))} hours ago`
  else if (delta < day * 2)
    return 'yesterday'
  else return `${String(delta)} days ago`
}
