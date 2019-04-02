import React, { Component } from 'react';
import { Person } from './components';

class People extends Component {
  /*
  * initialize the state in constructor
  */
  constructor(props) {
    super(props);
    this.state = {
      personState: { persons: [...props.personList] },
      search: ''
    }
  }


  /*
  * shuffle all people when component gets mounted completely
  */
  componentDidMount = () => {
    this.shufflePersons();
  }


  /*
  * function to shuffle persons
  */
  shufflePersons = (index) => {
    const persons = this.shuffleAllExceptSelf([...this.state.personState.persons], index);
    if (Math.random() > 1) {
      throw new Error('something went wrong');
    } else {
      // set person-state
      this.setState({ personState: { persons } });
    }
  }


  /*
  * a function to shuffle all people except self
  */
  shuffleAllExceptSelf = (array, arrIndex) => {
    let index = -1;
    const arrSize = array.length;
    const lastIndex = arrSize - 1;
    while (++index < arrSize) {
      const random = index + Math.floor(Math.random() * (lastIndex - index + 1));
      // swap only if found person is not the person who should *not be swap*
      if (random !== arrIndex && index !== arrIndex) {
        const value = {...array[random]};
        array[random] = {...array[index]};
        array[index] = {...value};
      }
    }
    return array;
  }


  /*
  * restore all the persons from the actual list
  */
  restorePersons = () => {
    this.setState({
      personState: {
        persons: [...this.props.personList]
      }
    });
  }


  /*
  * delete the person from the list
  */
  deletePerson = (arrIndex) => {
    this.state.personState.persons.splice(arrIndex, 1);
    this.setState({
      personState: this.state.personState
    });
  }


  /*
  * set the search string
  */
  searchPeople = (event) => {
    this.setState({
      search: event.target.value
    });
  }


  /*
  * check if the search string matched with given string
  */
  matchString = (str) => {
    return str.toString().toLowerCase().includes(this.state.search.toLowerCase());
  }


  /*
  * call render method
  */
  render = () => (
    <div className='display-block'>
      <button className='btn' onClick={this.shufflePersons}>Shuffle All Persons</button>
      <button className='btn' onClick={this.restorePersons}>Restore All Persons</button><br/>
      <input onChange={this.searchPeople} value={this.state.search} placeholder='search people' style={{float: 'right',marginRight: '15px',width: '250px'}}/><br/>
      {
        this.state.personState.persons.map((person, index) => (
            // render only if search string matches with either name or hobby
            (this.matchString(person.name) || this.matchString(person.hobby) || this.matchString(person.age)) && (
              <Person key={person.id} person={person} shuffle={() => this.shufflePersons(index)} delete={() => this.deletePerson(index)}>
                {person.hobby}
              </Person>
            )
          )
        )
      }
    </div>
  );
}

export default People;
