import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerContent}>
                <View style={styles.textContainer}>
                    <Text style={styles.greeting}>Hello, Devs</Text>
                    <Text style={styles.tasks}>14 tasks today</Text>
                </View>
                <Image source={require('C:\\Users\\saddi\\WebstormProjects\\rn-Assignment3-11355543\\Assignment3\\src\\profileImage.jpg')} style={styles.profileImage} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        padding: 15,
        backgroundColor: '#f5f5f5',
        marginVertical: 20,
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        flexDirection: 'column',
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    tasks: {
        fontSize: 14, // Adjust the font size if needed
        color: '#666',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
});

export default Header;
