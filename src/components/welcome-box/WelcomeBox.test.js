import React from 'react'
import { shallow } from 'enzyme'

import WelcomeBox from '../welcome-box/WelcomeBox'
import Button from '../utils/button/Button'
import Modal from '../modal/Modal'

describe('WelcomeBox', () => {
  it('renders Button', () => {
    const wrapper = shallow(<WelcomeBox />)
    expect(wrapper.find(Button).length).toBe(1)
  })

  it('renders Modal', () => {
    const wrapper = shallow(<WelcomeBox />)
    expect(wrapper.find(Modal).length).toBe(1)
  })
})
