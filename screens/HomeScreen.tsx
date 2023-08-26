import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from "react-native";
import foodData from "../data/foodData";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "./Stack";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;

const HomeScreen = ({
  navigation,
}: {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}) => {
    const [searchText, setSearchText] = useState('');
    const [filter, setFilter] = useState('all');
    const [specialtyFilter, setSpecialtyFilter] = useState('all');
    const [ratingFilter, setRatingFilter] = useState(0);
  
    const filteredFoodData = foodData.filter((food) => {
      let matchesSearchText = food.title
        .toLowerCase()
        .includes(searchText.toLowerCase());
      let matchesVegFilter =
        filter === 'all' ||
        (filter === 'veg' && food.veg) ||
        (filter === 'non-veg' && !food.veg);
      let matchesSpecialtyFilter =
        specialtyFilter === 'all' || food.specialty === specialtyFilter;
      let matchesRatingFilter = food.rating >= ratingFilter;
      return (
        matchesSearchText &&
        matchesVegFilter &&
        matchesSpecialtyFilter &&
        matchesRatingFilter
      );
    });
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for food..."
          onChangeText={(text) => setSearchText(text)}
        />

        <View style={styles.filterContainer}>
          <Text style={styles.filterLabel}>Specialty:</Text>
          <TouchableOpacity
            style={[
              styles.filterButton,
              specialtyFilter === 'all' && styles.activeFilter,
            ]}
            onPress={() => setSpecialtyFilter('all')}
          >
            <Text style={styles.filterText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              specialtyFilter === 'spicy' && styles.activeFilter,
            ]}
            onPress={() => setSpecialtyFilter('spicy')}
          >
            <Text style={styles.filterText}>Spicy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              specialtyFilter === 'sweet' && styles.activeFilter,
            ]}
            onPress={() => setSpecialtyFilter('sweet')}
          >
            <Text style={styles.filterText}>Sweet</Text>
          </TouchableOpacity>
          
        </View>
        <View style={styles.filterContainer}>
          <Text style={styles.filterLabel}>Minimum Rating:</Text>
          {[0, 1, 2, 3, 4, 5].map((rating) => (
            <TouchableOpacity
              key={rating}
              style={[
                styles.filterButton,
                ratingFilter === rating && styles.activeFilter,
              ]}
              onPress={() => setRatingFilter(rating)}
            >
              <Text style={styles.filterText}>{rating}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={[styles.filterButton, filter === 'all' && styles.activeFilter]}
            onPress={() => setFilter('all')}
          >
            <Text style={styles.filterText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, filter === 'veg' && styles.activeFilter, {backgroundColor:"green"}]}
            onPress={() => setFilter('veg')}
          >
            <Text style={styles.filterText}>Veg</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              filter === 'non-veg' && styles.activeFilter,
              , {backgroundColor:"darkred"}
            ]}
            onPress={() => setFilter('non-veg')}
          >
            <Text style={styles.filterText}>Non-Veg</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={filteredFoodData}
          renderItem={({ item }) => (
            <View style={styles.foodItemContainer}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details', {
                    foodId: item.id,
                  })
                }
              >
                <View style={styles.foodCard}>
                  <Text style={styles.foodTitle}>{item.title}</Text>
                  <Text>{item.description}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#f5f5f5',
    },
    searchBar: {
      height: 40,
      borderColor: '#6200ee',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 10,
      borderRadius: 25,
    },
    filterContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      justifyContent:"space-between"
      
    },
    filterLabel: {
      fontWeight: 'bold',
      marginRight: 10,
    },
    filterButton: {
        borderColor: '#6200ee',
      backgroundColor: '#6200ee',
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 16,
      marginRight: 8,
    },
    activeFilter: {
      backgroundColor: '#3700b3',
    },
    filterText: {
      color: 'white',
      fontSize: 14,
    },
    foodItemContainer: {
      marginBottom: 10,
    },
    foodCard: {
      backgroundColor: 'white',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    foodTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
      },
  });

export default HomeScreen;
