import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import TaskCard from './TaskCard';

const tasks = [
    { id: '1', title: 'Mobile App Development' },
    { id: '2', title: 'Web Development' },
    { id: '3', title: 'Push Ups' },
    { id: '4', title: 'Read a book' },
    { id: '5', title: 'Cook Dinner' },
    { id: '6', title: 'Meditation' },
    { id: '7', title: 'Sleep 8 hours' },
    { id: '8', title: 'Grocery Shopping' },
    { id: '9', title: 'Client Meeting' },
    { id: '10', title: 'Email Responses' },
    { id: '11', title: 'Project Planning' },
    { id: '12', title: 'Design Review' },
    { id: '13', title: 'Run 5k' },
    { id: '14', title: 'Yoga' },
    { id: '15', title: 'Laundry' },
];

const OngoingTasks = () => {
    return (
        <View>
            <Text style={styles.heading}>Ongoing Task</Text>
            <FlatList
                data={tasks}
                renderItem={({ item }) => <TaskCard task={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
});

export default OngoingTasks;
