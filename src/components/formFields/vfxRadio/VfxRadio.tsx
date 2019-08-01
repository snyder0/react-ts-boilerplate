import React from 'react';
import Radio from '@material-ui/core/Radio';
import { colorEnum } from '../../../lib/enums/generalEnums';

export interface IVfxRadioOptions {
  id?: string
  color?: colorEnum
  disabled?: boolean
  disableRipple?: boolean
  inputProps?: Object
  checked?: boolean
  value: any
  label: string
  onChange?(): any
}

const VfxRadio: React.FC<IVfxRadioOptions> = props => {
  return (
    <Radio
      id={props.id}
      checked={props.checked}
      color={props.color}
      disabled={props.disabled}
      disableRipple={props.disableRipple}
      onChange={props.onChange}
      value={props.value}
      inputProps={props.inputProps}
    />
  )
}

export default VfxRadio