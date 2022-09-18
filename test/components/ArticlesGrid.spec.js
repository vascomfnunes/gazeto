import { render, screen } from '@testing-library/react'
import ArticlesGrid from '../../components/ArticlesGrid/ArticlesGrid'
import '@testing-library/jest-dom'

describe('ArticlesGrid', () => {
  let component
  const articles = [
    {
      apiUrl: 'https://some-url',
      fields: {
        headline: 'Test headline',
        thumbnail: 'some_image.jpg',
        title: 'Test title',
        trailText: 'Testing trail text'
      }
    }
  ]

  beforeEach(() => {
    component = render(<ArticlesGrid articles={articles} />)
  })

  it('should render', () => {
    expect(component).toBeTruthy()
  })

  it('should render article headline', () => {
    expect(screen.getByTestId('article-headline')).toBeInTheDocument()
  })
})
