import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Plotly from 'react-native-plotly';



const Stock = () => {
    const [xValues, setXValues] = useState([]);
    const [yValues, setYValues] = useState([]);

    useEffect(() => {
        fetchStock();
    })

    const fetchStock = () => {
        const API_KEY = '9OLZU016V28ZXD4X';
        let StockSymbol = 'AMZN';
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}&interval=5min&outputsize=compact&apikey=${API_KEY}`;

        return fetch(API_CALL)
            .then((response) => response.json())
            .then((data) => {
                //console.log(data);
                for (var key in data['Time Series (5min)']) {
                    setXValues(xValues => [...xValues, key]);
                    setYValues(yValues => [...yValues, data['Time Series (5min)'][key]['1. open']]);
                };
            })
            .catch((error) => console.error(error));
    };

    const data = {
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 3, 4, 8],
        type: 'scatter',
    };

    return (
        <View style={styles.stockContainer}>
            <Plotly
                data={data}
                layout={layout}
            />

        </View>
    );
};



const styles = StyleSheet.create({
    stockContainer: {

    }
});

export default Stock;