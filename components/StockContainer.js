import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Stock from '../components/Stock';

const StockContainer = () => {
    return (
        <View style={styles.stockContainer}>
            <Text>Stock Market</Text>
            <Stock/>
        </View>
    );
};

const styles = StyleSheet.create({
    stockContainer: {

    }
});

export default StockContainer;