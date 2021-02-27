import React, { Component, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";


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
    

    return (
        <View>
            <Text>Bezier Line Chart</Text>
            <LineChart
                data={{
                    labels: xValues,
                    datasets: [
                        {
                            data: yValues
                        }
                    ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        </View>
    );
};



const styles = StyleSheet.create({
    stockContainer: {

    }
});

export default Stock;