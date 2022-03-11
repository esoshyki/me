import { Fragment, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { content } from '../../content';
import { select } from '../../store/select';
import { toggleShowContact } from '../../store/view/view.actions';
import classes from './Contact.module.sass'

const Contact = () => {

    const dispatch = useDispatch();

    const locale = useSelector(select.view.locale);
    const showContact = useSelector(select.view.showContact);
    const rootRef = useRef<HTMLDivElement>(null);

    const getButtonStyle = () => showContact ? 
        [classes.button, classes.on].join(" ") :
        [classes.button, classes.off].join(" ")

    const handleClick = () => {
        dispatch(toggleShowContact(showContact ? undefined : true))
    }

    const getContentClass = () => showContact ? 
        [classes.content, classes.visible].join(" ") :
        [classes.content, classes.hidden].join(" ");


    return (
        <Fragment>
            <div
                className={getButtonStyle()} 
                onClick={handleClick}
                >
                <div className={classes.button__circle}></div>
                <div className={classes.button__text}>
                    {content.contact[locale].h2}
                </div>
            </div>
            <div 
                ref={rootRef}
                className={classes.root} >
                <div className={getContentClass()}>
                    <h2>
                        {content.contact[locale].h2}
                    </h2>
                </div>
            </div>
        </Fragment>
    )
};

export default Contact;