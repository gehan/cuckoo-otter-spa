import React from 'react'
import { shallow } from 'enzyme'

import LandingPage from '../../pages/landing-page/LandingPage'
import Header from '../../components/header/Header'
import Content from '../../components/content/Content'
import Footer from '../../components/footer/Footer'

describe('LandingPage', () => {
  it('renders Header', () => {
    const wrapper = shallow(<LandingPage />)
    expect(wrapper.find(Header).length).toBe(1)
  })

  it('renders Content', () => {
    const wrapper = shallow(<LandingPage />)
    expect(wrapper.find(Content).length).toBe(1)
  })

  it('renders Footer', () => {
    const wrapper = shallow(<LandingPage />)
    expect(wrapper.find(Footer).length).toBe(1)
  })
})
