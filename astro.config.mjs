// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/': '/ru',
	},
	integrations: [
		starlight({
			title: 'Интервью на гражданство Walchwil',
			defaultLocale: 'ru',
			locales: {
				ru: {
					label: 'Русский',
					lang: 'ru',
				},
			},
			
			sidebar: [
				{
					label: 'Процесс натурализации (Einbürgerung)',
					slug: 'process',
				},
				{
					label: 'История (Geschichte)',
					items: [{ autogenerate: { directory: 'history' } }],
				},
				{
					label: 'География (Geografie)',
					items: [{ autogenerate: { directory: 'geography' } }],
				},
				{
					label: 'Государственное устройство (Staatskunde)',
					items: [
						{
							label: 'Конфедерация (Bund)',
							items: [{ autogenerate: { directory: 'civics/federal' } }],
						},
						{
							label: 'Кантон (Kanton)',
							items: [{ autogenerate: { directory: 'civics/cantonal' } }],
						},
						{
							label: 'Община (Gemeinde)',
							items: [{ autogenerate: { directory: 'civics/local' } }],
						},
					],
				},
				{
					label: 'Вальхвиль (Walchwil)',
					items: [{ autogenerate: { directory: 'walchwil' } }],
				},
				{
					label: 'Страхование и социальное обеспечение (Sozialversicherungen)',
					items: [{ autogenerate: { directory: 'insurance' } }],
				},
				{
					label: 'Справочник (Referenz)',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
