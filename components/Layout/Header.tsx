import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { content } from '../../content';
import { Locales } from '../../content/locales';
import { select } from '../../store/select';
import { changeScreenRequest } from '../../store/view/view.actions';
import { Screens } from '../../store/view/view.types';
import classes from './Layout.module.sass'

const HeaderLink = ({ title, selected, screen } : { 
    title: string, 
    selected: boolean,
    screen: Screens
}) => {

    const dispatch = useDispatch();

    const getClassName = () => {
        return !selected ? 
            classes.header__link :
            [classes.header__link, classes.selected].join(" ")
    }

    const onClick = () => {
        dispatch(changeScreenRequest(screen))
    }
    
    return (
        <div
            onClick={onClick}
            className={getClassName()}>
            {title}
        </div>
    )
}

const LanguageSwitcher = () => {

    const locale = useSelector(select.view.locale);
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    }

    const handleMouseLeave = () => {
        setHover(false)
    };

    const getLocaleTitle = () => {
        switch (locale) {
            case Locales.be:
                return "Бел"
            case Locales.en:
                return "Eng"
            default:
                return "Рус"
        }
    }

    return (
        <div 
            className={classes.language} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >

            {hover && (
                <div className={classes.link_container}>
                    <a className={locale === "en" ? classes.active : ""} href='/en'>Eng</a>
                    <a className={locale === "ru" ? classes.active : ""} href='/ru'>Рус</a>
                    <a className={locale === "be" ? classes.active : ""} href='/be'>Бел</a>
                </div>    
            )}

            {!hover && (
                <a className={classes.active} href={`/${locale}`}>{getLocaleTitle()}</a>
            )}


        </div>  
    )
}

const Header = () => {

    const locale = useSelector(select.view.locale);
    const screen = useSelector(select.view.screen);

    const links = [
        {
            title: content.header[locale].react,
            screen: Screens.Home
        },
        {
            title: content.header[locale].nodeJS,
            screen: Screens.NodeJS
        },
        {
            title: content.header[locale].quality,
            screen: Screens.Quality
        },
        {
            title: content.header[locale].seo,
            screen: Screens.Seo
        }
    ]

    return (
        <header className={classes.header}>
            <LanguageSwitcher />
            { links.map((link, idx) => (
                <Fragment key={idx}>
                    <HeaderLink 
                        title={link.title}
                        selected={link.screen === screen}
                        screen={link.screen}
                        />
                </Fragment>))}
        </header>
    )
};

export default Header