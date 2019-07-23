// import { Fields } from '@/lib/types/field.js'
// import { Layout } from '@/lib/types/layout.js'
import { fieldsEnum } from '../../../lib/enums/fieldEnums';
import { layoutConfig } from '../../../lib/constants/layout';

const loginFormFields = [
  {
    autofocus: true,
    key: 'email',
    label: 'Email',
    placeholder: 'Enter email',
    fieldType: fieldsEnum.TEXT,
    layout: layoutConfig.L12
  },
  {
    key: 'password',
    label: 'Password',
    placeholder: 'Enter password',
    fieldType: fieldsEnum.PASSWORD,
    type: 'password',
    layout: layoutConfig.L12
  }
]

export default loginFormFields