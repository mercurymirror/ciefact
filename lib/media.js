export function getStrapiMedia(url) {
  if (url == null) {
    return null;
  }



  // Otherwise prepend the URL path with the Strapi URL
  return `http://localhost:1337${url}`;
}