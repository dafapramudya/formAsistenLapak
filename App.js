import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Button, Text } from 'native-base';

import AsistenLapak from './components/AsistenLapak';
import TambahLapakToko from './components/TambahLapakToko';
import NjajalPassing from './components/NjajalPassing';
import NjajalPassingProduk from './components/NjajalPassingProduk';
import PassingAsisten from './components/PassingAsisten';
import TambahLapakProduk from './components/TambahLapakProduk';
import TambahLapak6 from './components/TambahLapak6';


const App = StackNavigator({
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
    }
},

{
    initialRouteName: 'RouteTambahLapakToko',
    headerMode: 'none',
    navigationOptions:{
      headerVisible: false
    }
});

export default App;