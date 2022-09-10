import Image from '../../node_modules/next/image'
import Link from '../../node_modules/next/link'
import styles from './ArticlesGrid.module.scss'

export default function ArticlesGrid(props: { articles: any }): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      {props.articles &&
        props.articles.map((article: any, index: number) => (
          <Link
            key={index}
            href={`/article/${encodeURIComponent(article.apiUrl)}`}>
            <div className={styles['article']}>
              <h2 className={styles['title']}>{article.fields.headline}</h2>
              <div>
                <Image
                  src={article.fields.thumbnail}
                  alt={article.headline}
                  width="250"
                  height="150"
                  layout="responsive"></Image>
                <p className={styles['trail-text']}>
                  {article.fields.trailText}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
