import React from 'react'

import { render } from '@testing-library/react'
import Menu from '../Menu'
jest.mock('react-router-dom', () => ({
  useParams: () => ({
    id: 1,
  }),
}))
const init = () => render(<Menu />)

describe('My Menu component', () => {
  test('should render menu 1 ', () => {
    const { container } = init()
    expect(container).toMatchSnapshot()
  })
})
