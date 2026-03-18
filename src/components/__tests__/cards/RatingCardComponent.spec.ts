import { mount } from '@vue/test-utils'
import RatingCardComponent from '@/components/cards/RatingCardComponent.vue'

describe('`RatingCardComponent` component', () => {
  it('should render title', () => {
    const wrapper = mount(RatingCardComponent, {
      props: {
        title: 'card title',
        ratings: ['bad', 'neutral', 'good'],
        rate: 'good',
      },
    })

    const title = wrapper.find('[data-test="card-title"]')

    expect(title.exists()).toBe(true)
  })

  it('should render ratings', () => {
    const wrapper = mount(RatingCardComponent, {
      props: {
        title: 'card title',
        ratings: ['bad', 'neutral', 'good'],
        rate: 'good',
      },
    })

    const rates = wrapper.findAll('[data-test="rate"]')

    expect(rates[0]?.text()).toBe('bad')
    expect(rates[1]?.text()).toBe('neutral')
    expect(rates[2]?.text()).toBe('good')
  })

  it('should render rating boxes', () => {
    const wrapper = mount(RatingCardComponent, {
      props: {
        title: 'card title',
        ratings: ['bad', 'neutral', 'good'],
        rate: 'good',
      },
    })

    const boxes = wrapper.findAll('[data-test="rate-box"]')
    expect(boxes.length).toBe(3)
  })

  it('should highlight rate', () => {
    const wrapper = mount(RatingCardComponent, {
      props: {
        title: 'card title',
        ratings: ['bad', 'neutral', 'good'],
        rate: 'good',
      },
    })

    const boxes = wrapper.findAll('[data-test="rate-box"]')

    expect(boxes[0]?.classes()).not.toContain('bg-primary')
    expect(boxes[1]?.classes()).not.toContain('bg-primary')
    expect(boxes[2]?.classes()).toContain('bg-primary')
  })

  // it('should render spinner if data is loading', () => {
  //   const wrapper = mount(RatingCardComponent, {
  //     props: {
  //       label: 'card label',
  //       value: 'value',
  //       icon: markRaw(IconDashboard),
  //       loading: true,
  //     }
  //   })

  //   const spinner = wrapper.find('[data-test="spinner"]')
  //   const value = wrapper.find('[data-test="card-value"]')

  //   expect(spinner.exists()).toBe(true)
  //   expect(value.exists()).toBe(false)
  // })
})
