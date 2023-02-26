import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html lang="en" style={{ scrollBehavior: 'smooth' }}>
            <Head />
            <body>
                <Main />
                <NextScript />
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-962TK6RKF6"></Script>
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-962TK6RKF6');
                   `}
                </Script>
            </body>
        </Html>
    )
}
