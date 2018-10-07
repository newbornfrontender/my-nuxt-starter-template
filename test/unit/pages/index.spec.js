import { shallowMount } from '@vue/test-utils';
import Component from '@/pages/index.vue';

describe('Страница index', () => {
  test('Корректно отображается заголовок', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.find('h1').text()).toBe('Главная страница');
  });
});
