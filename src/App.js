import React from 'react';
import './App.css';
import { CardList } from './components/cardlist/card-list.component';
import { SearchBox } from './components/searchbox/searchbox.component';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      "monsters":[],
      "searchState":""
    }
  }


  handleChange = (e)=> {
    this.setState({searchState:e.target.value})
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users=>{this.setState({monsters:users})})
  }

  render(props){
    const { monsters, searchState} = this.state;
    const filteredMonsters = monsters.filter(itm => itm.name.toLowerCase().includes(searchState.toLowerCase()))
    return <div className="App">
      <h1 className="header">Monsters Rolodex</h1>
      <SearchBox placeholder="search Monsters" handleChange={this.handleChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  }
}
export default App;
