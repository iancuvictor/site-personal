import { React, useState } from 'react';
import css from './videoCard.module.css';

const VideoCard = (props) => {

    return (
        <div className={css.videoCardBody}>
            <h1 className={css.cardTitle}>{props.title}</h1>
            <div className={css.vidContainer}>
                <video src={props.source} autoPlay='true' muted loop='true'  />
            </div>

            <div className={css.footer}>
                <p className={css.filtersTitle}>Filters</p>
                <div className={css.filters}>
                    <p>{props.category},</p>
                    <p>{props.genre}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;