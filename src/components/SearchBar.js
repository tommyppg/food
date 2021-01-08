import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) =>{
    return (
        <View style={styles.backgroundStyle}>
            <Feather
                name="search"
                style={styles.iconStyle}
            />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange} //built in function untuk detect pergantian text
                onEndEditing={onTermSubmit} //built in function untuk mengakhiri proses pengetikan
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop: 10,
        backgroundColor: '#e0e0e0',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row", //untuk membuat element2 di dalam kotak ini menjadi sebaris
        marginBottom: 10
    },
    inputStyle:{
        // borderColor: 'black',
        // borderWidth: 1,
        fontSize: 18, 
        flex: 1
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    }
});

export default SearchBar;