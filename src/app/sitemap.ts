import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://parsoftware.co.za';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/support/cps`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/support/cps/delete-account`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
