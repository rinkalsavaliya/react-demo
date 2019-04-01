import React, { Component } from 'react';
import Text from '../../Validation/Text';
import Char from '../Char/Char';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textState: { text: '', count: 0, minText: 5 }
    }
  }



  /*
  * change event for the text
  */
  changeText = (event) => {
    this.setState({
      textState: {
        ...this.state.textState,
        text: event.target.value,
        count: (event.target.value || '').length
      }
    });
    if (Math.random() > 0.7) {
      throw new Error('something went wrong');
    }
  }


  /*
  * delete character from the text
  */
  deleteChar = (index) => {
    let text = this.state.textState.text.split('');
    text.splice(index, 1);
    this.setState({
      textState: {
        ...this.state.textState,
        text: text.join(''),
        count: text.length
      }
    });
  }


  /*
  * call render method
  */
  render = () => {
    return (
      <div className='display-block'>
        <input placeholder='type anything' className='text' onChange={this.changeText} value={this.state.textState.text}/>
        <Text count={this.state.textState.count} min={this.state.textState.minText}/>
        {
          this.state.textState.text.split('').map((char, key) => {
            return (
              <Char key={key} deleteChar={() => this.deleteChar(key)} char={char}/>
            )
          })
        }
      </div>
    );
  }
}

export default TextInput;
