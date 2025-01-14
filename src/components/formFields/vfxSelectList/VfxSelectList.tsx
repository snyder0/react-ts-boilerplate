import React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import BpFormControl from '../vfxFormControl/VfxFormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input';
import { variantEnum } from '../../../lib/enums/generalEnums'
import { IField } from '../../BpForm/BpForm'
import { ILayoutSize } from '../../../lib/constants/layout';

export interface IMenuItems {
  name: string
  value: any
}

export interface IVfxSelectListOptions {
  inputKey: string | number
  autoWidth?: boolean
  open?: boolean
  value: any
  variant?: variantEnum
  name: string
  menuItems: Array<IMenuItems>
  multiple?: boolean
  layout: ILayoutSize
  onClose?(): void
  onOpen?(): void
  onChange?(inputKey: any, event: any): void
}

export default class VfxSelectList implements IField {
  constructor(
    options: IVfxSelectListOptions
  ) {
    this.options = options;
    this.layout = this.options.layout
    this.inputKey = this.options.inputKey
  }

  options: IVfxSelectListOptions
  layout: ILayoutSize
  inputKey: string | number
  value: any

  render() {
    return (
      <BpFormControl>
        <InputLabel>{this.options.name}</InputLabel>
        <Select
          key={this.options.inputKey}
          onClose={this.options.onClose}
          onOpen={this.options.onOpen}
          value={this.options.value}
          multiple={this.options.multiple}
          displayEmpty
          input={this.options.multiple ? <Input id="select-multiple" /> : <Input id="select-single" />}
        //onChange={this.options.multiple ? handleChangeMultiple : handleChange}
        >
          {this.options.menuItems.map((item, index) => (
            <MenuItem value={item.value} key={index}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </BpFormControl>
    )
  }
}

// const BpSelectList: React.FC<IBpSelectListProps> = props => {

//   const [selectedValues, setSelectedValues] = React.useState<string[]>([]);

//   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
//     let selected = event.target.value as string[];
//     setSelectedValues(selected);
//     props.onChange!(props.inputKey, selected);
//   };

//   const handleChangeMultiple = (event: any) => {
//     let selected = event.target.value;
//     setSelectedValues(selected);
//     props.onChange!(props.inputKey, selected);
//   }

//   return (
//     <BpFormControl>
//       <InputLabel>{props.name}</InputLabel>
//       <Select
//         key={props.inputKey}
//         onClose={props.onClose}
//         onOpen={props.onOpen}
//         value={selectedValues}
//         multiple={props.multiple}
//         displayEmpty
//         input={props.multiple ? <Input id="select-multiple" /> : <Input id="select-single" />}
//         onChange={props.multiple ? handleChangeMultiple : handleChange}
//       >
//         {/* <MenuItem value="">
//           <em>None</em>
//         </MenuItem> */}
//         {props.menuItems!.map((item, index) => (
//           <MenuItem value={item.value} key={index}>
//             {item.name}
//           </MenuItem>
//         ))}
//       </Select>
//     </BpFormControl>
//   )
// }

// export interface IMenuItems {
//   name: string
//   value: any
// }



// BpSelectList.defaultProps = {
//   menuItems: [
//     {
//       name: 'no menuItems added',
//       value: 'no menuItems added'
//     }
//   ]
// }