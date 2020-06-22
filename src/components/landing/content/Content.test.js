import React from 'react'
import { shallow } from 'enzyme'

import Content from '../../components/content/Content'
import WelcomeBox from '../welcome-box/WelcomeBox'

describe('Content', () => {
  it('renders WelcomeBox', () => {
    const wrapper = shallow(<Content />)
    expect(wrapper.find(WelcomeBox).length).toBe(1)
  })
})
