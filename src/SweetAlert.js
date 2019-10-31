import React from 'react';
import {
    View,
    TouchableNativeFeedback,
    Modal,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import Button from './Button';
import { Colors } from './constants';
import { getSweetAlertIcon } from './functions';

const SweetAlert = props => {
    return (
        <Modal 
            animationType="fade"
            visible={props.visible}
            transparent
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    {/* header */}
                    <View style={{ marginBottom: 10, justifyContent: 'center' }}>
                        <Image 
                            source={getSweetAlertIcon(props.type)}
                            style={{ 
                                tintColor: Colors[props.type], 
                                width: 50, 
                                height: 50,
                                alignSelf: 'center' 
                            }}
                            resizeMode="contain" 
                        />
                    </View>
                    <View style={{ marginBottom: 5 }}>
                        <Text style={styles.title}>{ props.title }</Text>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.text}>{props.textDescription}</Text>
                    </View>

                    {/* footer */}
                    {
                        props.onCancel ?
                        <View style={styles.footer}>
                            <Button onPress={props.onCancel}>
                                <Text style={{ color: '#fff' }}>Cancel</Text>
                            </Button>
                            <Button onPress={props.onConfirm} color={Colors[props.type]}>
                                <Text style={{ color: '#fff' }}>OK</Text>
                            </Button>
                        </View>
                        :
                        <View style={{ marginTop: 20 }}>
                            <Button onPress={props.onConfirm} style={{ alignSelf: 'center' }} color={Colors[props.type]}>
                                <Text style={{ color: '#fff' }}>OK</Text>
                            </Button>
                        </View>
                    }
                </View>
            </View>
        </Modal>
    );
}

export default SweetAlert;

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    content: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 3,
        width: '80%'
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
    text: {
        textAlign: 'center',
        fontSize: 14
    },  
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        alignSelf: 'center',
        marginTop: 20,
    }
});