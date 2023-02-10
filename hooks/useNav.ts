import { useTranslation } from "react-i18next"
import { Inav } from "@/interfaces/interface"

interface UseNavProps {
    hidden?: boolean
}

export const useNav = ({ hidden = false }: UseNavProps): Inav[] => {
    const { t } = useTranslation()
    const navData: Inav[] = [
        {
            title: t("nav.home"),
            hidden: false,
            url: "/"
        },
        {
            title: t("nav.team"),
            hidden: false,
            url: "/team"
        },
        {
            title: t("nav.whatWeDo"),
            hidden: false,
            url: "/what-we-do"
        },
        {
            title: t("nav.about"),
            hidden: false,
            url: "/about"
        },
        {
            title: t("nav.contacts"),
            hidden: false,
            url: "/contacts"
        },
    ]
    return hidden ? navData.filter(i => !i.hidden) : navData
}