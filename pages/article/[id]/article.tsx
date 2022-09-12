import Loader from '@/components/Loader/Loader'
import { formatDateFrom } from '@/lib/utils'
import Link from 'node_modules/next/link'
import { useRouter } from 'node_modules/next/router'
import useSWR from 'node_modules/swr/dist/index'
import { useEffect, useState } from 'react'
import styles from './article.module.scss'

export default function Article(): JSX.Element {
  const router = useRouter()
  const id = router.query.id as any
  const { data, error } = useSWR(
    `/api/article/${encodeURIComponent(id)}`,
    (apiURL: string) => fetch(apiURL).then((res) => res.json())
  )
  const [content, setContent]: any = useState()

  useEffect(() => {
    if (data) {
      console.log(data)
      setContent(data.response.content)
    }
  }, [data])

  return (
    <div>
      {!data && <Loader />}

      {error && <p>Error fetching article!</p>}

      <div className={styles['wrapper']}>
        {content && (
          <>
            <div className={styles['article']}>
              <span className={styles.section}>{content.sectionName}</span>
              <h1 className={styles['title']}>{content.fields.headline}</h1>
              {content.fields.main && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: content.fields.main
                  }}></div>
              )}
              <h3
                className={styles['trail-text']}
                dangerouslySetInnerHTML={{
                  __html: content.fields.trailText
                }}></h3>
              <div className={styles['byline']}>
                {content.fields.byline && (
                  <>
                    <span className={styles['author']}>
                      {content.fields.byline}
                    </span>
                    <span className={styles.separator}>|</span>
                  </>
                )}
                <span className={styles['date']}>
                  {formatDateFrom(content.webPublicationDate)}
                </span>
              </div>
              <div
                className={styles['body']}
                dangerouslySetInnerHTML={{ __html: content.fields.body }}></div>
            </div>
            <div className={styles['the-guardian-link']}>
              Read this article on The Guardian:{' '}
              <Link href={content.fields.shortUrl}>
                <a target="_blank">{content.fields.shortUrl}</a>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
