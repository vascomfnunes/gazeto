import { todayFormattedDate } from 'lib/utils'
import Link from 'node_modules/next/link'
import styles from './Header.module.scss'

export default function Header(): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['logos']}>
        <Link href="/">
          <a className={styles['title']}>Gazeto</a>
        </Link>
      </div>
      <div className={styles['edition']}>
        UK Edition for {todayFormattedDate()}
      </div>
    </div>
  )
}
