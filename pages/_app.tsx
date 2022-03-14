import "../styles/globals.sass";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Audio from "../components/Audio";
import { Provider } from "react-redux";
import { store } from "../store";
import { appWithTranslation } from 'next-i18next';
import Background from "../components/Background";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Background />
    	<Layout>
        	<Audio />
        	<Component {...pageProps} />
      	</Layout>
    </Provider>
  );
}

export default appWithTranslation(MyApp);
