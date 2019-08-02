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
  placeholder: 'Enter Email',
  layout: layoutConfig.L12
})

const PASSWORD: VfxTextField = new VfxTextField({
  inputKey: 'password',
  label: 'Password',
  placeholder: 'Enter Password',
  layout: layoutConfig.L12
})

const SWITCH: VfxSwitch = new VfxSwitch({
  inputKey: 'switch',
  label: 'Switch',
  layout: layoutConfig.L6,
  value: true
})

const SLIDER: VfxSlider = new VfxSlider({
  inputKey: 'slider',
  label: 'Slider',
  layout: layoutConfig.L6,
  valueLabelDisplay: valueLabelDisplayEnum.AUTO
})

const RADIOGROUP: VfxRadioGroup = new VfxRadioGroup({
  inputKey: 'radioGroup',
  layout: layoutConfig.L6,
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
  value: '',
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
  label: 'Date',
  layout: layoutConfig.L12
})

const loginFormFields: IField[] = [
  EMAIL,
  PASSWORD,
  // SELECTLIST,
  // SLIDER,
  SWITCH,
  // DATEPICKER,
  // RADIOGROUP,
  // CHECKBOX
]

export default loginFormFields