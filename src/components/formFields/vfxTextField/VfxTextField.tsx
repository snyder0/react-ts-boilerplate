import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import bpTextFieldStyles from './bpTextFieldStyles';
import { marginEnum, variantEnum } from '../../../lib/enums/generalEnums';
import { fieldsEnum } from '../../../lib/enums/fieldEnums';
import { ILayoutSize } from '../../../lib/constants/layout';
import { IField } from '../../BpForm/BpForm'

export interface IVfxTextFieldOptions {
  inputKey: string|number
  autoFocus?: boolean
  disabled?: boolean
  error?: boolean
  fullWidth?: boolean
  id?: (string | undefined)
  label: string
  margin?: marginEnum
  multiline?: boolean
  name?: string
  placeholder?: string
  required?: boolean
  rows?: (string | number)
  type?: string
  // Revisit layout type with enum/interface to specify object with specific types for Materail grid
  layout: ILayoutSize
  variant?: variantEnum
  value?: any
  onChange?(inputKey: any, event: any): void
}

// React functional component
export default class VfxTextField implements IField {
  constructor(
    options: IVfxTextFieldOptions
  ) {
    this.options = options;
  }

  options: IVfxTextFieldOptions

  render () {
    //const classes = bpTextFieldStyles();
    return (
      <Grid
        item 
        {...this.options.layout}
      >
        <TextField
          key={this.options.inputKey}
          autoFocus={this.options.autoFocus}
          disabled={this.options.disabled}
          error={this.options.error}
          fullWidth={this.options.fullWidth}
          id={this.options.id} 
          label={this.options.label}
          margin={this.options.margin}
          multiline={this.options.multiline}
          name={this.options.name}
          placeholder={this.options.placeholder}
          required={this.options.required}
          rows={this.options.rows}
          type={this.options.type}
          // onChange={(event) => props.onChange!(props.inputKey, event)}
          value={this.options.value}
          // Look into below 
          //variant={props.variant}
          />
      </Grid>
    )
  }
}
