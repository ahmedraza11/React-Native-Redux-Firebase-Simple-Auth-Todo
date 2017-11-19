import { StackNavigator } from 'react-navigation';
import { Home, App } from '../Modules';

export const Navigation = StackNavigator({
    AppScreen: {screen: App},
    HomeScreen: {screen: Home}
},{
    initialRouteName: 'AppScreen',
    headerMode: 'screen'
    
});