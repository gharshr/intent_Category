import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const style = {
  height: 60,
  width: '100%',
  fontSize: 40,
  paddingTop: 10,
  paddingBottom:10,
  fontFamily: "monospace",
  textAlign: 'center',
  display: 'inline-block',
};

const hintStyle={
    color: 'blue',
    paddingBottom:13,
    paddingLeft:8,
    fontSize:12,
	fontcolor:'blue',
}

const inputStyle={
    position:'absolute',
    width: 170,
    height: 20,
    paddingLeft: 9,
    fontSize:12,
    marginTop:1

}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text : '',
      intent : 'None found'
    }
  }
  handleTextChange(e){
    console.log(e.target.value);
	this.setState({
	  text:e.target.value,
    })
  }
  changeOutput(e){
    e.preventDefault();
    alert('Function called');
	alert(this.state.text);
	fetch('https://api.abash76.hasura-app.io/get-news', {
      method: 'POST',
      headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
          getNews: this.state.text
          }),
    })
    .then(function(response) {
		alert(this.state.text);
    response.JSON().then(function(text) {
        this.state.text=JSON;
		alert(text);
    });
	});
	alert(this.state.text);
  }
  render() {
    return (
    	<div>
    		<Paper style={style} zDepth={5}>Team19_POA</Paper>
    			<br/>
    			<tt>
    				e.g. 'What is your name?', 'Thanks', 'My name is harsh'.
    			</tt>
    		<TextField
                underlineShow ={false}
                hintText="Search Twitter"
                hintStyle={hintStyle}
                inputStyle={inputStyle}
          />
    	<form className="WitForm" onSubmit={this.changeOutput.bind(this)}>
            <input placeholder={this.showPlaceholder()} type="text" value={this.state.text} onChange={this.handleTextChange.bind(this)}/>
            <br/>
            <div className="button-container center">
            <input className="button center" type="submit" value="Get intent" />
            </div>
    		     <div id="demo" className="outputContainer center" ref={(output) => { this.outputBox = output; }}>
            {this.state.intent}
    		    </div>
        </form>
    	</div>
	);
  }
  showPlaceholder(){
    var text_list = [
      "Hello",
      "What's up in Mumbai at 4pm today?",
      "Tell me about Tesla",
      "How is the weather today?",
      "Tell me about the next IPL match",
      "What's trending?",
      "Bye!"];
    return text_list[Math.floor(Math.random() * Math.floor(text_list.length))];
  }
}

export default App;
