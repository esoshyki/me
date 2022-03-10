import { Fragment, ReactNode } from 'react'
import Header from './Header';
import classes from './Layout.module.sass'

interface LayoutProps {
    children: ReactNode
}

function Layout ({ children } : LayoutProps) {
    return (
        <Fragment>
            <Header />
            <main className={classes.main} >
                {children}
            </main>
            <footer>
                Footer
            </footer>
        </Fragment>
    )
};

export default Layout;
