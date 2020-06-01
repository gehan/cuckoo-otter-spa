import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import App from './App'
import LandingPage from '../../pages/landing-page/LandingPage'

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders Landing Page', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(LandingPage).length).toBe(1)
  })
})
