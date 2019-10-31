import React from  'react';
import { 
    TouchableNativeFeedback,
    View, 
    StyleSheet 
} from 'react-native';

const Button = props => {
    return (
        <TouchableNativeFeedback 
            onPress={props.onPress}
            background={TouchableNativeFeedback.Ripple('#f4f4f4', false)}
        >
            <View style={[
                styles.container, // default style
                props.style, // income style
                props.rounded ? styles.rounded:false // for set rounded button
            ]}>
                { props.children }
            </View>
        </TouchableNativeFeedback>
    );
}

export default Button;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'grey',
        height: undefined,
        width: undefined
    },
    rounded: {
        borderRadius: 100
    }
});
