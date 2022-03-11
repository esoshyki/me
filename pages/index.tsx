import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { loadavg } from 'os'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Locales } from '../content/locales'
import Home from '../screens/Home'
import { select } from '../store/select'
import { setLocale } from '../store/view/view.actions'
import { theme } from '../theme'

const HomePage: NextPage = () => {

    const screen = useSelector(select.view.screen);

    const dispatch = useDispatch();

    const getScreen = () => {
        switch (screen) {
            default:
                return <Home />
        }
    }

    const router = useRouter();

    const locale = router.locale;

    useEffect(() => {
        if (locale === Locales.en || locale === Locales.ru) {
            dispatch(setLocale(locale))
        }
    }, [dispatch, locale])

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
            left: 0,
        }}>
            {getScreen()}
        </div>
    )
}

export default HomePage

