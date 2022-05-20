import { Button } from '@mui/material'
import React from 'react'
import classes from './Header.module.scss'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose} from 'react-icons/ai'

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <h2 className={classes.header__content__logo}>navbar</h2>
            
            <nav className={classes.header__content__nav}>
                <ul>
                    <li>
                        <a href="/">Page one</a>
                    </li>
                    <li>
                        <a href="/">Page Two</a>
                    </li>
                    <li>
                        <a href="/">Page Three</a>
                    </li>
                </ul>
                <Button className={classes.btn}>CTA Page</Button>
            </nav>
            <div className={classes.header__content__toggle}>
                <BiMenuAltRight />
            </div>
            </div>
        </header>
    )
}

export default Header