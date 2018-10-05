import { shallowMount } from '@vue/test-utils';
import Component from '@/pages/index.vue';

describe('Страницы', () => {
  test('index.vue корректно отображает заголовок', () => {
    const wrapper = shallowMount(Component);

    expect(wrapper.find('h1').text()).toBe('Главная страница');
  });
});
