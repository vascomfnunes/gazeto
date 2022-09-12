/* eslint-disable @next/next/no-img-element */
import Link from 'node_modules/next/link'
import Masonry from 'node_modules/react-smart-masonry'
import { FunctionComponent } from 'react'
import styles from './ArticlesGrid.module.scss'

interface IProps {
  articles: any
  limit?: number
}

const breakpoints = { mobile: 0, tablet: 593, desktop: 890 }

const ArticlesGrid: FunctionComponent<IProps> = (props) => {
  return (
    <>
      <div className={styles['masonry']}>
        <Masonry
          breakpoints={breakpoints}
          columns={{ mobile: 1, tablet: 2, desktop: 3 }}
          autoArrange
          gap={24}>
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
                      {article.fields.thumbnail && (
                        <img
                          className={styles['article-img']}
                          alt={article.fields.title}
                          loading="lazy"
                          style={{
                            backgroundImage: `Url(${article.fields.thumbnail})`
                          }}
                        />
                      )}

                      <div
                        className={styles['trail-text']}
                        dangerouslySetInnerHTML={{
                          __html: article.fields.trailText
                        }}></div>
                    </div>
                  </Link>
                )
            )}
        </Masonry>
      </div>

      {props.limit < 50 && props.articles.length >= props.limit && (
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
