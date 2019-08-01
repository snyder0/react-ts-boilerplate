import React from 'react';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import { colorEnum, sizeEnum } from '../../../lib/enums/generalEnums';
import BpFormControlLabel from '../vfxFormControlLabel/VfxFormControlLabel';
import { IField } from '../../BpForm/BpForm'
import { ILayoutSize } from '../../../lib/constants/layout';

export interface IVfxSwitchOptions {
  label: string
  inputKey: string | number
  id?: string
  color?: colorEnum
  disabled?: boolean
  disableRipple?: boolean
  inputProps?: Object
  checked?: boolean
  value?: any
  size?: sizeEnum
  layout: ILayoutSize
  onChange?(inputKey: any, value: any): void
}

export default class VfxSwitch implements IField {
  constructor(
    options: IVfxSwitchOptions
  ) {
    this.options = options
  }

  options: IVfxSwitchOptions

  render() {
    return (
      <Grid
        item
        {...this.options.layout}
      >
        <BpFormControlLabel
          control={
            <Switch
              key={this.options.inputKey}
              id={this.options.id}
              color={this.options.color}
              disabled={this.options.disabled}
              disableRipple={this.options.disableRipple}
              inputProps={this.options.inputProps}
              // Requires state
              //checked={state.checked}
              value='checked'
              size={this.options.size}
            //onChange={handleChange('checked')}
            />
          }
          label={this.options.label}
        />
      </Grid>
    )
  }
}

// const BpSwitch: React.FC<IBpSwitchProps> = props => {

//   const [state, setState] = React.useState({
//     // Default to false if checked not sent through via props
//     checked: props.checked ? props.checked : false
//   });

//   useEffect(() => {
//     // when component is mounted, update the form switch value with a default value if the input is not required and not toggled
//     props.onChange!(props.inputKey, state.checked);
//   })

//   const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
//     setState({ ...state, [name]: event.target.checked });
//     props.onChange!(props.inputKey, state.checked);
//   };

//   return (
//     <BpFormControlLabel
//       control={
//         <Switch
//           key={props.inputKey}
//           id={props.id}
//           color={props.color}
//           disabled={props.disabled}
//           disableRipple={props.disableRipple}
//           inputProps={props.inputProps}
//           checked={state.checked}
//           value='checked'
//           size={props.size}
//           onChange={handleChange('checked')}
//         />
//       }
//       label={props.switchLabel}
//     />
//   )
// }



// BpSwitch.defaultProps = {
//   color: colorEnum.PRIMARY
// }