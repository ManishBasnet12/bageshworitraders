export const revalidate = 15;

export default async function sitemap() {

  return [
    {
      url: 'https://www.ibainternationaleducation.com.np',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.ibainternationaleducation.com.np/about-2',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.ibainternationaleducation.com.np/services-3',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.ibainternationaleducation.com.np/blog',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.ibainternationaleducation.com.np/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    }
  ]
}