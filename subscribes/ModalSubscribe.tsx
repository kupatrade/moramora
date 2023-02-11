import { useAppSelector } from '../hooks/useRedux';
import { Menu } from '@/components/Menu/Menu';
type Props = {
    children: JSX.Element | JSX.Element[]
}

export const ModalSubscribe: React.FC<Props> = ({ children }) => {
    const { navbar } = useAppSelector((state) => state.global)
    return (
        <>
            {children}
            {navbar ? <Menu /> : false}
        </>)
}