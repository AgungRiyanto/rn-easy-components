import React from  'react';
import { 
    TouchableNativeFeedback,
    View, 
    StyleSheet 
} from 'react-native';
import { Colors } from './constants';

const Button = props => {
    return (
        <TouchableNativeFeedback 
            onPress={props.onPress}
            background={TouchableNativeFeedback.Ripple('#f4f4f4', false)}
        >
            <View style={[
                styles.default, // default style
                props.style, // income style
                props.rounded ? styles.rounded:false, // for set rounded button
                props.color ? { backgroundColor: props.color }:false 
            ]}>
                { props.children }
            </View>
        </TouchableNativeFeedback>
    );
}

export default Button;

const styles = StyleSheet.create({
    default: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: '100%',
        alignSelf: 'flex-start',
        backgroundColor: Colors.default,
        borderRadius: 3,
        height: undefined,
        width: undefined
    },
    rounded: {
        borderRadius: 100
    }
});
