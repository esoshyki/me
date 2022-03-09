import type { NextPage } from 'next'
import { useEffect } from 'react'
import { theme } from '../theme'

interface HomePageProps {
    message?: string,
}

const Home: NextPage<HomePageProps> = ({
    message,
}: HomePageProps) => {

    useEffect(() => {

    }, [message])

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
            {!!message && message}
        </div>
    )
}

export default Home

export const getStaticProps = async () => {

    const message = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Message")
        }, 3000)
    });

    return {
        props: {
            message
        }
    };

}
