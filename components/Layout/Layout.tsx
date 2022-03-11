import { Fragment, ReactNode, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { select } from '../../store/select';
import Background from '../Background';
import Header from './Header';
import classes from './Layout.module.sass'

interface LayoutProps {
    children: ReactNode
}

function Layout ({ children } : LayoutProps) {

    const showCarousel = useSelector(select.view.showCarousel);

    const getClass = () => {
        return showCarousel ? [classes.main, classes.space].join(" ") : classes.main
    }

    return (
        <Fragment>
            <Background />
            <Header />
            <main className={getClass()} >
                {children}
            </main>
            <footer>
                Footer
            </footer>
        </Fragment>
    )
};

export default Layout;
