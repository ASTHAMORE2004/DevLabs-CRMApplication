import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Button, List, Menu, Title } from 'react-native-paper';

const statuses = ['All', 'New', 'Contacted', 'Converted', 'Lost'];
const mockLeads = [
  { id: 'l1', title: 'Website redesign', status: 'New', value: 5000 },
  { id: 'l2', title: 'Mobile App', status: 'Contacted', value: 12000 },
];

export default function LeadsScreen({ route }) {
  const { customerId } = route.params || {};
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? mockLeads : mockLeads.filter((l) => l.status === filter);

  return (
    <View style={{ flex: 1, padding: 8 }}>
      <Title>Leads for {customerId}</Title>
      <Menu
        visible={false}
        onDismiss={() => {}}
        anchor={<Button onPress={() => {}}>Filter: {filter}</Button>}>
        {statuses.map((s) => (
          <Menu.Item key={s} onPress={() => setFilter(s)} title={s} />
        ))}
      </Menu>
      <FlatList
        data={filtered}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <List.Item title={item.title} description={`${item.status} • $${item.value}`} />
        )}
      />
      <Button mode="contained" onPress={() => {}} style={{ marginTop: 8 }}>
        Add Lead
      </Button>
    </View>
  );
}
