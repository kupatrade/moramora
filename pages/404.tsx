import Link from 'next/link'
import { MainLayout } from "../layouts/MainLayout"
import { ContentContainer } from '@/components/Container/ContentContaeiner'

export default function Main() {
    return (
        <MainLayout>
            <ContentContainer>
                <div>
                    404 Not Found!!!
                </div>
            </ContentContainer>
        </MainLayout>
    )
}
