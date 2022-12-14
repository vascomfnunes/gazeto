/* eslint-disable @next/next/no-img-element */
import Image from 'node_modules/next/image'
import Link from 'node_modules/next/link'
import Masonry from 'node_modules/react-smart-masonry'
import { FunctionComponent, useEffect, useState } from 'react'
import styles from './ArticlesGrid.module.scss'

interface IProps {
  articles: any
  limit?: number
}

const breakpoints = { mobile: 376, tablet: 593, desktop: 890 }

const ArticlesGrid: FunctionComponent<IProps> = (props) => {
  const [ready, setReady] = useState(false)

  // Set already read articles from local storage
  useEffect(() => {
    props.articles.forEach(function (article: any) {
      article.read = localStorage.getItem(article.id) === 'true'
    })

    setReady(true)
  }, [props.articles])

  /**
   *  Replaces low resolution image
   * @param image - image URL
   * @returns
   */
  const getImage = (image: string) => {
    if (!image) return undefined

    return image.replace('500.jpg', '1000.jpg')
  }

  return (
    <>
      <div className={styles['masonry']}>
        <Masonry
          breakpoints={breakpoints}
          columns={{ mobile: 2, tablet: 2, desktop: 3 }}
          autoArrange
          gap={24}>
          {ready &&
            props.articles.map(
              (article: any, index: number) =>
                props.limit > index && (
                  <Link
                    key={index}
                    href={`/article/${encodeURIComponent(article.apiUrl)}`}>
                    <div className={article.read ? styles['read'] : ''}>
                      <div className={styles['article']}>
                        {getImage(article.fields.thumbnail) && (
                          <div className={styles['img-container']}>
                            <Image
                              src={article.fields.thumbnail.replace(
                                '500.jpg',
                                '1000.jpg'
                              )}
                              alt={article.fields.headline}
                              className={styles['article-img']}
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center"
                              priority
                              unoptimized
                            />
                          </div>
                        )}
                        <h2
                          data-testid="article-headline"
                          className={styles['title']}>
                          {article.fields.headline}
                        </h2>
                      </div>
                    </div>
                  </Link>
                )
            )}
        </Masonry>
      </div>

      {props.limit < 50 && props.articles.length > props.limit && (
        <div className={styles['more-on']}>
          <Link
            href={`/section/${
              props.articles[0].sectionId
            }?sectionName=${encodeURIComponent(
              props.articles[0].sectionName
            )}`}>
            <a>More {props.articles[0].sectionName} &gt;</a>
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
