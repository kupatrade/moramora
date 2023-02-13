import { useEffect, useState } from "react"
import { useSubmitDataFormMutation } from "@/redux_toolkit/api/api"
import { useTranslation } from "react-i18next"
import styles from "../../styles/form.module.scss"

type ChangeDataType = "name" | "phone" | "email" | "mess"
type SendBtnType = "send" | "succsess" | "error"

export const Form = () => {
    const [name, setName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [mess, setMess] = useState<string>("")
    const [notValid, setNotValid] = useState<boolean>(false)
    const [formSubmit, { isLoading, isError, isSuccess }] = useSubmitDataFormMutation()
    const [sendBtn, setSendBtn] = useState<SendBtnType>("send")
    const { t } = useTranslation()

    const changeTypeBtn = (p: SendBtnType) => {
        setSendBtn(p)
        setTimeout(() => {
            setSendBtn("send")
        }, 3000)
    }

    const changeData = (p: ChangeDataType, val: string): void => {
        setNotValid(false)
        setSendBtn("send")
        switch (p) {
            case "name":
                setName(val)
                break;
            case "phone":
                setPhone(val)
                break;
            case "email":
                setEmail(val)
                break;
            default:
                setMess(val)
                break;
        }
    }
    const clearForm = (): void => {
        setName(""), setPhone(""), setEmail(""), setMess(""), setNotValid(false)
    }
    const submit = (): void => {
        if (!phone && !email) {
            setNotValid(true)
            return
        }
        formSubmit({
            name: name,
            phone: phone,
            email: email,
            message: mess
        })
    }

    useEffect(() => {
        if (isSuccess) {
            clearForm()
            changeTypeBtn("succsess")
        }
    }, [isSuccess])
    useEffect(() => {
        if (isError) {
            changeTypeBtn("error")
        }
    }, [isError])

    return (
        <div style={{ width: "100%" }} data-type-btn={sendBtn} data-in={isLoading}>
            <div id="contact-form" className={styles.form_box}>
                <div className={styles.form}>
                    <div className={`${styles.input_container}`}>
                        <input
                            disabled={isLoading}
                            value={name}
                            onChange={e => changeData("name", e.target.value)}
                            className={styles.input} type="text" placeholder=" " />
                        <div className={styles.cut}></div>
                        <label className={styles.placeholder}>{t("form.name")}</label>
                    </div>
                    <div className={`${styles.input_container}`}>
                        <input
                            disabled={isLoading}
                            value={phone}
                            onChange={e => changeData("phone", e.target.value)}
                            className={styles.input} type="number" placeholder=" " />
                        <div className={styles.cut}></div>
                        <label className={styles.placeholder}>{t("form.phone")}</label>
                    </div>
                    <div className={`${styles.input_container}`}>
                        <input
                            disabled={isLoading}
                            value={email}
                            onChange={e => changeData("email", e.target.value)}
                            className={styles.input} type="email" placeholder=" " />
                        <div className={styles.cut}></div>
                        <label className={styles.placeholder}>{t("form.email")}</label>
                    </div>
                    <div className={`${styles.input_container}`}>
                        <input
                            disabled={isLoading}
                            value={mess}
                            onChange={e => changeData("mess", e.target.value)}
                            className={styles.input} type="text" placeholder=" " />
                        <div className={styles.cut}></div>
                        <label className={styles.placeholder}>{t("form.message")}</label>
                    </div>
                </div>
                <p style={{ opacity: notValid ? 1 : 0 }} className={styles.warn}>{t("form.valid")}</p>
                <div className={styles.btn_box}>
                    <button disabled={isLoading} onClick={clearForm} className={styles.clear_btn}>{t("form.clear")}</button>
                    <div className={styles.send_btn_container}>
                        <button disabled={isLoading} className={styles.succsess_btn}>
                            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5L5 9L13 1" stroke="#121212" strokeWidth="1.5" />
                            </svg>
                            <p>{t("form.sent")}</p>
                        </button>
                        <button disabled={isLoading} onClick={submit} className={styles.send_btn}>
                            <p>{t("form.send")}</p>
                            <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z" fill="#FAFAFA" />
                            </svg>
                        </button>
                        <button disabled={isLoading} className={styles.error_btn}>
                            <p>{t("form.error")}</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}