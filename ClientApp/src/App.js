import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Hero } from './components/Hero';
import { Movie } from './components/Movie';
import { Starship } from './components/Starship';
import { Landing } from './components/Landing';


import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Landing} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/heros' component={Hero} />
        <Route path='/movies' component={Movie} />
        <Route path='/starships' component={Starship} />
        <Route path='/landing' component={Landing} />

      </Layout>
    );
  }
}
