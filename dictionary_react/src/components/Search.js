import React from 'react';

class Search extends React.Component {

  render(){
    return (
      <div className="input-group mb-3">
        <input onChange={(e)=>this.props.searchWord(e)} type="text" className="form-control" placeholder="words..." />
      </div>
    );
  }
}

export default Search;
