import React from 'react';
import WordList from './components/WordList';
import Search from './components/Search';
import Display from './components/Display';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      wordList: [],
      // search: null,
      search: '',
    }
    this.fetchWords = this.fetchWords.bind(this)
    this.searchWord = this.searchWord.bind(this)
    this.displayDetails = this.displayDetails.bind(this)
  }

  componentDidMount(){
    this.fetchWords();
    this.displayDetails();
  }

  fetchWords(){
    console.log('Fetching words list...');
    fetch('http://127.0.0.1:8000/api/word-list/')
    .then(response => response.json())
    .then(data =>
      // console.log('Test List', data)
      this.setState({
        wordList: data,
      }, console.log('word list: ', this.state.wordList))
    );
  }

  displayDetails(){
    // let [first] = Object.keys(ahash);
    // console.log(this.state.wordList);
    let d = this.state.wordList;
    let firstKey = Object.keys(this.state.wordList)[0];
    console.log(Object.keys(d));
    console.log(firstKey);
  }

  searchWord=(event)=>{
    let keyword = event.target.value;
    console.log('before set: ', keyword);
    this.setState({search: keyword}, console.log('after set: ', this.state.search));
    // console.log('searching...');
    console.log(this.state.search);
  }

  render(){
    var words = this.state.wordList;
    var search = this.state.search;
    return (
      <div className="">
        <div className="container">
          <div className="">
            <h1>Dictionary</h1>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Search searchWord={this.searchWord} />
              <WordList words={words} search={search}/>
            </div>
            <div className="col-md-8">
              <Display />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
