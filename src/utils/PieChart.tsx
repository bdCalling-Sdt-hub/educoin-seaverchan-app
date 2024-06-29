import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PieChart} from 'react-native-gifted-charts';
import {GStyles} from '../styles/GStyles';

const DonutChart = () => {
  const data = [
    {value: 60, color: '#42A5F5', text: '70%'},
    {value: 60, color: '#FFA726', text: '60%'},
    {value: 40, color: '#AB47BC', text: '10%'},
  ];

  return (
    <View style={styles.container}>
      <PieChart
        data={data}
        showText
        textColor="white"
        textSize={16}
        showValuesAsLabels
        // showTextBackground
        textBackgroundColor="black"
        textBackgroundRadius={15}
        donut
        innerRadius={60}
        centerLabelComponent={() => (
          <View style={styles.centerText}>
            <Text style={styles.levelText}>Level 1</Text>
            <Text style={styles.scoreText}>45 ★</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 260,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelText: {
    fontSize: 24,
    color: GStyles.primaryOrange,
    fontFamily: GStyles.PoppinsBold,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  scoreText: {
    fontSize: 16,
    fontFamily: GStyles.Poppins,
    color: '#797979',
    fontWeight: '400',
    letterSpacing: 0.5,
  },
});

export default DonutChart;
