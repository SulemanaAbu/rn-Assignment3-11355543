import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskCard = ({ task }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{task.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
    },
});

export default TaskCard;
