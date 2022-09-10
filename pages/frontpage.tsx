import useSWR from '../node_modules/swr/dist/index'
import Header from '../components/Header/Header'
import ArticlesGrid from '../components/ArticlesGrid/ArticlesGrid'
import styles from './frontpage.module.scss'
import Link from '../node_modules/next/link'

export default function Home(): JSX.Element {
  const { data, error } = useSWR('/api/sections', (apiURL: string) =>
    fetch(apiURL).then((res) => res.json())
  )

  return (
    <div>
      <Header />

      {!data && <p>Loading the front page...</p>}

      {error && <p>Error fetching the front page!</p>}

      {data &&
        Object.keys(data).map((key, index) => {
          return (
            <div key={index}>
              <div className={styles['section-title']}>
                <Link
                  href={`/section/${
                    data[key][0].sectionId
                  }?sectionName=${encodeURIComponent(key)}`}
                  key={index}>
                  <a>{key}</a>
                </Link>
              </div>
              <ArticlesGrid articles={data[key]} />
            </div>
          )
        })}
    </div>
  )
}
