import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Login from './pages/login';
import Index from './pages/index' ;
import User from './pages/usuario';
import Register from './pages/cadastro';
const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Index,
        User,
        Register
    })
);

export default Routes;