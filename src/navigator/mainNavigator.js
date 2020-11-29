import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps179596Navigator from '../features/Maps179596/navigator';
import Additem179595Navigator from '../features/Additem179595/navigator';
import Maps179591Navigator from '../features/Maps179591/navigator';
import UserProfile179587Navigator from '../features/UserProfile179587/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps179596: { screen: Maps179596Navigator },
Additem179595: { screen: Additem179595Navigator },
Maps179591: { screen: Maps179591Navigator },
UserProfile179587: { screen: UserProfile179587Navigator },

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
