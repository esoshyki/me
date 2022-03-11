import { useSelector } from 'react-redux';
import { content } from '../../content';
import { select } from '../../store/select';
import classes from './Form.module.sass'
import { useState } from 'react';

const Form = () => {

    const locale = useSelector(select.view.locale);
    const showContact = useSelector(select.view.showContact);

    const [fio, setFio] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [question, setQuestion] = useState("");

    const getRootClass = () => {
        return showContact ? 
            [classes.root, classes.show].join(" ") :
            [classes.root, classes.hide].join(" ")
    }

    return (
        <div className={getRootClass()}>
            <label>{content.contactForm[locale].fio}</label>
            <input 
                value={fio}
                onChange={(e) => setFio(e.target.value)}
                className={classes.input} />

            <label>{content.contactForm[locale].phone}</label>
            <input 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={classes.input} />

            <label>{content.contactForm[locale].email}</label>
            <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={classes.input} />

            <label>{content.contactForm[locale].company}</label>
            <input 
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className={classes.input} />

            <label>{content.contactForm[locale].question}</label>
            <input 
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className={classes.input} />

            <button className={classes.button}>
                {content.contactForm[locale].send}
            </button>

        </div>
    )
};

export default Form