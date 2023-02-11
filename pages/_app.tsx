import { Provider } from "react-redux"
import { store } from "../redux_toolkit/index"
import type { AppProps } from 'next/app'
import { ThemeSubscribe } from "@/subscribes/ThemeSubscribe"
import { LangugesSubscribe } from "@/subscribes/LanguageSubscribe"
import { ModalSubscribe } from "@/subscribes/ModalSubscribe"
import 'leaflet/dist/leaflet.css';
import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeSubscribe>
        <LangugesSubscribe>
          <ModalSubscribe>
            <Component {...pageProps} />
          </ModalSubscribe>
        </LangugesSubscribe>
      </ThemeSubscribe>
    </Provider>
  )
}
