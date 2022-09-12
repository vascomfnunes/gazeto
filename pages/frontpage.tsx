import ArticlesGrid from 'components/ArticlesGrid/ArticlesGrid'
import Loader from 'components/Loader/Loader'
import Link from 'node_modules/next/link'
import useSWR from 'node_modules/swr/dist/index'
import styles from './frontpage.module.scss'

export default function Home(): JSX.Element {
  const { data, error } = useSWR('/api/sections', (apiURL: string) =>
    fetch(apiURL).then((res) => res.json())
  )

  return (
    <>
      <div>
        {!data && <Loader />}

        {error && <p>Error fetching the front page!</p>}

        {data &&
          Object.keys(data).map((key, index) => {
            return (
              <div key={index}>
                <div className={styles['section-title']}>
                  <Link
                    href={`/section/${
                      data[key][0].sectionId
                    }?sectionName=${encodeURIComponent(data[key][0].sectionName)}`}
                    key={index}>
                    <a>{data[key][0].sectionName}</a>
                  </Link>
                </div>
                <ArticlesGrid articles={data[key]} limit={6} />
              </div>
            )
          })}
      </div>
    </>
  )
}
