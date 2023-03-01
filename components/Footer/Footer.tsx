import { ContentContainer } from "../Container/ContentContaeiner"
import { useNav } from "../../hooks/useNav"
import { Nav } from "../Nav/Nav"
import { useTranslation } from "react-i18next"
import styles from "../../styles/footer.module.scss"

export const Footer = () => {
    const navdata = useNav({ hidden: false })
    const { t } = useTranslation()
    return (
        <footer className={styles.footer} >
            <ContentContainer>
                <div className={styles.address}>
                    <svg className={styles.another_logo} width="604" height="81" viewBox="0 0 604 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_133_262" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="604" height="81">
                            <path d="M567.28 52.4404L598.28 52.4404L603.28 60.8428H567.28V52.4404Z" fill="black" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 79.44V0H10.44L38.88 37.68L66.84 0H77.28V79.44H68.28V13.68L38.88 51.48L9 13.68V79.44H0ZM123.8 80.16C117.48 80.16 111.8 78.72 106.76 75.84C101.8 72.88 97.8797 68.88 94.9997 63.84C94.3706 62.7391 93.8102 61.6058 93.3186 60.44H103.225C105.247 63.6899 107.905 66.3032 111.2 68.28C114.8 70.36 119 71.4 123.8 71.4C128.52 71.4 132.68 70.36 136.28 68.28C139.648 66.3032 142.345 63.6899 144.373 60.44H154.401C153.909 61.6058 153.349 62.7391 152.72 63.84C149.84 68.88 145.88 72.88 140.84 75.84C135.88 78.72 130.2 80.16 123.8 80.16ZM156.624 52.44C156.901 50.5854 157.04 48.6655 157.04 46.68C157.04 40.28 155.6 34.56 152.72 29.52C149.84 24.48 145.88 20.52 140.84 17.64C135.88 14.68 130.2 13.2 123.8 13.2C117.48 13.2 111.8 14.68 106.76 17.64C101.8 20.52 97.8797 24.48 94.9997 29.52C92.1197 34.56 90.6797 40.28 90.6797 46.68C90.6797 48.6655 90.8183 50.5854 91.0954 52.44H100.206C99.8553 50.6113 99.6797 48.6913 99.6797 46.68C99.6797 41.8 100.68 37.52 102.68 33.84C104.76 30.16 107.6 27.28 111.2 25.2C114.8 23.04 119 21.96 123.8 21.96C128.52 21.88 132.68 22.92 136.28 25.08C139.96 27.16 142.84 30.08 144.92 33.84C147 37.52 148.04 41.8 148.04 46.68C148.04 48.6913 147.857 50.6113 147.492 52.44H156.624ZM168.588 79.44V13.92H199.908C206.628 13.92 212.028 15.84 216.108 19.68C220.188 23.44 222.228 28.48 222.228 34.8C222.228 44.64 217.268 50.84 207.348 53.4L224.268 79.44H213.588L198.228 54.96H177.588V79.44H168.588ZM177.588 46.32H198.588C203.148 46.32 206.708 45.32 209.268 43.32C211.908 41.32 213.228 38.48 213.228 34.8C213.228 31.04 211.908 28.08 209.268 25.92C206.708 23.68 203.268 22.56 198.948 22.56H177.588V46.32ZM227.708 79.44L255.428 13.92H265.628L293.348 79.44H283.388L275.707 60.84H257.833L262.28 52.44H272.108L260.467 24.72L248.827 52.44H248.819L245.303 60.94H245.306L237.548 79.44H227.708ZM303.281 79.44V0H313.721L342.161 37.68L370.121 0H380.561V79.44H371.561V13.68L342.161 51.48L312.281 13.68V79.44H303.281ZM427.081 80.16C420.761 80.16 415.081 78.72 410.041 75.84C405.081 72.88 401.161 68.88 398.281 63.84C397.652 62.7391 397.091 61.6058 396.6 60.44H406.507C408.528 63.6899 411.186 66.3032 414.481 68.28C418.081 70.36 422.281 71.4 427.081 71.4C431.801 71.4 435.961 70.36 439.561 68.28C442.929 66.3032 445.627 63.6899 447.654 60.44H457.682C457.19 61.6058 456.63 62.7391 456.001 63.84C453.121 68.88 449.161 72.88 444.121 75.84C439.161 78.72 433.481 80.16 427.081 80.16ZM393.961 46.68C393.961 48.6655 394.1 50.5854 394.377 52.44H403.488C403.137 50.6113 402.961 48.6913 402.961 46.68C402.961 41.8 403.961 37.52 405.961 33.84C408.041 30.16 410.881 27.28 414.481 25.2C418.081 23.04 422.281 21.96 427.081 21.96C431.801 21.88 435.961 22.92 439.561 25.08C443.241 27.16 446.121 30.08 448.201 33.84C450.281 37.52 451.321 41.8 451.321 46.68C451.321 48.6913 451.138 50.6113 450.773 52.44H459.905C460.182 50.5854 460.321 48.6655 460.321 46.68C460.321 40.28 458.881 34.56 456.001 29.52C453.121 24.48 449.161 20.52 444.121 17.64C439.161 14.68 433.481 13.2 427.081 13.2C420.761 13.2 415.081 14.68 410.041 17.64C405.081 20.52 401.161 24.48 398.281 29.52C395.401 34.56 393.961 40.28 393.961 46.68ZM471.869 79.44V13.92H503.189C509.909 13.92 515.309 15.84 519.389 19.68C523.469 23.44 525.509 28.48 525.509 34.8C525.509 44.64 520.549 50.84 510.629 53.4L527.549 79.44H516.869L501.509 54.96H480.869V79.44H471.869ZM480.869 46.32H501.869C506.429 46.32 509.989 45.32 512.549 43.32C515.189 41.32 516.509 38.48 516.509 34.8C516.509 31.04 515.189 28.08 512.549 25.92C509.989 23.68 506.549 22.56 502.229 22.56H480.869V46.32ZM530.989 79.44L558.709 13.92H568.909L596.629 79.44H586.669L578.989 60.84H560.833L565.28 52.44H575.389L563.749 24.72L552.318 51.9415L552.28 51.94L547.28 63.94L547.334 63.9281L540.829 79.44H530.989Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_133_262)">
                            <rect x="-17" y="-28" width="314" height="135" fill="url(#paint0_linear_133_262)" />
                            <rect x="302" y="-28" width="311" height="135" fill="url(#paint1_linear_133_262)" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_133_262" x1="-17" y1="40" x2="297" y2="40" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#42424F" />
                                <stop offset="1" stopColor="#5C021E" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_133_262" x1="302" y1="40" x2="613" y2="40" gradientUnits="userSpaceOnUse">
                                <stop offset="0.078125" stopColor="#FBEBD4" />
                                <stop offset="1" stopColor="#42424F" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className={styles.adress_box}>
                        <div className={styles.adress_container}>
                            <p>{t("footer.adress.pl.country")}</p>
                            <p>{t("footer.adress.pl.street")}<br />{t("footer.adress.pl.city")}</p>
                        </div>
                        <div className={styles.adress_container}>
                            <p>{t("footer.adress.bel.country")}</p>
                            <p>{t("footer.adress.bel.street")}<br />{t("footer.adress.bel.city")}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.btn_bottom_container}>
                    <Nav preKey="footer" data={navdata} />
                    <p>Copyright © 2023 MoraMora. All rights reserved</p>
                </div>
            </ContentContainer>
        </footer>
    )
}