import Link from 'next/link'
import { MainLayout } from "../layouts/MainLayout"

export default function Main() {
  return (
    <MainLayout>
      <div>
        <Link href="/about">About</Link>
        <Link href="/team">Team</Link>
        <Link href="/activity">Activity</Link>
        <Link href="/contacts">Contacts</Link>
      </div>
    </MainLayout>
  )
}
