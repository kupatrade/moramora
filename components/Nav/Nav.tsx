import Link from 'next/link'
import { Inav } from '@/interfaces/interface'
import { useRouter } from 'next/router'

interface NavProps {
    data: Inav[],
    preKey: string,
    header?: boolean
}

export const Nav = ({ data, preKey, header = false }: NavProps) => {
    const router = useRouter()
    return (
        <nav>
            {data.map(i => (
                <div data-active={i.url === router.pathname ? "active" : ""} key={`${preKey}${i.url}`}>
                    <Link href={i.url}>{i.title}</Link>
                    {header ? (
                        <span>
                            <Link href={i.url}>{i.title}</Link>
                        </span>
                    ) : false}
                </div>
            ))}
        </nav>
    )
}