import Link from 'next/link'
import { MainLayout } from "../layouts/MainLayout"
import { ContentContainer } from '@/components/Container/ContentContaeiner'
import { PaddingContainer } from '@/components/PaddingContainer/PaddingContainer'
import { useObserverElement } from '@/hooks/useObserverElement'
import styles from "../styles/home.module.scss"

export default function Main() {
  const { ref, isInView } = useObserverElement<HTMLDivElement>()
  const { ref: ref1, isInView: isInView1 } = useObserverElement<HTMLDivElement>()
  const { ref: ref3, isInView: isInView3 } = useObserverElement<HTMLDivElement>()
  const { ref: ref4, isInView: isInView4 } = useObserverElement<HTMLDivElement>()
  const { ref: ref5, isInView: isInView5 } = useObserverElement<HTMLDivElement>()
  // const { ref: ref6, isInView: isInView6 } = useObserverElement<HTMLDivElement>()
  return (
    <MainLayout>
      <PaddingContainer>
        <ContentContainer>
          <div className={styles.box_container}>
            <div ref={ref} className={`${styles.box} ${isInView && styles.box_anime}`}></div>
            <div ref={ref1} className={`${styles.box} ${isInView1 && styles.box_anime}`}></div>
            <div ref={ref3} className={`${styles.box} ${isInView3 && styles.box_anime}`}></div>
            <div ref={ref4} className={`${styles.box} ${isInView4 && styles.box_anime}`}></div>
            <div ref={ref5} className={`${styles.box} ${isInView5 && styles.box_anime}`}></div>
            {/* <div ref={ref6} className={`${styles.box} ${isInView6 && styles.box_anime}`}></div> */}
            <Test />
          </div>
        </ContentContainer>
      </PaddingContainer>
    </MainLayout>
  )
}

function Test() {
  const { ref, isInView } = useObserverElement<HTMLDivElement>()
  return <div id={"6"} style={{ background: "green" }} ref={ref} className={`${styles.box} ${isInView && styles.box_anime}`}></div>
}