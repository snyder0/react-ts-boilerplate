import 'date-fns'
import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import bpDatePickerStyles from './bpDatePickerStyles'
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from '@material-ui/pickers'
import { IField } from '../../BpForm/BpForm'
import { ILayoutSize } from '../../../lib/constants/layout'

export interface IVfxDatePickerOptions {
  inputKey: string | number
  autoOk?: boolean
  label?: string
  format?: string
  layout?: any
  value?: any
  onChange?(inputKey: any, event: any): void
}

export default class VfxDatePicker implements IField {
  constructor(
    options: IVfxDatePickerOptions
  ) {
    this.options = options;
    this.options.autoOk = false
    this.options.format = 'MM/dd/yyyy'
    this.layout = this.options.layout
    this.inputKey = this.options.inputKey
  }

  options: IVfxDatePickerOptions
  layout: ILayoutSize
  inputKey: string | number
  value: any

  handleDateChange = (date: Date | null) => {

    //props.onChange!(props.inputKey, selected);
  }

  render() {
    //const classes = bpDatePickerStyles();
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          key={this.options.inputKey}
          //className={classes.datepicker}
          autoOk={this.options.autoOk}
          label={this.options.label}
          value={this.options.value}
          onChange={this.handleDateChange}
          format={this.options.format}
        />
      </MuiPickersUtilsProvider>
    )
  }
}

// const BpDatePicker: React.FC<IBpDatePickerProps> = props => {

//   // Initialize datepicker with current date
//   const [selectedDate, setSelectedDate] = React.useState<Date | null>(
//     new Date(),
//   );
//   const classes = bpDatePickerStyles();

//   function handleDateChange(date: Date | null) {
//     let selected = date;
//     setSelectedDate(date);
//     props.onChange!(props.inputKey, selected);
//   }

//   return (
//     <div className={classes.root}>
//       <MuiPickersUtilsProvider utils={DateFnsUtils}>
//         <DatePicker
//           key={props.inputKey}
//           className={classes.datepicker}
//           autoOk={props.autoOk}
//           label={props.label}
//           value={selectedDate}
//           onChange={handleDateChange}
//           format={props.format}
//         />
//       </MuiPickersUtilsProvider>
//     </div>
//   );
// }

// // Set default props
// BpDatePicker.defaultProps = {
//   autoOk: false,
//   label: 'Label',
//   format: 'MM/dd/yyyy'
// }