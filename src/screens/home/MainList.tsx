import { View, Text, StatusBar, SectionList, StyleSheet } from 'react-native'
import React from 'react'
import { HomeListTitle } from 'src/component';
import CategoryList from './CategoryList';
const DATA = [
    {
        title: 'Category',
        data: [{}],
        renderItem: () => <CategoryList />,
    },
    {
        title: 'Recomanded',
        renderItem: () => <CategoryList />,
        data: [{}],
    },
    {
        title: 'Recipe Of The Week',
        data: [{}],
        renderItem: () => <CategoryList />,
    },

];
export default function MainList() {
    return (
        <View>
            <SectionList
                sections={DATA}
                contentContainerStyle={{ paddingTop: 10 }}
                keyExtractor={(_, index) => index?.toString()}
                renderItem={({ item }: any) => (
                    item.renderItem()
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <HomeListTitle title={title} />)
                }
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
    },
    header: {
        fontSize: 32,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
    },
});
