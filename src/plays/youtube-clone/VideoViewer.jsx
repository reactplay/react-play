import React from 'react';
import SearchBar from './SearchBar';
import youtube from './youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
class VideoViewer extends React.Component {
    componentDidMount() {
        this.handleSearchValue('Best books')
    }
    state = { apiResponse: [], selectedVideo: null }
    handleSearchValue = async (value) => {
        const response = await youtube.get('/search', {
            params: {
                q: value
            }
        })
        this.setState({ apiResponse: response.data.items, selectedVideo: response.data.items[0] })
    }
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }
    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar handleSearch={this.handleSearchValue} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            {this.state.selectedVideo ? <VideoDetail video={this.state.selectedVideo} /> : null}
                        </div>
                        <div className='five wide column'>
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.apiResponse} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoViewer;