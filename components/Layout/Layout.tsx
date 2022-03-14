import { Fragment, ReactNode } from 'react'
import { useSelector } from 'react-redux';
import { select } from '../../store/select';
import Contact from '../Contact';
import Planet from '../Planet';
import Header from './Header';
import classes from './Layout.module.sass'

interface LayoutProps {
    children: ReactNode
}

function Layout ({ children } : LayoutProps) {

    const showContactWrapper = useSelector(select.view.showContactWrapper);

    return (
        <Fragment>
            {showContactWrapper && <Contact />}
            <Header />
            <main className={classes.main} >
                {children}
            </main>
            <footer>
                Footer
            </footer>
            <Planet />
        </Fragment>
    )
};

export default Layout;
