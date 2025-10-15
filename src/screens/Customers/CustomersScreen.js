import React from 'react';
import { View, FlatList } from 'react-native';
import { Button, List, Searchbar, Title } from 'react-native-paper';

const mock = [
  { id: '1', name: 'Acme Corp', email: 'sales@acme.com' },
  { id: '2', name: 'Beta LLC', email: 'contact@beta.com' },
];

export default function CustomersScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 8 }}>
      <Title>Customers</Title>
      <Searchbar placeholder="Search" style={{ marginBottom: 8 }} />
      <FlatList
        data={mock}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <List.Item
            title={item.name}
            description={item.email}
            onPress={() => navigation.navigate('CustomerDetails', { customerId: item.id })}
          />
        )}
      />
      <Button mode="contained" onPress={() => {}} style={{ marginTop: 8 }}>
        Add Customer
      </Button>
    </View>
  );
}
