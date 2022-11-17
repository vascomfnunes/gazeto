# Gazeto

![https://github.com/vascomfnunes/gazeto/blob/main/public/shot.png](https://github.com/vascomfnunes/gazeto/blob/main/public/shot.png)

This is a [Next.js](https://nextjs.org/) project that fetches the current daily
UK edition from The Guardian's Open Platform API and tries to make it an
enjoyable
reading experience.

## Features

- Frontpage with highlights from each news's section
- Read any article, with full content
- Remembers read articles, using local storage
- Fully responsive
- Auto dark mode support (only tested on macOS/iOS devices)

## Getting Started

To run this project, a Guardian's Open Platform API key is required. That
can be requested [here](https://open-platform.theguardian.com/).

Then just clone the provided `.env.sample` file into any environment you want.
For example, `.env.development`. Edit the file and include your own API key in
there.

Next, following the example, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Customizing sections

You can pick only the news sections you want to retrieve editing the file
`pages/api/section.ts` and commenting out the section you don't want to use.

## Unit tests

Unit tests can be run with:

```bash
yarn test
```

## Disclaimer

This project is not affiliated in any way with Guardian News & Media Limited
which has the copyright to all the article's content. The terms of usage of
The Guardian
Open Platform
can be read
[here](https://www.theguardian.com/open-platform/terms-and-conditions).

All the data provided by The Guardian Open Platform is for exclusive personal,
non-comercial use.

## License

This code is licensed under the MIT license. For more information please
refer
to the [LICENSE](https://github.com/vascomfnunes/tmux-clima/blob/main/LICENSE) file.
