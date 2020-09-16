import React from 'react';

class WordList extends React.Component {

  render(){
    const words = this.props.words;
    const search = this.props.search;
    const filteredWords = words.filter((word) => {
      return word.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    // const filteredWords = words.filter((word)=>{
    //   if(search == null)
    //       return word
    //   else if(word.title.toLowerCase().includes(search.toLowerCase())){
    //       return word
    //   }
    // });
    return (
      <ul className="list-group">
        {filteredWords.map(function(word, index){
          return(
            <li key={index} className="list-group-item">{word.title}</li>
          )
        })}
      </ul>
    );
  }
}

export default WordList;
