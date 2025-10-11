import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { categories, useThemeContext } from '@utils';
import { CustomText } from 'src/component';
import { CategoryListStyles } from 'src/styles';

const CategoryList = () => {
    const theme = useThemeContext();
    const styles = CategoryListStyles(theme)
    return (
        <FlatList
            data={categories}
            renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                    <Image
                        source={item.image}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <CustomText variant="h6" color={theme.colors.text} fontFamily="Okra-Medium">
                        {item.title}
                    </CustomText>
                </View>
            )}
            horizontal
            contentContainerStyle={styles.contentContainer}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};


export default CategoryList;
