import React from 'react';
import { View, Dimensions } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';
import { PieChart } from 'react-native-chart-kit';

export default function DashboardScreen() {
  const data = [
    { name: 'New', population: 3, color: '#f44336', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Contacted', population: 5, color: '#2196f3', legendFontColor: '#7F7F7F', legendFontSize: 12 },
  ];

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Title>Dashboard</Title>
      <Paragraph>Leads by status</Paragraph>
      <PieChart
        data={data}
        width={Dimensions.get('window').width - 32}
        height={220}
        chartConfig={{ backgroundGradientFrom: '#fff', backgroundGradientTo: '#fff', color: (opacity = 1) => `rgba(0,0,0,${opacity})` }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
}
