import React from 'react'
const VideoDetail = ({video}) => {
    const videoSrc=`http://www.youtube.com/embed/${video.id.videoId}`
    return(
        <div>
            <div className='ui embed'>
                <iframe width='500px' height='300px' title='videoPlayer' src={videoSrc} />
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;