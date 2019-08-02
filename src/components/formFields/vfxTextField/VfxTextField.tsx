import React from 'react';
import TextField from '@material-ui/core/TextField';
import { marginEnum, variantEnum } from '../../../lib/enums/generalEnums';
import { ILayoutSize } from '../../../lib/constants/layout';
import { IField } from '../../BpForm/BpForm'

export interface IVfxTextFieldOptions {
  inputKey: string | number
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

export default class VfxTextField implements IField {
  constructor(
    options: IVfxTextFieldOptions
  ) {
    this.options = options
    this.options.fullWidth = true
    this.layout = this.options.layout
    this.inputKey = this.options.inputKey
  }

  options: IVfxTextFieldOptions
  layout: ILayoutSize
  inputKey: string | number
  value: any

  updateValue = (
    event: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement | 
      HTMLSelectElement
     >
    ) => {
    this.value = event.target.value
  }

  render() {
    return (
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
        onChange={(event) => this.updateValue(event)}
        value={this.options.value}
      // Look into below 
      //variant={props.variant}
      />
    )
  }
}
