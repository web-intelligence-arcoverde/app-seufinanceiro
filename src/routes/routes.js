import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from '../components/atoms/Icon';
import {COLORS} from '../constants';

import Home from '../screens/Home';

import Dashboard from '../screens/Dashboard';

import {useDispatch} from 'react-redux';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

function BottomNavigator() {
  const disaptch = useDispatch();

  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: COLORS['green-dark'],
          height: 64,
        },
      }}>
      <Tab.Screen
        name="Inicio"
        component={Dashboard}
        options={{
          tabBarIcon: () => <IconTabBottom icon="home-icon" label="Home" />,
        }}
      />
    </Tab.Navigator>
  );
}

const openModal = () => {
  return null;
};

const IconTabBottom = ({icon, label}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Icon icon={icon} />
      <Text
        style={{
          color: 'white',
          marginTop: 4,
          fontSize: 12,
          textTransform: 'capitalize',
        }}>
        {label}
      </Text>
    </View>
  );
};

export default Routes;
