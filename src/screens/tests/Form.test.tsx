import React from 'react'

import { render } from '@testing-library/react'
import Form from '../Form'
jest.mock('react-router-dom', () => ({
  useParams: () => ({
    id: 1,
  }),
}))
const init = () => render(<Form />)

describe('My Form component', () => {
  test('should render form 1 ', () => {
    const { container } = init()
    expect(container).toMatchSnapshot()
  })
})
