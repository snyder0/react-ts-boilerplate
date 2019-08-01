import { fieldsEnum } from '../../../lib/enums/fieldEnums';
import { layoutConfig } from '../../../lib/constants/layout';
import VfxTextField from '../../../components/formFields/vfxTextField/VfxTextField'
import VfxSwitch from '../../../components/formFields/vfxSwitch/VfxSwitch'
import VfxSlider from '../../../components/formFields/vfxSlider/VfxSlider'
import VfxSelectList from '../../../components/formFields/vfxSelectList/VfxSelectList'
import VfxRadioGroup from '../../../components/formFields/vfxRadio/VfxRadioGroup'
import VfxCheckbox from '../../../components/formFields/vfxCheckbox/VfxCheckbox'
import VfxDatePicker from '../../../components/formFields/vfxDatePicker/VfxDatePicker'
import { IField } from '../../../components/BpForm/BpForm'
import { valueLabelDisplayEnum } from '../../../lib/enums/generalEnums';

const EMAIL: VfxTextField = new VfxTextField({
  inputKey: 'email',
  label: 'Email',
  placeholder: 'Email Placeholder',
  fullWidth: true,
  layout: layoutConfig.L12
})

const SWITCH: VfxSwitch = new VfxSwitch({
  inputKey: 'switch',
  label: 'Switch',
  layout: layoutConfig.L12
})

const SLIDER: VfxSlider = new VfxSlider({
  inputKey: 'slider',
  label: 'Slider',
  layout: layoutConfig.L6,
  valueLabelDisplay: valueLabelDisplayEnum.AUTO
})

const RADIOGROUP: VfxRadioGroup = new VfxRadioGroup({
  inputKey: 'radioGroup',
  layout: layoutConfig.L12,
  radios: [
    {
      label: 'label 1',
      value: 'val1'
    },
    {
      label: 'label 2',
      value: 'val2'
    }
  ]
})

const SELECTLIST: VfxSelectList = new VfxSelectList({
  inputKey: 'select',
  name: 'Select List',
  layout: layoutConfig.L6,
  menuItems: [
    {
      name: 'option 1',
      value: 1
    },
    {
      name: 'option 2',
      value: 2
    }
  ]
})

const CHECKBOX: VfxCheckbox = new VfxCheckbox({
  inputKey: 'checkbox',
  layout: layoutConfig.L6,
  checkboxes: [
    {
      label: 'check 1',
      value: 1
    },
    {
      label: 'check 2',
      value: 2
    }
  ]
})

const DATEPICKER: VfxDatePicker = new VfxDatePicker({
  inputKey: 'date',
  label: 'Date'
})

const loginFormFields: IField[] = [
  EMAIL,
  SELECTLIST,
  SLIDER,
  SWITCH,
  RADIOGROUP,
  DATEPICKER,
  CHECKBOX
  // {
  //   inputKey: 'password',
  //   label: 'Password',
  //   placeholder: 'Enter password',
  //   fieldType: fieldsEnum.PASSWORD,
  //   type: 'password',
  //   layout: layoutConfig.L12,
  //   fullWidth: true
  // },
  // {
  //   inputKey: 'login-switch',
  //   fieldType: fieldsEnum.SWITCH,
  //   layout: layoutConfig.L6,
  //   switchLabel: 'Switch label',
  //   checked: true
  // }
  // {
  //   inputKey: 'login-slider',
  //   fieldType: fieldsEnum.SLIDER,
  //   layout: layoutConfig.L12,
  //   valueLabelDisplay: valueLabelDisplayEnum.ON,
  //   min: 0,
  //   max: 10,
  //   sliderLabel: 'Volume',
  //   defaultValue: 5
  // }
  // {
  //   inputKey: 'login-datepicker',
  //   fieldType: fieldsEnum.DATE,
  //   layout: layoutConfig.L12,
  //   label: 'Select a date',
  // }
  // {
  //   inputKey: 'login-radio',
  //   name: 'radio test',
  //   radios: [
  //     {
  //       label: 'radio1',
  //       value: 'radio1'
  //     },
  //     {
  //       label: 'radio2',
  //       value: 'radio2'
  //     }
  //   ],
  //   fieldType: fieldsEnum.RADIO,
  //   layout: layoutConfig.L6
  // },
  // {
  //   inputKey: 'login-select',
  //   fieldType: fieldsEnum.SELECTLIST,
  //   name: 'Select an Option',
  //   layout: layoutConfig.L6,
  //   multiple: false,
  //   value: '',
  //   menuItems: [
  //     {
  //       name: 'Option 1',
  //       value: 1
  //     },
  //     {
  //       name: 'Option 2',
  //       value: 2
  //     },
  //     {
  //       name: 'Option 3',
  //       value: 3
  //     }
  //   ]
  // },
  // {
  //   fieldType: fieldsEnum.CHECKBOX,
  //   inputKey: 'login-checkbox',
  //   layout: layoutConfig.L6,
  //   label: 'Checkbox 1',
  //   row: true,
  //   checkboxes: [
  //     {
  //       label: 'test1',
  //       value: 'test1'
  //     },
  //     {
  //       label: 'test2',
  //       value: 'test2'
  //     },
  //     {
  //       label: 'test3',
  //       value: 'test3'
  //     },
  //     {
  //       label: 'test4',
  //       value: 'test4'
  //     },
  //     {
  //       label: 'test5',
  //       value: 'test5'
  //     }
  //   ]
  // }
]

export default loginFormFields