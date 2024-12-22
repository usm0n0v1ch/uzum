import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Main from './screens/Main';
import Catalog from './screens/Catalog';
import Basket from './screens/Basket';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
   
      <Tab.Navigator
        initialRouteName="Главная"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Главная"
          component={Main}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Каталог"
          component={Catalog}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Корзина"
          component={Basket}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="basket-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Профиль"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" color={color} size={size} />
            ),
          }}
        />
        
      </Tab.Navigator>
    
  );
}
