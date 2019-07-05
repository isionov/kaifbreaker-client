import React from 'react'
import DateUtils from '@date-io/dayjs'
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'

import useStyles from './styles'

export default function DateTimeInput({ className }) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <MuiPickersUtilsProvider utils={DateUtils}>
        <DateTimePicker
          clearable
          className={className}
          label='Дeдлайн'
          value={null}
        />
      </MuiPickersUtilsProvider>
    </div>
  )
}