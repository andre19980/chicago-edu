import { mount } from '@vue/test-utils'
import { markRaw } from 'vue'
import DashCardComponent from '@/components/cards/DashCardComponent.vue'
import IconDashboard from '@/components/icons/IconDashboard.vue'

describe('`DashCardComponent` component', () => {
  it('should render `svg` if prop icon is a component', () => {
    const wrapper = mount(DashCardComponent, {
      props: {
        label: 'card label',
        value: 'value',
        icon: markRaw(IconDashboard),
        loading: false,
      }
    })

    const icon = wrapper.find('[data-test="card-icon"]')

    expect(icon.exists()).toBe(true)
  })

  it('should render value', () => {
    const wrapper = mount(DashCardComponent, {
      props: {
        label: 'card label',
        value: 'value',
        icon: markRaw(IconDashboard),
        loading: false,
      }
    })

    const value = wrapper.find('[data-test="card-value"]')

    expect(value.text()).toBe('value')
  })

  it('should render label', () => {
    const wrapper = mount(DashCardComponent, {
      props: {
        label: 'card label',
        value: 'value',
        icon: markRaw(IconDashboard),
        loading: false,
      }
    })

    const label = wrapper.find('[data-test="card-label"]')
    expect(label.text()).toBe('card label')
  })

  it('should render spinner if data is loading', () => {
    const wrapper = mount(DashCardComponent, {
      props: {
        label: 'card label',
        value: 'value',
        icon: markRaw(IconDashboard),
        loading: true,
      }
    })

    const spinner = wrapper.find('[data-test="spinner"]')
    const value = wrapper.find('[data-test="card-value"]')

    expect(spinner.exists()).toBe(true)
    expect(value.exists()).toBe(false)
  })
})