import React from 'react';
import {
    View,
    Modal,
    Text,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

const Loader = props => {
    return (
        <Modal 
            animationType="fade"
            visible={props.visible}
            transparent
        >
            <View style={styles.container}>
                <View style={[styles.content, {backgroundColor: props.backgroundColor ? props.backgroundColor:'grey'}]}>
                    <ActivityIndicator size="large" color={props.color ? props.color:'#fff'} />
                    <Text style={styles.text}>{ props.text ? props.text:'Loading...' }</Text>
                </View>
            </View>
        </Modal>
    );
}

export default Loader;

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    content: {
        flexDirection: 'row',
        backgroundColor: 'grey',
        padding: 15,
        borderRadius: 3,
    },
    text: { 
        color: '#fff', 
        alignSelf: 'center', 
        marginLeft: 10,
        fontSize: 16
    }
});