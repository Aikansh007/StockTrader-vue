import Home from './components/Home.vue';
import Portfolio from './components/Portfolio/Portfolio.vue';
import Stocks from './components/Stocks/Stocks.vue';

export const routes = [
    { path : '/' , redirect: '/home'},
    { path : '/Portfolio' , component : Portfolio},
    { path : '/Stocks' , component : Stocks},
    {path : '/home' ,component : Home}
]