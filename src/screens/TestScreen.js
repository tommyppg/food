import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TestScreen = () =>{
    const [term, setTerm] = useState("");

    return (
        <View>
            <Text>Test</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default TestScreen;