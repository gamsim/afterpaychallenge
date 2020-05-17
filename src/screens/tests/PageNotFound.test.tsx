import React from 'react'

import { render } from '@testing-library/react'
import PageNotFound from '../PageNotFound'

const init = () => render(<PageNotFound />)

describe('My Page Not Found component', () => {
  test('should render', () => {
    const { container } = init()
    expect(container).toMatchSnapshot()
  })
})
