import React from 'react'
import BpRadio from './VfxRadio'
import RadioGroup from '@material-ui/core/RadioGroup'
import BpFormControlLabel from '../vfxFormControlLabel/VfxFormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import { IVfxRadioOptions } from './VfxRadio'
import { labelPlacementEnum } from '../../../lib/enums/generalEnums'
import { colorEnum } from '../../../lib/enums/generalEnums'
import { IField } from '../../BpForm/BpForm'
import { ILayoutSize } from '../../../lib/constants/layout'

export interface IVfxRadioGroupOptions {
  inputKey: string | number
  name?: string
  value?: any
  defaultValue?: any
  radios: Array<IVfxRadioOptions>
  layout: any
  row?: boolean
  color?: colorEnum
  onChange?(inputKey: any, event: any): void
}

export default class VfxRadioGroup implements IField {
  constructor(
    options: IVfxRadioGroupOptions
  ) {
    this.options = options;
    this.layout = this.options.layout
    this.inputKey = this.options.inputKey
  }

  options: IVfxRadioGroupOptions
  layout: ILayoutSize
  inputKey: string | number
  value: any

  render() {
    return (
      <FormControl>
        <RadioGroup
          key={this.options.inputKey}
          name={this.options.name}
          value={this.options.value}
          row={this.options.row}
        //onChange={(event) => this.options.onChange!(this.options.inputKey, event)}
        >
          {this.options.radios.map((radio, index) => (
            <BpFormControlLabel
              key={`radio-${index}`}
              value={radio.value}
              control={
                <BpRadio
                  {...radio}
                  color={this.options.color}
                />
              }
              label={radio.label}
              labelPlacement={labelPlacementEnum.START}
            />
          ))}
        </RadioGroup>
      </FormControl>
    )
  }
}

// const BpRadioGroup: React.FC<IBpRadioGroupProps> = props => {
//   return (
//     <FormControl>
//       <RadioGroup
//         key={props.inputKey}
//         name={props.name}
//         value={props.value}
//         row={props.row}
//         onChange={(event) => props.onChange!(props.inputKey, event)}
//       >
//         {props.radios!.map((radio, index) => (
//           <BpFormControlLabel
//             key={`radio-${index}`}
//             value={radio.value}
//             control={
//               <BpRadio
//                 {...radio}
//                 color={props.color}
//               />
//             }
//             label={radio.label}
//             labelPlacement={labelPlacementEnum.START}
//           />
//         ))}
//       </RadioGroup>
//     </FormControl>
//   )
// }

// BpRadioGroup.defaultProps = {
//   color: colorEnum.PRIMARY
// }

// export default BpRadioGroup