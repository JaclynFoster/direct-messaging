import React from 'react'
import type { Dayjs } from 'dayjs'
import { Calendar} from 'antd'
import type { CalendarProps } from 'antd'

//TODO add a reminders section also

const Calendar = () => {
  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log("Calendar Value:", value.format('YYYY-MM-DD'), mode)
  }
  return (
    <Calendar onPanelChange={onPanelChange} />

  )
}

export default Calendar
