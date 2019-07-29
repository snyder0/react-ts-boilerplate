```js
import { Provider } from 'mobx-react';
import { userStore } from '../../mobxStores/userStore';
import { generalStore } from '../../mobxStores/generalStore';
import { fieldsEnum } from '../../lib/enums/fieldEnums';
import { layoutConfig } from '../../lib/constants/layout';

<Provider userStore generalStore>
    <BpForm fields={[
        {
            inputKey: 'email',
            label: 'Email',
            placeholder: 'Enter email',
            fieldType: fieldsEnum.TEXT,
            layout: layoutConfig.L12,
            fullWidth: true
        },
        {
            inputKey: 'password',
            label: 'Password',
            placeholder: 'Enter password',
            fieldType: fieldsEnum.PASSWORD,
            type: 'password',
            layout: layoutConfig.L12,
            fullWidth: true
        },
        {
            inputKey: 'login-radio',
            name: 'radio test',
            radios: [
            {
                label: 'radio1',
                value: 'radio1'
            },
            {
                label: 'radio2',
                value: 'radio2'
            }
            ],
            row: true,
            fieldType: fieldsEnum.RADIO,
            layout: layoutConfig.L6
        },
        {
            inputKey: 'login-select',
            fieldType: fieldsEnum.SELECTLIST,
            name: 'Select an Option',
            layout: layoutConfig.L6,
            multiple: false,
            value: '',
            menuItems: [
            {
                name: 'Option 1',
                value: 1
            },
            {
                name: 'Option 2',
                value: 2
            },
            {
                name: 'Option 3',
                value: 3
            }
            ]
        }
    ]} />
</Provider>
```