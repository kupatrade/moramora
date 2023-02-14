import { MainLayout } from "../layouts/MainLayout"
import { ContentContainer } from '@/components/Container/ContentContaeiner'
import { PaddingContainer } from '@/components/PaddingContainer/PaddingContainer'
import styles from "../styles/home.module.scss"

export default function Main() {
  return (
    <MainLayout>
      <PaddingContainer>
        <ContentContainer>
          Main
        </ContentContainer>
      </PaddingContainer>
    </MainLayout>
  )
}
