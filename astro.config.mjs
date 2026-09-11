// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://pass-walchwil.ch',
  integrations: [
    starlight({
      title: {
        ru: 'Знания для собеседований на гражданство: Walchwil',
      },
      defaultLocale: 'ru',
      locales: {
        ru: { label: 'Русский', lang: 'ru' },
       },
      editLink: {
        baseUrl: 'https://github.com/bykovm/pass-walchwil/edit/main/',
      },
      lastUpdated: true,
      sidebar: [
		  {
			label: 'Начало',
			items: [
			  {
				label: 'Главная',
				link: '/ru/index',
			  },
			],
		  },
		  {
			label: 'Walchwil',
			items: [{ autogenerate: { directory: 'ru/walchwil' } }],
		  },
		  {
			label: 'Справочник',
			items: [{ autogenerate: { directory: 'ru/reference' } }],
		  },
		]
    }),
  ],
});