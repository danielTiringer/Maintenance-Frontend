import { shallowMount, createLocalVue } from '@vue/test-utils'
import Metrics from '@/views/Metrics.vue'
import VueApexCharts from 'vue-apexcharts'

const localVue = createLocalVue()
localVue.component('apexchart', VueApexCharts)
localVue.use(VueApexCharts)

let wrapper;

beforeEach(() => {
    wrapper = shallowMount(Metrics, {
        propsData: {},
        mocks: {},
        stubs: ['apexchart'],
        methods: {},
    });
});

afterEach(() => {
    wrapper.destroy();
});

describe('Metrics.vue view', () => {
  it('renders a div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
  it('renders apexcharts', () => {
		expect(wrapper.findAll('.chart').length).toBe(1)
  })
})
