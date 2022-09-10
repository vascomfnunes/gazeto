import { todayFormattedDate } from '@/lib/utils'
import Image from 'node_modules/next/image'
import Link from 'node_modules/next/link'
import styles from './Header.module.scss'

export default function Header(): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['logos']}>
        <Link href="/">
          <a className={styles['title']}>Gazeto</a>
        </Link>
        <Link href="https://theguardian.com">
          <a target="_blank">
            <Image
              src="/poweredbyguardian.png"
              height="30"
              width="100"
              alt="Powered by The Guardian"
            />
          </a>
        </Link>
      </div>
      <div className={styles['edition']}>
        UK Edition for {todayFormattedDate()}
      </div>
    </div>
  )
}
