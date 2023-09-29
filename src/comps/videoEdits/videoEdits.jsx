import React from 'react';
import css from './videoEdits.module.css';
import { VideoCard } from '../index';
import JonJones from '../videoCard/videoProjects/jonjonescarcrash.mp4';
import NBADunkContest from '../videoCard/videoProjects/nbaslamdunk.mp4';

const VideoEdits = () => {
    return (
        <div className={css.projectsBody}>
            <div className={css.billboard}>
                <h1 className={css.billboardText}>VIDEO EDITS AND HIGHLIGHT REELS</h1>
                <h1 className={css.billboardText}>VIDEO EDITS AND HIGHLIGHT REELS</h1>
                <h1 className={css.billboardText}>VIDEO EDITS AND HIGHLIGHT REELS</h1>
                <h1 className={css.billboardText}>VIDEO EDITS AND HIGHLIGHT REELS</h1>
            </div>
            <div className={css.projectList}>
                {/*<VideoCard
                    source={JonJones}
                    title={'Jon Jones Highlight Reel'}
                    category={'video'}
                    genre={'edit'}
                />

                <VideoCard
                    source={NBADunkContest}
                    title={'NBA Slam Dunk Contest 2016 highlight reel'}
                    category={'video'}
                    genre={'edit'}
    />*/}
            </div>
        </div>
    )
}

export default VideoEdits;