import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
import { MainLayout } from "../layouts/MainLayout"
import { ContentContainer } from "@/components/Container/ContentContaeiner"
import { PaddingContainer } from "@/components/PaddingContainer/PaddingContainer"
import { GenInTouch } from "@/components/GetInTouch/GetInTouch"
import { DarkContainer } from "@/components/DarkContainer/DarkContainer"
import { Line } from "@/components/Line/Line"
import { useTranslation } from "react-i18next"
import { useObserverElement } from "@/hooks/useObserverElement"
import { StartScreen } from "@/components/StartScreen/StartScreen"
import { useDeviceDetect } from "@/hooks/useDeviceDetect"
import styles from "../styles/home.module.scss"

import img1 from "../public/photo/photo6.jpg"
import img2 from "../public/photo/photo5.jpg"
import img3 from "../public/photo/photo4_600_300.jpg"


export default function Main() {
  const { t } = useTranslation()
  const { ref: mainBlockRef, isInView: isVideoView } = useObserverElement<HTMLDivElement>(false, true)
  const { ref: changeBackgroundRef, isInView: isChangeBackgroundView } = useObserverElement<HTMLDivElement>(false)
  const [darkLight, setDarkLight] = useState<boolean>(false)

  useEffect(() => setDarkLight(isChangeBackgroundView), [isChangeBackgroundView])
  return (
    <MainLayout headerTransparent={isVideoView}>
      <div className={styles.main_anime_container} ref={mainBlockRef}>
        <StartScreen />
        <h1>{t("home.animeMainText")}</h1>
      </div>
      <PaddingContainer>
        <DarkContainer light>
          <ContentContainer>
            <Line title={t("home.label1")} />
            <p className={styles.description_white_text}>{t("home.descriptionWhiteBlock")}</p>
          </ContentContainer>
        </DarkContainer>
        <DarkContainer light={darkLight}>
          <ContentContainer>
            <Line dark={!darkLight} title={t("home.label2")} />
            <div dark-dark-style={darkLight.toString()} style={{ width: "100%" }}>
              <div className={styles.home_what_container}>
                <div className={styles.home_what_box}>
                  <div className={styles.home_what_text}>
                    <p className={styles.home_what_title}>{t("home.whatBox1.title")}</p>
                    <p className={styles.home_what_description}>{t("home.whatBox1.description")}</p>
                    <button className={styles.home_what_btn}>
                      <Link href={"/what-we-do"}>
                        <p>{t("home.btnNext")}</p>
                      </Link>
                      <svg className={styles.home_what_svg} width="21" height="8" viewBox="0 0 21 8" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z" fill="#FAFAFA" />
                      </svg>
                    </button>
                  </div>
                  <div className={styles.image_container}>
                    <Image
                      sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
                      placeholder="blur" loading="lazy" src={img1} alt="picture" />
                  </div>
                </div>
                <div className={styles.home_what_box}>
                  <div className={styles.home_what_text}>
                    <p className={styles.home_what_title}>{t("home.whatBox2.title")}</p>
                    <div ref={changeBackgroundRef} ></div>
                    <p className={styles.home_what_description}>{t("home.whatBox2.description")}</p>
                    <button className={styles.home_what_btn}>
                      <Link href={"/what-we-do"}>
                        <p>{t("home.btnNext")}</p>
                      </Link>
                      <svg className={styles.home_what_svg} width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z" fill="#FAFAFA" />
                      </svg>
                    </button>
                  </div>
                  <div className={styles.image_container}>
                    <Image
                      sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     33vw"
                      placeholder="blur" loading="lazy" src={img2} alt="picture" />
                  </div>
                </div>
                <div className={styles.home_what_box}>
                  <div className={styles.home_what_text}>
                    <p className={styles.home_what_title}>{t("home.whatBox3.title")}</p>
                    <p className={styles.home_what_description}>{t("home.whatBox3.description")}</p>
                    <button className={styles.home_what_btn}>
                      <Link href={"/what-we-do"}>
                        <p>{t("home.btnNext")}</p>
                      </Link>
                      <svg className={styles.home_what_svg} width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z" fill="#FAFAFA" />
                      </svg>
                    </button>
                  </div>
                  <div className={styles.image_container}>
                    <Image
                      sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     33vw"
                      placeholder="blur" loading="lazy" src={img3} alt="picture" />
                  </div>
                </div>
              </div>
            </div>
          </ContentContainer>
        </DarkContainer>
        <ContentContainer>
          <GenInTouch />
        </ContentContainer>
      </PaddingContainer>
      <style jsx global>
        {`
        header{
          position: fixed; 
        }
        `}
      </style>
    </MainLayout>
  )
}