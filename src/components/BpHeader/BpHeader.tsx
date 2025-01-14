import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import headerStyles from './bpHeaderStyles';
import { observer, inject } from 'mobx-react';
import clsx from 'clsx';
import { IDialog } from '../../mobxStores/generalStore';
import loginFormConfig from '../../views/home/formConfig/loginFormConfig';
import BpForm, { IUserStore } from '../BpForm/BpForm';
import { widthEnum } from '../../lib/enums/generalEnums';

export interface IGeneralStore {
  _openDialog(): void
  _toggleAppDrawer(): void
  _getformValues(): Function
  _updateDialogStatus(data: IDialog): void
  appDrawerStatus: boolean
  appDrawerMiniVariantOption: boolean
}

// Define interface for component props
interface HeaderProps {
  generalStore?: IGeneralStore
  userStore?: IUserStore
  title?: string
};

// React functional component
const BpHeader: React.FC<HeaderProps> = inject('generalStore', 'userStore')(observer((props) => {

  // Hook into headerStyles defined for component and set to a variable
  const classes = headerStyles();

  const dialogForm = new BpForm({
    fields: loginFormConfig
  })

  function openDialog() {
    //props.generalStore!._openDialog()
    let data = {
      dialogTitle : 'Login',
      dialogShowCloseButton: true,
      dialogChildren: dialogForm.render(),
      dialogButtons: [
        {
          label: 'Login',
          callback: _handleLogin
        }
      ],
      dialogMaxWidth: widthEnum.XS
    }
    
    
    props.generalStore!._updateDialogStatus(data);
  }

  function toggleAppDrawer(event: React.SyntheticEvent | React.MouseEvent, reason?: string) {
    props.generalStore!._toggleAppDrawer();
  }

  async function _handleLogin () {
    let payload = dialogForm.getFormValues()
    console.log(payload)
    // let storeFormConfig = props.userStore!._getformValues();
    // console.log(storeFormConfig)
    // debugger
    // let success = false;
    // let payload:any = {};
    // // storeFormConfig.forEach((field) => {
    // //   console.log(field)
    // //   payload[field.inputKey] = field.value
    // // })
    // //console.log(payload)
    // try {
    //   //const OrganizationService = ServiceFactory.get('organization')
    //   //const response = await OrganizationService.get()
    //   let response = false
    //   if (response) {
    //     // success = true
    //   }
    // } catch (e) {
    //   console.log(e)
    // }
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="relative"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.generalStore!.appDrawerStatus && !props.generalStore!.appDrawerMiniVariantOption,
          [classes.appBarShiftWithMiniVariantOption]: props.generalStore!.appDrawerStatus && props.generalStore!.appDrawerMiniVariantOption
        })}
      >
        <Toolbar variant='dense'>
          <IconButton edge="start" color="inherit" aria-label="Menu" className={classes.menuButton} onClick={toggleAppDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          <Button className={classes.button} onClick={openDialog}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}))

// Set default props
BpHeader.defaultProps = {
  title: 'Title'
}

export default BpHeader;