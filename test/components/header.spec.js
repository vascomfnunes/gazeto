import { render, screen } from '@testing-library/react'
import Header from '../../components/Header/Header'
import '@testing-library/jest-dom'

describe('Header', () => {
  it('should render', () => {
    const component = render(<Header />)
    expect(component).toBeTruthy()
    expect(screen.getByText('Gazeto')).toBeInTheDocument()
  })
})
