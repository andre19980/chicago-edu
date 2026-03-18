import { mount, flushPromises } from '@vue/test-utils'
import { vi } from 'vitest'
import { querySchools } from '@/api/schools/schools'

import DashboardView from '@/views/DashboardView.vue'
import camelcaseKeys from 'camelcase-keys'

vi.mock('@/api/schools/schools', () => ({
  querySchools: vi.fn(),
}))

const mockedQuerySchools = vi.mocked(querySchools)

const mockedData = camelcaseKeys([
  {
    school_id: '610053',
    short_name: 'MARQUETTE',
    school_type: 'Neighborhood',
    primary_category: 'ES',
    student_attendance_year_1: '89.8',
    student_attendance_year_2: '92.5',
    teacher_attendance_year_1: '93.1',
    teacher_attendance_year_2: '93.9',
    chronic_truancy_pct: '25.8',
    mobility_rate_pct: '11.8',
  },
  {
    school_id: '610051',
    short_name: 'NORTHWEST',
    school_type: 'Neighborhood',
    primary_category: 'MS',
    student_attendance_year_1: '87.8',
    student_attendance_year_2: '88.6',
    teacher_attendance_year_1: '91.1',
    teacher_attendance_year_2: '92.6',
    chronic_truancy_pct: '41.9',
    mobility_rate_pct: '11.8',
  },
  {
    school_id: '400097',
    short_name: 'NOBLE - BULLS HS',
    school_type: 'Charter',
    primary_category: 'HS',
    student_attendance_year_1: '83.5',
    student_attendance_year_2: '85.5',
    one_year_dropout_rate_year: '0.7',
    one_year_dropout_rate_year_1: '0.7',
    graduation_4_year_school: '93.6',
    graduation_4_year_school_1: '90.5',
    chronic_truancy_pct: '51.8',
    mobility_rate_pct: '7.3',
  },
  {
    school_id: '609845',
    short_name: 'CARVER G',
    school_type: 'Neighborhood',
    primary_category: 'ES',
    student_attendance_year_1: '80.3',
    student_attendance_year_2: '88.2',
    teacher_attendance_year_1: '92.2',
    teacher_attendance_year_2: '94.6',
    chronic_truancy_pct: '43.7',
    mobility_rate_pct: '18.9',
  },
  {
    school_id: '400077',
    short_name: 'U OF C - WOODLAWN HS',
    school_type: 'Charter',
    primary_category: 'HS',
    student_attendance_year_1: '85.7',
    student_attendance_year_2: '88',
    one_year_dropout_rate_year: '3.1',
    one_year_dropout_rate_year_1: '6.5',
    graduation_4_year_school: '86.7',
    graduation_4_year_school_1: '89.2',
    chronic_truancy_pct: '44.3',
    mobility_rate_pct: '6.3',
  },
])

mockedQuerySchools.mockResolvedValue(mockedData)

const createWrapper = () => {
  return mount(DashboardView, {
    global: {
      stubs: ['teleport', 'vue-chartjs'],
    },
  })
}

describe(`DashboardView`, () => {
  it('should render `numberOfSchools`', async () => {
    const wrapper = createWrapper()

    await flushPromises()

    const firstCard = wrapper.findAll('[data-test="card-value"]')

    expect(firstCard[0]?.text()).toBe('5')
  })

  it('should render `studentAttendanceAvgPct`', async () => {
    const wrapper = createWrapper()

    await flushPromises()

    const firstCard = wrapper.findAll('[data-test="card-value"]')

    expect(firstCard[1]?.text()).toBe('86.99%')
  })
})
