import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Button, Text } from 'native-base';

import Login from './components/Login';
import SignUp from './components/SignUp';
import AsistenLapak from './components/AsistenLapak';
import TambahLapakToko from './components/TambahLapakToko';
import NjajalPassing from './components/NjajalPassing';
import NjajalPassingProduk from './components/NjajalPassingProduk';
import PassingAsisten from './components/PassingAsisten';
import TambahLapakProduk from './components/TambahLapakProduk';
import TambahLapak6 from './components/TambahLapak6';
import NjajalDot from './components/NjajalDotDotDot';
import TambahTokoCS from './components/TambahTokoCS';


const App = StackNavigator({

    RouteLogin:{
        screen: Login
    },

    RouteSignUp:{
        screen: SignUp
    },

    RouteTambahLapakToko: {
        screen: TambahLapakToko
    },

    RouteNjajalPassing: {
      screen: NjajalPassing
    },

    RouteNjajalPassingProduk: {
        screen: NjajalPassingProduk
    },

    RoutePassingAsisten:{
      screen: PassingAsisten
    },

    RouteTambahLapakProduk: {
        screen: TambahLapakProduk
    },

    RouteTambahLapak6: {
        screen: TambahLapak6
    },

    RouteAsistenLapak: {
        screen: AsistenLapak
    },

    RouteNjajalDot:{
        screen: NjajalDot
    },

    RouteTambahTokoCS:{
        screen:TambahTokoCS
    }
},

{
    initialRouteName: 'RouteTambahTokoCS',
    headerMode: 'none',
    navigationOptions:{
      headerVisible: false
    }
});

export default App;