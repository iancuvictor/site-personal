import { React, useState } from 'react';
import css from './navbar.module.css';

const Navbar = () => {

    const Button = (props) => {
        return (
            <a className={css.navbarButton} href={props.linkTo}><p>{props.buttonName}</p></a>
        )
    }

    return (
        <div className={css.navbarBody}>
            <h1 className={css.name}>IANCU VICTOR</h1>
            <p className={css.about}>
                I'M A MMA FIGHTER THAT ALSO DOES FRONTEND WEB DEVELOPMENT WORK IN REACT, VIDEO EDITS IN PREMIERE PRO AND AFTER EFFECTS, AND VARIOUS OTHER THINGS MEDIA RELATED. 
            </p>

            <div className={css.buttons}>
                <Button
                    linkTo={'https://www.instagram.com/iancuvictor_/'}
                    buttonName={'instagram'}
                />

                <Button
                    linkTo={'https://twitter.com/iancuvictor_'}
                    buttonName={'twitter'}
                />

                <Button
                    linkTo={'https://www.tiktok.com/@iancuvictorp1'}
                    buttonName={'tiktok'}
                />

                <Button
                    linkTo={'https://github.com/iancuvictor'}
                    buttonName={'github'}
                />
            </div>
        </div>
    )
}

export default Navbar;