import React, { ElementType } from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { orientationEnum, valueLabelDisplayEnum } from '../../../lib/enums/generalEnums';
import sliderStyles from './bpSliderStyles';
import { ILayoutSize } from '../../../lib/constants/layout';
import { IField } from '../../BpForm/BpForm'

export interface IVfxSliderOptions {
  inputKey: string | number
  ariaLabel?: string
  defaultValue?: number | Array<number>
  disabled?: boolean
  marks?: boolean | Array<{ value: any, label: string }>
  max?: number
  min?: number
  name?: string
  onChange?(inputKey: any, value: any): void
  orientation?: orientationEnum
  step?: number
  ThumbComponent?: ElementType
  value?: number | Array<number>
  valueLabelDisplay?: valueLabelDisplayEnum
  label: string
  layout: ILayoutSize
}

export default class VfxSlider implements IField {
  constructor(
    options: IVfxSliderOptions
  ) {
    this.options = options
    this.layout = this.options.layout
    this.inputKey = this.options.inputKey
  }

  options: IVfxSliderOptions
  layout: ILayoutSize
  inputKey: string | number
  value: any

  render() {
    return (
      <React.Fragment>
        <Typography gutterBottom>
          {this.options.label}
        </Typography>
        <Slider
          key={this.options.inputKey}
          aria-label={this.options.ariaLabel}
          defaultValue={this.options.defaultValue}
          disabled={this.options.disabled}
          marks={this.options.marks}
          max={this.options.max}
          min={this.options.min}
          name={this.options.name}
          //onChange={handleChange}
          orientation={this.options.orientation}
          step={this.options.step}
          //value={value}
          valueLabelDisplay={this.options.valueLabelDisplay}
        />
      </React.Fragment>
    )
  }
}

// const BpSlider: React.FC<IBpSliderProps> = props => {

//   // Hook into sliderStyles defined for component and set to a variable
//   const classes = sliderStyles();

//   const [value, setValue] = React.useState<number | number[]>(props.defaultValue ? props.defaultValue : 0);

//   const handleChange = (inputKey: any, newValue: number | number[]) => {
//     let selected = newValue;
//     setValue(newValue);
//     props.onChange!(props.inputKey, selected);
//   };

//   return (
//     <div className={classes.root}>
//       <Typography gutterBottom>
//         {props.sliderLabel}
//       </Typography>
//       <Slider
//         key={props.inputKey}
//         aria-label={props.ariaLabel}
//         defaultValue={props.defaultValue}
//         disabled={props.disabled}
//         marks={props.marks}
//         max={props.max}
//         min={props.min}
//         name={props.name}
//         onChange={handleChange}
//         orientation={props.orientation}
//         step={props.step}
//         value={value}
//         valueLabelDisplay={props.valueLabelDisplay}
//       />
//     </div>
//   )
//}