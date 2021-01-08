import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () =>{

    //term adalah variable state, sedangkan setTerm adalah fungsi untuk melakukan set ke variable tsb
    const [term, setTerm] = useState("");

    //membuat fungsi useResults terpisah dari component ini.
    const [searchApi, results, errorMessage] = useResults();
    
    //fungsi memfilter harga $, $$, atau $$$
    const filterResultsByPrice = (price) =>{

        //harus pelajari lagi fungsi filter(), can paham euuy
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View style={{flex: 1}}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            { errorMessage ? <Text>{errorMessage}</Text> : null }

            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice('$')} 
                    title="Cost Effective"
                />
                <ResultsList
                    results={filterResultsByPrice('$$')} 
                    title="Bit Pricier"
                />
                <ResultsList
                    results={filterResultsByPrice('$$$')} 
                    title="Big Spender"
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;