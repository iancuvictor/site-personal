import React from 'react';
import css from './websitesPage.module.css';
import { VideoCard } from '../index';

const WebsitesPage = () => {
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

export default WebsitesPage;