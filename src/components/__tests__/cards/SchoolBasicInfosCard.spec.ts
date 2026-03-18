import { mount } from "@vue/test-utils"

import SchoolBasicInfosCard from "@/components/cards/SchoolBasicInfosCard.vue"

describe('`SchoolBasicInfosCard`', () => {
  it('should render fields if all data is provided', () => {
    const wrapper = mount(SchoolBasicInfosCard, {
      props: {
        data: {
          id: '1',
          shortName: 'short name',
          longName: 'long name',
          address: 'st. somewhere',
          city: 'city',
          state: 'state',
          zip: '10101',
          phone: '1234567890',
          type: 'A',
          primaryCategory: 'X',
          cpsProfileUrl: 'www.cps.com',
          website: 'www.website.com',
        }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render empty fields if all data is undefined', () => {
    const wrapper = mount(SchoolBasicInfosCard, {
      props: {
        data: {}
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render spinner if data is loading', () => {
    const wrapper = mount(SchoolBasicInfosCard, {
      props: {
        data: {},
        loading: true,
      }
    })
    
    const spinner = wrapper.find('[data-test="spinner"]')

    expect(spinner.exists()).toBe(true)
  })
})