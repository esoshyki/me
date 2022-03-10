import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { content } from '../../content';
import { select } from '../../store/select';
import { Screens } from '../../store/view/view.types';
import classes from './Layout.module.sass'

const HeaderLink = ({ title, selected } : { 
    title: string, 
    selected: boolean
}) => {

    const getClassName = () => {
        return !selected ? 
            classes.header__link :
            [classes.header__link, classes.selected].join(" ")
    }

    return (
        <a href='#' 
            className={getClassName()}>
            {title}
        </a>
    )
}

const Header = () => {

    const locale = useSelector(select.view.locale);
    const screen = useSelector(select.view.screen);

    console.log(screen);

    const links = [
        {
            title: content.header[locale].react,
            screen: Screens.Home
        },
        {
            title: content.header[locale].nodeJS,
            screen: Screens.NodeJS
        }
    ]

    return (
        <header className={classes.header}>
            { links.map((link, idx) => (
                <Fragment key={idx}>
                    <HeaderLink 
                        title={link.title}
                        selected={link.screen === screen}
                        />
                </Fragment>))}
        </header>
    )
};

export default Header