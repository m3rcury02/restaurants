import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import foodData from "../data/foodData";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./Stack";

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Details"
>;
type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

const DetailsScreen = ({
  navigation,
  route,
}: {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
}) => {
    const { foodId } = route.params;
    const foodItem = foodData.find((food) => food.id === foodId);
  
    if (!foodItem) {
      return (
        <View style={styles.container}>
          <Text>Food item not found.</Text>
        </View>
      );
    }
  
    const similarFoodItems = foodData.filter(
      (food) =>
        food.id !== foodItem.id &&
        (food.specialty === foodItem.specialty || food.veg === foodItem.veg)
    );
  
    return (
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <View style={styles.foodCard}>
            <Text style={styles.foodTitle}>{foodItem.title}</Text>
            <Text>{foodItem.description}</Text>
            <Text>Price: {foodItem.price}</Text>
            <Text>Ingredients:</Text>
            <View style={styles.ingredientsContainer}>
              {foodItem.ingredients.map((ingredient) => (
                <View key={ingredient} style={styles.ingredientChip}>
                  <Text style={styles.ingredientText}>{ingredient}</Text>
                </View>
              ))}
            </View>
            <View style={styles.ratingContainer}>
              <Text>Rating:</Text>
              <View style={styles.starsContainer}>
                {[1,2,3,4,5].map((i) => (
                  <Text key={i} style={styles.star}>
                    {i <= Math.round(foodItem.rating) ? '★' : '☆'}
                  </Text>
                ))}
              </View>
            </View>
            {foodItem.reviews.map((review) => (
              <View key={review.id} style={styles.reviewContainer}>
                <Text>{review.text}</Text>
                <Text>-{review.author}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.similarFoodContainer}>
          <Text style={styles.similarFoodTitle}>Similar Food Items:</Text>
          {similarFoodItems.map((food) => (
            <TouchableOpacity
              key={food.id}
              onPress={() =>
                navigation.push('Details', {
                  foodId: food.id,
                })
              }
            >
              <View style={[styles.foodCard, styles.similarFoodCard]}>
                <Text style={styles.foodTitle}>{food.title}</Text>
                <Text>{food.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex:1,
      padding :10,
     backgroundColor :'#f5f5f5'
     },
     detailsContainer:{
       marginBottom :20
     },
     foodCard:{
       backgroundColor :'white',
       paddingVertical :10,
       paddingHorizontal :15,
       borderRadius :4,
       shadowColor :'#000',
       shadowOffset :{width :0,height :1},
       shadowOpacity :0.22,
       shadowRadius :2.22,
       elevation :3
     },
     similarFoodCard:{
       marginTop :10
     },
     foodTitle:{
       fontSize :18,
       fontWeight:'bold',
       marginBottom :5
     },
     ingredientsContainer:{
       flexDirection :'row',
       flexWrap :'wrap'
     },
     ingredientChip:{
       backgroundColor :'#6200ee',
       paddingVertical :4,
       paddingHorizontal :8,
       borderRadius :16,
       marginRight :4,
       marginBottom :4
     },
     ingredientText:{
       color :'white',
       fontSize :12
     },
  ratingContainer: {
    marginTop: 10,
  },
  foodItemContainer: {
    paddingVertical: 10,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
  reviewContainer: {
    marginTop: 5,
    fontStyle: "italic",
  },
  similarFoodContainer: {},
  similarFoodTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  starsContainer: {
    flexDirection: 'row',
    marginLeft: 4,
  },
  star: {
    fontSize: 18,
    marginRight: 2,
  },
});

export default DetailsScreen;
