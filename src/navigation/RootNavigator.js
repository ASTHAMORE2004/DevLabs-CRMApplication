import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import CustomersScreen from '../screens/Customers/CustomersScreen';
import CustomerDetailsScreen from '../screens/Customers/CustomerDetailsScreen';
import LeadsScreen from '../screens/Leads/LeadsScreen';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import { loadToken } from '../store/slices/authSlice';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  const dispatch = useDispatch();
  const token = useSelector((s) => s.auth.token);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(loadToken()).finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) return <ActivityIndicator style={{ flex: 1 }} />;

  return (
    <Stack.Navigator>
      {!token ? (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Customers" component={CustomersScreen} />
          <Stack.Screen name="CustomerDetails" component={CustomerDetailsScreen} />
          <Stack.Screen name="Leads" component={LeadsScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
