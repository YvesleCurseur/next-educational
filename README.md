# From JavaScript to React

## Updating the UI with JavaScript and DOM Methods
The DOM update the HTML element.
imperative programming (How you should do it) is like giving a chef step-by-step instructions on how to make a pizza. Declarative programming (All is done you just have to do it) is like ordering a pizza without being concerned about the steps it takes to make the pizza. 🍕
- React: A declarative UI library.

## Getting Started with React
JSX is a syntax extension for JavaScript that allows you to describe your UI in a familiar HTML-like syntax.
React uses JSX which needs to be compiled into JavaScript.

## Essential JavaScript for React
Be [useful](https://nextjs.org/learn/foundations/from-javascript-to-react/essential-javascript-react) later.

## React Core Concepts
- Components
- Props
    Passing information (variables) to components.
    More cool examples [here](https://nextjs.org/learn/foundations/from-javascript-to-react/displaying-data-with-props) about how we can use it. 💙
- State
    Hooks allow you to add additional logic such as state to your components.
    Props is read-only information that's passed to components. State is information that can change over time, usually triggered by user interaction.

## How to continue learning React
Check [this](https://nextjs.org/learn/foundations/from-javascript-to-react/continue-learning-react) out !

# From React to Next.js
Just follow the step for installation [here](https://nextjs.org/learn/foundations/from-react-to-nextjs/getting-started-with-nextjs).

# How Next.js Works

## Development and Production Environments
- Compiling refers to the process of taking code in one language and outputting it in another language or another version of that language.
- Minification is the process of removing unnecessary code formatting and comments without changing the code’s functionality. The goal is to improve the application’s performance by decreasing file sizes.
- Bundling is the process of resolving the web of dependencies and merging (or ‘packaging’) the files (or modules) into optimized bundles for the browser, with the goal of reducing the number of requests for files when a user visits a web page.
> Compiling is transforming code into something parsable by browsers. Bundling is resolving your applications dependency graph and reducing the number of files.
- Code-splitting is the process of splitting the application’s bundle into smaller chunks required by each entry point. The goal is to improve the application's initial load time by only loading the code required to run that page.

### For the "Next" directory:
Install the dependencies
```bash 
npm install react react-dom next
```
Run
```bash 
npm run dev
``` 
# Create a Next.js app
A simple 
```bash 
npx create-next-app@latest
# or
yarn create next-app
# or
pnpm create next-app
``` 
and done. 

# Navigate Between Pages
Ex: /authors/me is equal to pages/authors/me.js
# Assets, Metadata, and CSS
Check this for [CSS styling](https://nextjs.org/learn/basics/assets-metadata-css/layout-component) and [global CSS](https://nextjs.org/learn/basics/assets-metadata-css/global-styles).
[Styling tips](https://nextjs.org/learn/basics/assets-metadata-css/styling-tips).
- Where can you import global CSS files?
Only inside pages/_app.js
- Why are CSS Modules useful?
They scope styles at the component level
# Pre-rendering and Data Fetching
## Pre-rendering
By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.
## Two Forms of Pre-rendering
Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page.
- Static Generation is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
- Server-side Rendering is the pre-rendering method that generates the HTML on each request.

### Can be useful for later
You can use Static Generation for many types of pages, including:
- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

<Use Server-side rendering when the data needs to be up-to-date with every request

- When should you use Client-side rendering?
Private, user-specific pages where SEO is not relevant

# Dynamic Routes

## How to Statically Generate Pages with Dynamic Routes
Exemple base on the blog project
If you want to statically generate a page at a path called /posts/<id>
where <id> can be dynamic, then...

Create a page at /pages/posts/[id].js

The page file must contain

1. A React component to render this page
2. getStaticPaths which returns an array of possible values for id
3. getStaticProps which fetches necessary data for the post with id

You want to dynamically create product pages with the path pages/products/[id].js, where [id] refers to a specific product ID. What is the correct way to implement this?
Use `getStaticPaths` to fetch an array of product IDs and use `getStaticProps` to fetch data for each product.

[Fetch External API or Query Database](https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details)

