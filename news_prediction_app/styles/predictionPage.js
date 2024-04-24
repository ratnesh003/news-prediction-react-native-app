import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
    },
    fakecontent: {
        flex: 1,
        backgroundColor: '#ffdddd', // Light red background color
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    realcontent: {
        flex: 1,
        backgroundColor: '#ddffdd', // Light green background color
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    faketext: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#ff0000', // Red color
    },
    realtext: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#00ff00', // Green color
    },
});

export default styles;