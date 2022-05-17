import React from 'react';

export default class SearchBar extends React.Component {
    state={searchValue: ''};
    onSubmit = (e) => {
        e.preventDefault();
        this.props.handleSearch(this.state.searchValue)
    }

    render() {
        return(
            <div className='ui segment'>
                <form onSubmit={this.onSubmit} className='ui form'>
                    <label>Video Search</label>
                    <input style={{width:'350px',marginLeft:'10px',borderRadius:'5px'}} type="text" value={this.state.searchValue} onChange={(event)=>this.setState({searchValue: event.target.value})} />
                </form>
            </div>
        )
    }
}