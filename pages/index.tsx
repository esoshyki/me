import type { NextPage } from 'next'
import Home from '../screens/home'
import { theme } from '../theme'

const HomePage: NextPage = () => {

   return (
        <div style={{
            fontSize: 30,
            fontWeight: 900,
            color: "#fff",
            width: "100%",
            minHeight: "100vh",
            ...theme.flex(),
            position: "absolute",
            top: 0,
            left: 0
        }}>
            <Home />
        </div>
    )
}

export default HomePage

