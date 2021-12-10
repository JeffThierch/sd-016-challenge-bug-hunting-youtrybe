import React, { Component, Fragment } from 'react';
import VideoThumbNail from './VideoThumbNail';
import VideoThumbNailInfo from './VideoThumbNailInfo';

import '../../../../css/sideBar.css';

class VideoSideBar extends Component {
  render() {
    const { relatedVideos, handleSelectedVideo } = this.props;
    return (
      <Fragment>
        {relatedVideos.map((video, index) => (
            <div
              key={index}
              className="suggested-video"
              onClick={() => handleSelectedVideo(video.id.videoId)}
              data-testid="selectedVideo"
            >
              <VideoThumbNail
                videoId={video.id.videoId}
                imageSource={video.snippet.thumbnails.medium.url}
              />
              <VideoThumbNailInfo
                title={video.snippet.title}
                channel={video.snippet.channelTitle}
              />
            </div>
        ))}
      </Fragment>
    );
  }
}

export default VideoSideBar;
