# Near & Here

Near & Here is my portfolio rebuild of the simple static website assignment described in my resume. I re-created it as a small Melbourne neighbourhood guide so I could demonstrate the front-end foundations behind a clear, responsive website, including the terms and privacy information a real site should make easy to find.

## Project background

I rebuilt the idea as a Melbourne neighbourhood guide so the front-end work is easy to explore. This is a new portfolio version based on my of coursework.

## What the project includes

This version is a responsive, single-page guide with a search interaction, four neighbourhood cards, a short explanation of the product, and expandable terms, privacy and accessibility notes. The search filters the sample cards in the browser. The mobile navigation can be opened by button or keyboard, and the page includes visible focus styles and a skip link.

The page is static. It does not have user accounts, a server, live venue data, location tracking or a real booking feature. Search text stays in the browser and is not sent to an API.

## How to run it

Open `index.html` in a browser. There is no build step, package installation or API key.

## Project files

- `index.html` contains the page structure and sample content.
- `styles.css` contains the responsive layout, colour system, map illustration and neighbourhood artwork.
- `script.js` controls the mobile menu and the client-side search.

## How the code works, and why it is structured this way

### HTML first

The page uses elements such as `header`, `nav`, `main`, `section`, `article` and `footer` to describe what each part of the page is for. This gives browsers and assistive technology a useful structure, and it makes the document easier for another developer to scan. Native `details` and `summary` elements provide the policy accordions because the browser already supplies basic open-and-close behaviour and keyboard support.

### CSS Grid and Flexbox for different jobs

CSS Grid handles the hero and neighbourhood cards because those layouts need columns that can reflow at different screen widths. Flexbox handles smaller one-dimensional groups such as the navigation, search bar and footer links. A few breakpoints change the page from two columns to one and keep the cards readable on a narrow phone.

### Search stays on the client

The search form listens for its `submit` event, prevents a full page reload, and compares the query against each card's searchable text. It hides cards that do not match and updates a live status message. For a small static directory, this keeps the feature easy to understand and avoids sending a visitor's search to a server. A larger directory would need a real data source and a more capable search strategy.

### Interactions explain their state

The mobile menu button updates `aria-expanded` when the menu opens or closes. This exposes the current state to assistive technology instead of relying on appearance alone. Search feedback uses an `aria-live` region so the result count is announced when it changes.

### Content and privacy are part of the interface

Terms and privacy notes are part of the page. Because this demo does not collect personal data, its privacy note says that plainly. If accounts, analytics, precise location or an external API were added later, the explanation would need to be updated before collecting anything.


## What this project helps me practise

This project is a way to practise how structure, responsive layout and small JavaScript behaviours fit together in a front-end project. It also makes the scope clear: a visual search box is not a backend search service, and a static sample directory is not live local-business data.


