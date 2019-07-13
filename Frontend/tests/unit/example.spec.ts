import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import OfferStatus from '@/components/OfferStatus.vue'

describe('OfferStatus.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Hello, your order will arrive within'
    const wrapper = shallowMount(OfferStatus, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
