import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import VfxFormControlLabel from '../vfxFormControlLabel/VfxFormControlLabel';
import { colorEnum } from '../../../lib/enums/generalEnums';
import { IField } from '../../BpForm/BpForm'
import { ILayoutSize } from '../../../lib/constants/layout';

export interface IVfxCheckboxOptions {
  inputKey: string | number
  id?: string
  color?: colorEnum
  disabled?: boolean
  disableRipple?: boolean
  inputProps?: Object
  checked?: boolean
  value?: any
  row?: boolean
  layout?: any
  checkboxes: Array<{ label: string, value: any }>
  onChange?(inputKey: any, event: any): void
}

export default class VfxCheckbox implements IField {
  constructor(
    options: IVfxCheckboxOptions
  ) {
    this.options = options
    this.layout = this.options.layout
    this.inputKey = this.options.inputKey
  }

  options: IVfxCheckboxOptions
  layout: ILayoutSize
  inputKey: string | number
  value: any

  render() {
    return (
      <FormGroup row={this.options.row} >
        {this.options.checkboxes.map((checkbox, index) => {
          return (
            <VfxFormControlLabel
              key={index}
              label={checkbox.label}
              control={
                <Checkbox
                  color={this.options.color}
                  value={checkbox.value}
                //onChange={(event) => handleCheck(event)}
                />
              }
            />
          )
        })}
      </FormGroup>
    )
  }
}

// const BpCheckbox: React.FC<IBpCheckboxProps> = props => {

//   let checkboxArray:Array<string | number> = [];

//   const handleCheck = (event: any) => {
//     checkboxArray.push(event.target.value);
//     props.onChange!(props.inputKey, checkboxArray);
//   };

//   return (
//     <FormGroup row={props.row} >
//       {props.checkboxes!.map((checkbox, index) => {
//         return(
//           <VfxFormControlLabel
//             key={index}
//             label={checkbox.label}
//             control={
//               <Checkbox
//                 color={props.color} 
//                 value={checkbox.value}
//                 onChange={(event) => handleCheck(event)}
//               />
//             }
//           />
//         )
//       })}
//     </FormGroup>
//   )
// }

// BpCheckbox.defaultProps = {
//   color: colorEnum.PRIMARY,
//   disabled: false
// }
