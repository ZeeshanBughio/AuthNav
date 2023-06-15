//import liraries
import React, { Component } from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const ButtonWithLoader = ({
    text,
    onPress
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btnStyle}>            
                <Text style={styles.textStyle}>{text}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    btnStyle: {
        height: 48,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingHorizontal: 16
    },
    textStyle: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white'
    }
});

//make this component available to the app
export default ButtonWithLoader;
