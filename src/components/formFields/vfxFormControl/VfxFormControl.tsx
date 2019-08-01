import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import { marginEnum, variantEnum } from '../../../lib/enums/generalEnums'

export interface IVfxFormControlOptions {
  disabled?: boolean
  error?: boolean
  fullWidth?: boolean
  margin?: marginEnum
  required?: boolean
  variant?: variantEnum
}

const VfxFormControl: React.FC<IVfxFormControlOptions> = props => {
  return (
    <FormControl
      disabled={props.disabled}
      error={props.error}
      fullWidth={props.fullWidth}
      margin={props.margin}
      required={props.required}
      variant={props.variant}
    >
      { props.children }
    </FormControl>
  )
}

VfxFormControl.defaultProps = {
  fullWidth: true
}

export default VfxFormControl