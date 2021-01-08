import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'; //buat by pass navigasi ke komponen ini langsung dari root
import ResultsDetail from '../components/ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
    if(!results.length){
        return null;
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {/* <Text>Results: {results.length} </Text> */}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) =>{
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ResultsShow', {id: item.id})}
                        >
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container:{
        marginBottom: 10
    }
});

//link ke navigasi
export default withNavigation(ResultsList);