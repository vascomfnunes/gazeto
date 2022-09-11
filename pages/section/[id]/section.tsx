import ArticlesGrid from '@/components/ArticlesGrid/ArticlesGrid'
import Header from '@/components/Header/Header'
import Loader from '@/components/Loader/Loader'
import { useRouter } from 'node_modules/next/router'
import useSWR from 'node_modules/swr/dist/index'
import styles from './section.module.scss'

export default function Section(): JSX.Element {
  const router = useRouter()
  const id = router.query.id as string
  const { data, error } = useSWR(`/api/section/${id}`, (apiURL: string) =>
    fetch(apiURL).then((res) => res.json())
  )

  return (
    <div>
      <Header />
      <div className={styles['section-title']}>{router.query.sectionName}</div>
      {!data && <Loader />}
      {error && <p>Error fetching articles!</p>}
      {data && <ArticlesGrid articles={data.response.results} />}
    </div>
  )
}
