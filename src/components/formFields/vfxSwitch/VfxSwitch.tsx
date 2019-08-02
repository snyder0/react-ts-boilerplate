import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import { colorEnum, sizeEnum } from '../../../lib/enums/generalEnums';
import BpFormControlLabel from '../vfxFormControlLabel/VfxFormControlLabel';
import { IField } from '../../BpForm/BpForm'
import { ILayoutSize } from '../../../lib/constants/layout';

interface IState {
  checked: boolean
}

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

export default class VfxSwitch extends Component implements IField {
  constructor(options: IVfxSwitchOptions) {
    super(options)
    this.options = options
    this.layout = this.options.layout
    this.inputKey = this.options.inputKey
    this.value = this.options.value ? this.options.value : false

    this.state = {
      checked: this.options.value ? this.options.value : false
    }
  }

  options: IVfxSwitchOptions
  layout: ILayoutSize
  inputKey: string | number
  value: any

  // const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setState({ ...state, [name]: event.target.checked });
  //   props.onChange!(props.inputKey, state.checked);
  // }

  updateValue = () => {
    this.value = !this.value
    this.setState({checked: this.value})
  }

  render() {
    return (
      <BpFormControlLabel
        control={
          <Switch
            key={this.options.inputKey}
            id={this.options.id}
            color={this.options.color}
            disabled={this.options.disabled}
            disableRipple={this.options.disableRipple}
            inputProps={this.options.inputProps}
            checked={this.options.value}
            value={this.options.value}
            size={this.options.size}
            onChange={() => this.updateValue()}
          />
        }
        label={this.options.label}
      />
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