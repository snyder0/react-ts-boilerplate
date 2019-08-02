import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ILayoutSize } from '../../lib/constants/layout';

export interface IField {
  render(): JSX.Element
  layout?: ILayoutSize
  value: any
  inputKey: string | number
}

export interface IUserStore {
  _updateFormValues(formValues: Object): void
  _getformValues(): Function
  formValues: Object
}

export interface IForm {
  fields: Array<IField>
}

export default class BpForm {
  constructor(form: IForm) {
    this.fields = form.fields
  }

  fields: Array<IField>

  getFormValues = () => {
    let payload = {}
    this.fields.forEach(({ inputKey, value }) => {
      let obj = {
        [inputKey!]: value
      }
      payload = {...payload, ...obj}
    })
    return payload 
  }

  render() {
    return (
      <form id='appForm'>
        <Grid container spacing={2}>
          {this.fields.map((field: IField, index: number) => {
            return (
              <Grid 
                item
                key={index}
                {...field.layout}
              >
                {field.render()}
              </Grid>
            )
          })}
        </Grid>
      </form>
    )
  }
}