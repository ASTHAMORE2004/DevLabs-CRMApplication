import React from 'react';
import { View } from 'react-native';
import { Title, Paragraph, Button } from 'react-native-paper';

export default function CustomerDetailsScreen({ route, navigation }) {
  const { customerId } = route.params || {};
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Title>Customer #{customerId}</Title>
      <Paragraph>Name: Example</Paragraph>
      <Paragraph>Email: example@company.com</Paragraph>
      <Paragraph>Phone: +1 555 1111</Paragraph>
      <Paragraph>Company: Example Co.</Paragraph>
      <Button onPress={() => navigation.navigate('Leads', { customerId })}>View Leads</Button>
    </View>
  );
}
