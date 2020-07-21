import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';


const FavouriteScreen = props => {
    const favMeals = useSelector(state => state.meals.favouriteMeals);

    if(favMeals.length === 0 || !favMeals){
        return (
        <View style={styles.content}>
            <DefaultText> No Favourite meals found. Start adding some! </DefaultText>
        </View>
        )
    }

    return (
        <MealList listData={favMeals}  navigation={props.navigation} />
     )
}

FavouriteScreen.navigationOptions = navData =>  {
    return {
        headerTitle: 'Your Favourites',
        headerLeft: () =>  <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="ios-menu" onPress={() => {
            navData.navigation.toggleDrawer();
        }} />
    </HeaderButtons>
    }
};

const styles = StyleSheet.create({
    content:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default FavouriteScreen;