import React from 'react';
import { View, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Categories from './src/components/Categories';
import OngoingTasks from './src/components/OngoingTasks';
import Header from './src/components/Header';

const App = () => {
    return (
        <ScrollView style={styles.container}>
            <Header />
            <View style={styles.searchSection}>
                <View style={styles.searchContainer}>
                    <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
                    <TextInput
                        style={styles.search}
                        placeholder="Search"
                        placeholderTextColor="#666"
                    />
                </View>
                <TouchableOpacity style={styles.filterButton}>
                    <Icon name="filter-list" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
            <Categories />
            <OngoingTasks />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        flex: 1,
    },
    searchIcon: {
        marginRight: 10,
    },
    search: {
        flex: 1,
        height: 40,
    },
    filterButton: {
        backgroundColor: '#F04A00',
        padding: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
});

export default App;
