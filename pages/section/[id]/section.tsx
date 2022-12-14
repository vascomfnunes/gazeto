import ArticlesGrid from 'components/ArticlesGrid/ArticlesGrid'
import Loader from 'components/Loader/Loader'
import { fetcher } from 'lib/api'
import { useRouter } from 'node_modules/next/router'
import useSWR from 'node_modules/swr/dist/index'
import styles from './section.module.scss'

export default function Section(): JSX.Element {
  const router = useRouter()
  const id = router.query.id as string
  const { data, error } = useSWR(`/api/section/${id}`, fetcher)

  return (
    <div>
      <div className={styles['section-title']}>{router.query.sectionName}</div>
      {!data && <Loader />}
      {error && <p>Error fetching articles!</p>}
      {data && <ArticlesGrid articles={data} />}
    </div>
  )
}
