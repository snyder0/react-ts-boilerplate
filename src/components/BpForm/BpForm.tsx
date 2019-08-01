import React from 'react';
import { observer, inject } from 'mobx-react';
import Grid from '@material-ui/core/Grid';

export interface IField {
  render(): JSX.Element
}

export interface IUserStore {
  _updateFormValues(formValues: Object): void
  _getformValues(): Function
  formValues: Object
}

export interface IFormProps {
  fields: Array<IField>
  userStore?: IUserStore
}

@inject('userStore', 'generalStore')
@observer
class BpForm extends React.Component<IFormProps> {

  updateValue = (key: any, value: any) => {
    let obj = {
      [key]: value
    }
    this.props.userStore!._updateFormValues(obj)
  }

  // renderBpTextFields = (field: IBpTextFieldProps, index: number) => {
  //   return (
  //       <Grid 
  //         item 
  //         xs={field.layout && field.layout.xs}
  //         sm={field.layout && field.layout.sm}
  //         md={field.layout && field.layout.md}
  //         lg={field.layout && field.layout.lg}
  //         xl={field.layout && field.layout.xl}
  //         key={index}
  //       >
  //         <BpTextField
  //           inputKey={field.inputKey}
  //           autoFocus={field.autoFocus}
  //           disabled={field.disabled}
  //           error={field.error}
  //           fullWidth={field.fullWidth}
  //           id={field.id}
  //           label={field.label}
  //           margin={field.margin}
  //           multiline={field.multiline}
  //           name={field.name}
  //           placeholder={field.placeholder}
  //           required={field.required}
  //           rows={field.rows}
  //           fieldType={field.fieldType}
  //           value={field.value}
  //           type={field.type}
  //           onChange={(inputKey: any, event: any) => this.updateValue(inputKey, event.target.value)}
  //         />
  //       </Grid>
  //   )
  // }

  render() {
    return (
      <form id='appForm'>
        <Grid container spacing={2}>
          {this.props.fields.map((field: IField, index) => {
            return field.render()
          })}
        </Grid>
      </form>
    )
  }
}

export default BpForm;