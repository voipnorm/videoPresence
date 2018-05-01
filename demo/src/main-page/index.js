import React, { Component } from 'react';
import './App.css';
import Table1 from '../table';
import Header from'../header';

const url = 'http://10.27.42.118:8080/endpoints/4';

class App extends Component {
    state = {};

    componentDidMount(){
        this.interval = setInterval(() => this.fetchEndpoints(), 10000);

    };
    componentWillUnmount() {
        clearInterval(this.interval);
    }
//url,{mode:'no-cors'})
    fetchEndpoints = () => {
        fetch(url)
            .then(rsp => rsp.json())
            .then(allEndpoints => {
                const endpoints = allEndpoints;
                console.log(endpoints)
                this.setState({endpoints});
            })
            .catch(err => console.log(err))
    }

  render() {
    return (
      <div className="App">
        <Header subtitle="Telepresence Exam Room Demo App"/>
              <Table1 data={this.state.endpoints}/>

      </div>
    );
  }
}

export default App;
