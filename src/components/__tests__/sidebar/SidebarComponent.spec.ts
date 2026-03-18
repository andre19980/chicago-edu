import { mount } from "@vue/test-utils";

import SidebarComponent from "@/components/sidebar/SidebarComponent.vue";

describe('`SidebarComponent`', () => {
  it('should render menu items', () => {
    const wrapper = mount(SidebarComponent, {
      global: {
        stubs: ['router-link']
      }
    })

    const items = wrapper.findAll('[data-test="menu-item"]')

    expect(items.length).toBe(2)
  })

  it('should shrink sidebar if is closed', () => {
    const wrapper = mount(SidebarComponent, {
      global: {
        stubs: ['router-link']
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should expand sidebar if is open', async () => {
    const wrapper = mount(SidebarComponent, {
      global: {
        stubs: ['router-link']
      }
    })

    await wrapper.get('[data-test="toggle-button"]').trigger('click')

    expect(wrapper.html()).toMatchSnapshot()
  })
})