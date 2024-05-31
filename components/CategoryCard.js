import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CategoryCard = ({ category }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: category.image }} style={styles.image} />
            <Text style={styles.title}>{category.title}</Text>
            <Text style={styles.tasks}>{category.tasks}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        marginRight: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    tasks: {
        fontSize: 14,
        color: '#666',
    },
});

export default CategoryCard;
