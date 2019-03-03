'use strict';
require('dotenv').config({ path: 'variables.env' });
const express = require('express');
const app = express();
const route = require('./route/route');
const port = 9877;
const BinanceService = require('./service/binance-service');

app.use('/', route());


app.listen(port, () => console.log(`App listening on port ${port}!`));

// setInterval(() => BinanceService.ping(), 5000); //ping biance server ever 30s

setTimeout( async () => {
    try {
        console.log( await BinanceService.postOrder('BTCUSDT', 'BUY', 'MARKET', 0.004));
        console.log('Order test');
    } catch (error) {
        console.log('Order error');
        // console.log(error);
        throw(error);
    }
}, 2000);

// setTimeout( async () => {
//     try {
//         console.log( await BinanceService.getKlines('BTCUSDT', '5m', 10));
//         console.log('Klines test');
//     } catch (error) {
//         console.log('Klines error');
//         throw(error);
//     }
// }, 2000);
// setTimeout( async () => {
//     try {
//         console.log( await BinanceService.getAvgPrice('BTCUSDT'));
//         console.log('AVG Price test');
//     } catch (error) {
//         console.log('AVG Price error');
//         // throw(error);
//     }
// }, 2000);
// setTimeout( async () => {
//     try {
//         console.log( await BinanceService.getAggTrades('BTCUSDT', 10));
//         console.log('Agg Trades test');
//     } catch (error) {
//         console.log('Agg Trades test');
//         // throw(error);
//     }
// }, 2000);
// setTimeout( async () => {
//     try {
//         console.log( await BinanceService.get24hrTicker('BTCUSDT'));
//         console.log('24HR ticker test');
//     } catch (error) {
//         console.log('24HR ticker error');
//         // throw(error);
//     }
// }, 2000);
// setTimeout( async () => {
//     try {
//         console.log( await BinanceService.getLastPrice('BTCUSDT'));
//         console.log('Last Price Test');
//     } catch (error) {
//         console.log('Last Price error');
//         // throw(error);
//     }
// }, 2000);
// setTimeout( async () => {
//     try {
//         console.log( await BinanceService.getBookTop('BTCUSDT'));
//         console.log('Book top test');
//     } catch (error) {
//         console.log('Book top error');
//         // throw(error);
//     }
// }, 2000);

setTimeout( () => {
    console.log('test2');
}, 2000);


