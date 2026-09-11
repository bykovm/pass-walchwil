import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema(),
  }),
  // This explicitly defines the i18n collection so Starlight stops complaining
  i18n: defineCollection({ 
    loader: i18nLoader(), 
    schema: i18nSchema() 
  }),
};