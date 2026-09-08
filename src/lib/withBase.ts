/* Turns an app-root path like "/resume.pdf" into one that respects
   the site's base path. Locally that base is "/", so nothing changes;
   on GitHub Pages the base is "/codycoressel/", so the file resolves
   to /codycoressel/resume.pdf instead of the wrong /resume.pdf.
   import.meta.env.BASE_URL is provided by Vite and always ends in "/". */
export const withBase = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
