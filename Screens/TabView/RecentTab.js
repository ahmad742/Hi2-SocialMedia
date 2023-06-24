import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../UI/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import VectorIcons from '../../UI/VectorIcons';

const RecentTab = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        <Text style={styles.titleStyle}>Top Categories</Text>
        <View style={styles.containerStyle}>
          <VectorIcons
            icon={'Ionicons'}
            name={'ios-car-outline'}
            size={22}
            color={Colors().Green}
          />
          <Text style={styles.textStyle}>Vehicles</Text>
        </View>
        <View style={styles.containerStyle}>
          <VectorIcons
            icon={'MaterialCommunityIcons'}
            name={'office-building'}
            size={22}
            color={Colors().Green}
          />
          <Text style={styles.textStyle}>Rentals</Text>
        </View>
        <View style={styles.containerStyle}>
          <VectorIcons
            icon={'MaterialCommunityIcons'}
            name={'sofa-single-outline'}
            size={22}
            color={Colors().Green}
          />
          <Text style={styles.textStyle}>Furniture</Text>
        </View>
        <View style={styles.containerStyle}>
          <VectorIcons
            icon={'MaterialCommunityIcons'}
            name={'lightbulb-outline'}
            size={22}
            color={Colors().Green}
          />
          <Text style={styles.textStyle}>Electronics</Text>
        </View>
        <View style={styles.containerStyle}>
          <VectorIcons
            icon={'MaterialCommunityIcons'}
            name={'hanger'}
            size={22}
            color={Colors().Green}
          />
          <Text style={styles.textStyle}>Fashion</Text>
        </View>
        <Text style={styles.titleStyle}>All Categories</Text>
        <View style={styles.containerStyle}>
          <VectorIcons
            icon={'Ionicons'}
            name={'ios-car-outline'}
            size={22}
            color={Colors().Green}
          />
          <Text style={styles.textStyle}>Appliances</Text>
        </View>
        <View style={styles.containerStyle}>
          <VectorIcons
            icon={'Ionicons'}
            name={'md-color-palette-outline'}
            size={22}
            color={Colors().Green}
          />
          <Text style={styles.textStyle}>Art & Craft</Text>
        </View>
        <View style={styles.containerStyle}>
          <VectorIcons
            icon={'MaterialCommunityIcons'}
            name={'book-open-variant'}
            size={22}
            color={Colors().Green}
          />
          <Text style={styles.textStyle}>Books & Music</Text>
        </View>
        <View style={styles.containerStyle}>
          <VectorIcons
            icon={'MaterialCommunityIcons'}
            name={'lightbulb-outline'}
            size={22}
            color={Colors().Green}
          />
          <Text style={styles.textStyle}>Electronics</Text>
        </View>
        <View style={styles.containerStyle}>
          <VectorIcons
            icon={'MaterialCommunityIcons'}
            name={'hanger'}
            size={22}
            color={Colors().Green}
          />
          <Text style={styles.textStyle}>Fashion</Text>
        </View>
        <View style={styles.containerStyle}>
          <VectorIcons
            icon={'MaterialCommunityIcons'}
            name={'sofa-single-outline'}
            size={22}
            color={Colors().Green}
          />
          <Text style={styles.textStyle}>Furniture</Text>
        </View>
        <View style={styles.containerStyle}>
          <VectorIcons
            icon={'MaterialCommunityIcons'}
            name={'leaf'}
            size={22}
            color={Colors().Green}
          />
          <Text style={styles.textStyle}>Health & Beauty</Text>
        </View>
        <View style={styles.containerStyle}>
          <VectorIcons
            icon={'MaterialCommunityIcons'}
            name={'flower-outline'}
            size={22}
            color={Colors().Green}
          />
          <Text style={styles.textStyle}>Home & Decor</Text>
        </View>
        <View style={styles.containerStyle}>
          <VectorIcons
            icon={'MaterialCommunityIcons'}
            name={'watch'}
            size={22}
            color={Colors().Green}
          />
          <Text style={styles.textStyle}>Jewelry & watches</Text>
        </View>
        <View style={styles.containerStyle}>
          <VectorIcons
            icon={'MaterialCommunityIcons'}
            name={'bag-suitcase-outline'}
            size={22}
            color={Colors().Green}
          />
          <Text style={styles.textStyle}>Luggage & Bags</Text>
        </View>
        <View style={styles.containerStyle}>
          <VectorIcons
            icon={'MaterialCommunityIcons'}
            name={'bag-suitcase-outline'}
            size={22}
            color={Colors().Green}
          />
          <Text style={styles.textStyle}>Miscellaneous</Text>
        </View>
        <View style={styles.containerStyle}>
          <VectorIcons
            icon={'MaterialCommunityIcons'}
            name={'file-settings-outline'}
            size={22}
            color={Colors().Green}
          />
          <Text style={styles.textStyle}>Patio & Garden</Text>
        </View>
        <View style={styles.containerStyle}>
          <VectorIcons
            icon={'MaterialCommunityIcons'}
            name={'office-building'}
            size={22}
            color={Colors().Green}
          />
          <Text style={styles.textStyle}>Rentals</Text>
        </View>
        <View style={styles.containerStyle}>
          <VectorIcons
            icon={'MaterialCommunityIcons'}
            name={'robot-outline'}
            size={22}
            color={Colors().Green}
          />
          <Text style={styles.textStyle}>Toys</Text>
        </View>
        <View style={styles.containerStyle}>
          <VectorIcons
            icon={'Ionicons'}
            name={'ios-car-outline'}
            size={22}
            color={Colors().Green}
          />
          <Text style={styles.textStyle}>Vehicles</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecentTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  containerStyle: {
    marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: RFValue(12),
    color: Colors().Purple,
    fontWeight: '900',
    marginHorizontal: 10,
    marginTop: 10,
  },
  textStyle: {
    marginLeft: 10,
    fontSize: RFValue(14),
    color: Colors().Dark,
    fontWeight: '500',
  },
  contentContainerStyle: {
    paddingBottom: 20,
  },
});
