import React from 'react';
import TextField from '@material-ui/core/TextField';
import bpTextFieldStyles from './bpTextFieldStyles';
import { marginEnum, variantEnum } from '../../../lib/enums/generalEnums';
import { fieldsEnum } from '../../../lib/enums/fieldEnums';

// React functional component
const BpTextField: React.FC<IBpTextFieldProps> = props => {

  // Hook into bpTextFieldStyles defined for component and set to a variable
  const classes = bpTextFieldStyles();

  return (
    <div className={classes.root}>
      <TextField
        key={props.inputKey}
        autoFocus={props.autoFocus}
        disabled={props.disabled}
        error={props.error}
        fullWidth={props.fullWidth}
        id={props.id} 
        label={props.label}
        margin={props.margin}
        multiline={props.multiline}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required}
        rows={props.rows}
        type={props.type}
        onChange={(event) => props.onChange!(props.inputKey, event)}
        value={props.value}
        // Look into below 
        //variant={props.variant}
        />
    </div>
  );
}

// Define interface for component props
export interface IBpTextFieldProps {
  /** inputKey is needed to build api payload */
  inputKey?: (string | number)
  /** If true, the input element will be focused during the first mount. */
  autoFocus?: boolean
  /** If true, the input element will be disabled. */
  disabled?: boolean
  /** If true, the label will be displayed in an error state. */
  error?: boolean
  /** 	If true, the input will take up the full width of its container. */
  fullWidth?: boolean
  /** The id of the input element. Use this prop to make label and helperText accessible for screen readers. */
  id?: (string | undefined)
  /** The label content. */
  label?: string
  /** 	If dense or normal, will adjust vertical spacing of this and contained components. */
  margin?: marginEnum
  /** If true, a textarea element will be rendered instead of an input. */
  multiline?: boolean
  /** 	Name attribute of the input element. */
  name?: string
  /** The short hint displayed in the input before the user enters a value. */
  placeholder?: string
  /** If true, the label is displayed as required and the input element` will be required. */
  required?: boolean
  /** 	Number of rows to display when multiline option is set to true. */
  rows?: (string | number)
  /** Used for BpForm to determine field type */
  fieldType: fieldsEnum
  /** Type of the input element. It should be a valid HTML5 input type. */
  type?: string
  /** To determine layout of input */
  layout?: any
  /** The variant to use. */
  variant?: variantEnum
  /** The value of the input element, required for a controlled component. */
  value?: string
  /** If true, the input element will be disabled. */
  onChange?(inputKey: any, event: any): void
};
 // Revisit layout type with enum/interface to specify object with specific types for Materail grid

// Set default props
BpTextField.defaultProps = {
  autoFocus: false,
  disabled: false,
  error: false,
  fullWidth: false,
  label: '',
  margin: marginEnum.NORMAL,
  multiline: false,
  name: 'name',
  placeholder: 'placeholder',
  required: false,
  variant: variantEnum.FILLED,
}

export default BpTextField;