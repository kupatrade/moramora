import Link from 'next/link'
import { MainLayout } from "../layouts/MainLayout"
import { ContentContainer } from '@/components/Container/ContentContaeiner'
import styles from "../styles/error.module.scss"

export default function Main() {
    return (
        <MainLayout
            errorPage={true}
            title="404 | Not Found"
        >
            <ContentContainer>
                <div className={styles.error_container}>
                    <div className={styles.number_box}>
                        <p>40</p>
                        <p>4</p>
                    </div>
                    <p className={styles.not_found}>Page not found</p>
                    <Link href="/">
                        <button>Go home</button>
                    </Link>
                </div>
            </ContentContainer>
            <style jsx global>
                {`
                main {
                    grid-template-rows: 100%;
                }
                [class*="container_content_container"] {
                    padding: 50px;
                    min-height: 100%;
                    display: grid;
                    grid-template-columns: 100%;
                    justify-items: center;
                }
                `}
            </style>
        </MainLayout>
    )
}
