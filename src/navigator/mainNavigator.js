import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps179645Navigator from '../features/Maps179645/navigator';
import Additem179644Navigator from '../features/Additem179644/navigator';
import Maps179640Navigator from '../features/Maps179640/navigator';
import UserProfile179636Navigator from '../features/UserProfile179636/navigator';
import Maps179596Navigator from '../features/Maps179596/navigator';
import Additem179595Navigator from '../features/Additem179595/navigator';
import Maps179591Navigator from '../features/Maps179591/navigator';
import UserProfile179587Navigator from '../features/UserProfile179587/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps179645: { screen: Maps179645Navigator },
Additem179644: { screen: Additem179644Navigator },
Maps179640: { screen: Maps179640Navigator },
UserProfile179636: { screen: UserProfile179636Navigator },
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
