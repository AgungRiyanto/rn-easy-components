import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

const Container = props => {
    return (
        <View 
            style={[styles.default, props.style]}
        >
            { props.children }
        </View>
    );
}

export default Container;

const styles = StyleSheet.create({
    default: {
        flex: 1,
        backgroundColor: '#fff'
    }
});