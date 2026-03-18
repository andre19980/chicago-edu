import { mount } from '@vue/test-utils'
import { markRaw } from 'vue'
import DashCardBigIcon from '@/components/cards/DashCardBigIcon.vue'
import IconDashboard from '@/components/icons/IconDashboard.vue'

describe('`DashCardBigIcon` component', () => {
  it('should render `img` if prop icon is string', () => {
    const wrapper = mount(DashCardBigIcon, {
      props: {
        label: 'card label',
        value: 'value',
        icon: './image',
        cardKey: 'card key',
        loading: false,
      }
    })

    const image = wrapper.find('img')

    expect(image.exists()).toBe(true)
  })

  it('should render `svg` if prop icon is a component', () => {
    const wrapper = mount(DashCardBigIcon, {
      props: {
        label: 'card label',
        value: 'value',
        icon: markRaw(IconDashboard),
        cardKey: 'card key',
        loading: false,
      }
    })

    const icon = wrapper.find('[data-test="big-icon"]')

    expect(icon.exists()).toBe(true)
  })

  it('should render value', () => {
    const wrapper = mount(DashCardBigIcon, {
      props: {
        label: 'card label',
        value: 'value',
        icon: markRaw(IconDashboard),
        cardKey: 'card key',
        loading: false,
      }
    })

    const value = wrapper.find('[data-test="card-value"]')

    expect(value.text()).toBe('value')
  })

  it('should render label', () => {
    const wrapper = mount(DashCardBigIcon, {
      props: {
        label: 'card label',
        value: 'value',
        icon: markRaw(IconDashboard),
        cardKey: 'card key',
        loading: false,
      }
    })

    const label = wrapper.find('[data-test="label"]')
    expect(label.text()).toBe('card label')
  })

  it('should render spinner if data is loading', () => {
    const wrapper = mount(DashCardBigIcon, {
      props: {
        label: 'card label',
        value: 'value',
        icon: markRaw(IconDashboard),
        cardKey: 'card key',
        loading: true,
      }
    })

    const value = wrapper.find('[data-test="card-value"]')
    const spinner = wrapper.find('[data-test="spinner"]')

    expect(spinner.exists()).toBe(true)
    expect(value.exists()).toBe(false)
  })
})