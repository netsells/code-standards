# Frontend

This section contains the standard best practices we follow on new projects for all frontend-specific languages.

## Single Page Applications

Every new project is built as a Single Page Application, using Nuxt. Nuxt provides us with a performant framework to quickly scaffold universal applications with server-side rendering out of the box.

## Browser support 

It's impossible to support every single browser, so depending on market share the browsers we do support will be limited. Browser market share can be monitored [here](https://netmarketshare.com/browser-market-share.aspx?id=browsersDesktopVersions). 

### Base Support:

The following browsers and versions should be supported at a minimum and should be accounted for during the development and QA stages. Evergreen browsers (always up-to-date due to self-updating) are listed as latest due to it being almost impossible to test on older versions due to the frequency of updates to these browsers and the fact that users are prompted to update when new versions are updated which often fixes the bugs that they are experiencing.

- Internet Explorer: >=11
- Edge: latest
- Chrome: latest
- Firefox: latest
- Safari: latest

## Package Manager

We use npm to manage all the dependencies for the frontend of our projects. 

We use yarn as our cli for managing these dependencies due to the more reliable lockfile functionality.

