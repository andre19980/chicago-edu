import { mount } from '@vue/test-utils'

import SchoolRatingsListCard from '@/components/cards/SchoolRatingsListCard.vue'

describe('`SchoolRatingsList`', () => {
  it('should render list', () => {
    const wrapper = mount(SchoolRatingsListCard, {
      props: {
        list: [
          {
            title: 'List A',
            ratingScale: ['bad', 'neutral', 'good'],
            rate: 'neutral',
          },
          {
            title: 'List B',
            ratingScale: ['low', 'neutral', 'high'],
            rate: 'high',
          }
        ]
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})