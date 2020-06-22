import React from 'react'
import { shallow } from 'enzyme'

import Modal from '../modal/Modal'
import SignUpContainer from '../sign-up-form/SignUpContainer'

describe('Modal', () => {
  it('renders the child prop if isOpen is set to true', () => {
    const props = {
      child: <SignUpContainer />,
      isOpen: true
    }
    const wrapper = shallow(<Modal {...props} />)

    expect(wrapper.find(SignUpContainer).length).toBe(1)
  })

  it('does not render the child prop if isOpen is set to false', () => {
    const props = {
      child: <SignUpContainer />,
      isOpen: false
    }
    const wrapper = shallow(<Modal {...props} />)

    expect(wrapper.find(SignUpContainer).length).toBe(0)
  })
})
