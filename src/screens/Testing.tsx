import * as React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';

const data = [
  {key: 1},
  {key: 2},
  {key: 3},
  {key: 4},
  {key: 5},
  {key: 6},
  {key: 7},
  {key: 8},
];

class TastingComponents extends React.Component {
  render() {
    return (
      <View>
        <FlatList
          keyExtractor={(item, index) => index.toString() + data.length}
          contentContainerStyle={{
            paddingHorizontal: 15,
            paddingVertical: 10,
            backgroundColor: '#F5F5F5',
            borderRadius: 5,
            marginBottom: 10,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 1,
          }}
          horizontal
          data={data}
          onEndReached={() => {
            console.log('End reached');
            data.push(
              {key: 1},
              {key: 2},
              {key: 3},
              {key: 4},
              {key: 5},
              {key: 6},
              {key: 7},
              {key: 8},
            );
          }}
          //   pagingEnabled
          renderItem={() => (
            <View style={styles.box}>
              <Text>Box</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatList: {
    marginTop: 100,
    height: 100,
    paddingLeft: 15,
    paddingRight: 15, // THIS DOESN'T SEEM TO BE WORKING
    // marginRight: 15   I can't use marginRight because it cuts off the box with whitespace
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 100,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 15,
    marginRight: 15,
  },
});

export default TastingComponents;
