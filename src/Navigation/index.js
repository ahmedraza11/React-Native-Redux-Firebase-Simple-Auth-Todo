import { StackNavigator } from 'react-navigation';
import { Home, App } from '../Modules';
import Signup from './../Modules/Auth/Signup/signup';
import Todo from './../Modules/Todo/App';
import Login from './../Modules/Auth/Login/login';
export const Navigation = StackNavigator({
    AppScreen: { screen: App },
    HomeScreen: { screen: Home },
    LoginScreen: { screen: Login },
    SignupScreen: { screen: Signup },
    TodoScreen: { screen: Todo }
}, {
        initialRouteName: 'LoginScreen',
        headerMode: 'screen'
    });