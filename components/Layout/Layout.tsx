import { ReactElement, ReactChild, Fragment, ReactComponentElement, ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode
}

function Layout ({ children } : LayoutProps) {
    return (
        <Fragment>
            <header>
                Header
            </header>
            <main>
                {children}
            </main>
            <footer>
                Footer
            </footer>
        </Fragment>
    )
};

export default Layout;
