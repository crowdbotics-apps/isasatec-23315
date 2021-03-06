import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps184472Navigator from '../features/Maps184472/navigator';
import Additem184471Navigator from '../features/Additem184471/navigator';
import Maps184467Navigator from '../features/Maps184467/navigator';
import UserProfile184463Navigator from '../features/UserProfile184463/navigator';
import UserProfile184440Navigator from '../features/UserProfile184440/navigator';
import Maps184421Navigator from '../features/Maps184421/navigator';
import Settings184399Navigator from '../features/Settings184399/navigator';
import Settings184384Navigator from '../features/Settings184384/navigator';
import NotificationList184383Navigator from '../features/NotificationList184383/navigator';
import Maps184382Navigator from '../features/Maps184382/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps184472: { screen: Maps184472Navigator },
Additem184471: { screen: Additem184471Navigator },
Maps184467: { screen: Maps184467Navigator },
UserProfile184463: { screen: UserProfile184463Navigator },
UserProfile184440: { screen: UserProfile184440Navigator },
Maps184421: { screen: Maps184421Navigator },
Settings184399: { screen: Settings184399Navigator },
Settings184384: { screen: Settings184384Navigator },
NotificationList184383: { screen: NotificationList184383Navigator },
Maps184382: { screen: Maps184382Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
