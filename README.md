# Peachflix

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Setup

Install dependencies

```sh
bun install
# or
npm install
```

Run app

```sh
bun dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Overview

Though a bit of a newer framework for me, I built the app using Next.js 14 AppRouter since it provided the necessary routing solutions without need for external libraries. All components are styled with plain CSS to minimize use of third-party libraries.

## Technical Choices

### Home page

I created a SearchBar component to be reused in the main header which handled its own navigation. Moving the navigation out of pages and into components is preferable to minimize the use of the `use client` directive.

### Search page

I created the MovieList component so it could be used across this page and the Favorites page. The pagination here was a new pattern for me with Next.js, but handling the navigation from within the component itself was much simpler than what I was anticipating. I stuck to using semantic HTML elements here since extra functionality was not required.

### Favorites page

I built this page intending to use a sessionStorage utility to manage the list of favorite movies. In order to make sure the page could rerender in response to the changing list of favorites in time, I created a context and hook to access and update data stored there across the application.
The page still has an n + 1 issue where I have to make an API call for each item in the favorites list, but since I'm constrained by the API design, I try to improve the UX by using `Promise.all`.

### Movie details page

The movie details workflow makes use of Next.js' parallel routes. This is an interesting feature that allows two routes to be rendered at the same time. This workflow looked like a perfect use case for the feature so I created the movieDetailDialog to render movie details in a dialog component, while the Search page or Favorites page is present in the background. I preferred the HTML dialog element over portals and third party libraries to keep the code simpler. Navigation is handled by interacting with the dialog and its backdrop, which I added as a separate div due to difficulty in styling.

## Improvement Areas

If I had more time to dedicate to this project, I would address the following:

- Create loading pages with skeletons that reflect the shape of the page
- Create a star rating component for the Movie Details that better reflects the design
- Add smoother page transitions and micro-animations
- Include proper icons for Pagination, buttons, and other components
- Handle missing Movie data more gracefully like including an alternate Movie Poster in the Movie List.
- Add more robust error handling across the app.
