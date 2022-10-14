import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import Header from '@components/Header';
import Script from 'next/script';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();

  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-QFLEXH0CN9" strategy="afterInteractive"></Script>
		<Script id="google-analytics" strategy="afterInteractive">
				{`
        window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-QFLEXH0CN9');
        `}
				</Script>
      <AppContext.Provider value={initialState} >
        <Header />
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
