import Head from 'next/head'
import { metadata } from "../data/meta"
import { useAppSelector } from '@/hooks/useRedux'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'

interface MainLayoutProps {
    title?: string,
    description?: string
    children: React.ReactNode;
    errorPage?: boolean
}

export const MainLayout = ({
    children,
    title = metadata.main.title,
    description = metadata.main.description,
    errorPage = false
}: MainLayoutProps) => {
    const { theme } = useAppSelector(state => state.global)
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="title" content={title} />
                <meta name="description" content={description} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={process.env.PUBLIC_META_URL} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={`${process.env.PUBLIC_META_URL}meta_media/media.jpg`} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={process.env.PUBLIC_META_URL} />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image" content={`${process.env.PUBLIC_META_URL}meta_media/media.jpg`} />

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>
            <main data-theme={theme}>
                {errorPage ? false : <Header />}
                <section>
                    {children}
                </section>
                {errorPage ? false : <Footer />}
            </main>
        </>
    )
}
