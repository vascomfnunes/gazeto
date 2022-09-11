import Link from 'node_modules/next/link'
import Image from 'node_modules/next/image'
import styles from './ArticlesGrid.module.scss'
import { FunctionComponent } from 'react'

interface IProps {
  articles: any
  limit?: number
}

const ArticlesGrid: FunctionComponent<IProps> = (props) => {
  return (
    <>
      <div className={styles['wrapper']}>
        {props.articles &&
          props.articles.map(
            (article: any, index: number) =>
              props.limit > index && (
                <Link
                  key={index}
                  href={`/article/${encodeURIComponent(article.apiUrl)}`}>
                  <div className={styles['article']}>
                    <h2 className={styles['title']}>
                      {article.fields.headline}
                    </h2>
                    <div>
                      <Image
                        src={article.fields.thumbnail}
                        alt={article.headline}
                        width="250"
                        height="150"
                        layout="responsive"></Image>
                      <div
                        className={styles['trail-text']}
                        dangerouslySetInnerHTML={{
                          __html: article.fields.trailText
                        }}></div>
                    </div>
                  </div>
                </Link>
              )
          )}
      </div>

      {props.articles.length > props.limit && (
        <div className={styles['more-on']}>
          <Link
            href={`/section/${
              props.articles[0].sectionId
            }?sectionName=${encodeURIComponent(
              props.articles[0].sectionName
            )}`}>
            <a>More on {props.articles[0].sectionName} &gt;</a>
          </Link>
        </div>
      )}
    </>
  )
}

ArticlesGrid.defaultProps = {
  limit: 50
}

export default ArticlesGrid
