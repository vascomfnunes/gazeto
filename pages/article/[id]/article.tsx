import { useEffect, useState } from 'react'
import Header from '../../../components/Header/Header'
import Image from '../../../node_modules/next/image'
import { useRouter } from '../../../node_modules/next/router'
import useSWR from '../../../node_modules/swr/dist/index'
import styles from './article.module.scss'

export default function Article(): JSX.Element {
  const router = useRouter()
  const id = router.query.id as any
  const { data, error } = useSWR(
    `/api/article/${encodeURIComponent(id)}`,
    (apiURL: string) => fetch(apiURL).then((res) => res.json())
  )
  const [content, setContent]: any = useState()

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-gb', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  useEffect(() => {
    if (data) {
      console.log(data)
      setContent(data.response.content)
    }
  }, [data])

  return (
    <div>
      <Header />

      {!data && <p>Loading article...</p>}

      {error && <p>Error fetching article!</p>}

      <div className={styles['wrapper']}>
        {content && (
          <article>
            <span className={styles.section}>{content.sectionName}</span>
            <h1 className={styles['title']}>{content.fields.headline}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: content.fields.main }}></div>
            <h3
              className={styles['trail-text']}
              dangerouslySetInnerHTML={{
                __html: content.fields.standfirst
              }}></h3>
            <div className={styles['byline']}>
              <span className={styles['author']}>{content.fields.byline}</span>
              <span className={styles.separator}>|</span>
              <span className={styles['date']}>
                {formatDate(content.webPublicationDate)}
              </span>
            </div>
            <div
              className={styles['body']}
              dangerouslySetInnerHTML={{ __html: content.fields.body }}></div>
          </article>
        )}
      </div>
    </div>
  )
}
