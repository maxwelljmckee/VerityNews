![Imgur](https://i.imgur.com/uUyCwZj.png)

# Purpose
Verity News App is your information hub. There's so much news out there these days, it can be hard to know who to trust or where to look. With Verity, all of your information is in one place, making it easier to find what you're looking for. Verity offers a variety of ways to organize and navigate through the news, making it a flexible, intuitive, and user-friendly platform.

# Key Features
With Verity, users can:
- Filter publication sources by category, or match source names to a searchbar input.
- Navigate directly from sources to associated articles.
- Filter articles by source or match articles to a keyword input.
- Create their own custom `Channels` by grouping together publication sources.

# Getting Started
- The easiest way to get started with the Verity News App is to navigate to https://verity-news.herokuapp.com and login as a demo user. (This may take a few tries as the heroku app wakes up. Thanks for your patience)
- If you'd prefer to take a deeper dive into the code, you can download the project, install the dependencies in both the frontend and backend directories, and run `npm start` in both directories to launch the localhost development servers.

# Technologies Used
## Front-end – React & Redux
The front-end framework is powered by `React` and `Redux`. These technologies enable Verity News to handle and render large amounts of data, as well as offer a variety of flexible conditional rendering options.

## Back-end – Expressjs and NewsAPI
- News API offers a free developer membership that allows for 100 calls/day. Between the development workflow and running a live site, one can project that this would quickly run out. To sidestep this issue, I decided to make my API calls and store the results as static assets on a postgres database. This was a handy workaround, but it also came with a variety of bugs which I will explain in the next section.
- Express powers the lighweight api backend for making requests to the database.

# Challenges with the API
###### Storing the API response data as static assets came with a variety of unwanted side-effects:
- The response data from the API is not reliably formatted. Some article objects contain unwanted null values or html tags. This would have been much less difficult to handle when making realtime calls to the API, but proved to be a formidable challenge when seeding a database with a limited number of API calls to work with. For this reason, some of the articles appearing on the app have no image or author available, and some article content contains things like <li> tags.
- Seeding the database with multiple API calls resulted in some places in duplicate articles. Ordinarily you would simply set a unique constraint in the database, but there was no way to do so without breaking the seed file, and there was no way to debug this flow without exceeding the API call limit.
- Finally, I learned much too late that when my console printed out `... [+1234 chars]` at the end of the `article.content` property, it wasn't indicating that the console was just too lazy to print out the entire thing, it was because "... [+1234 chars]" was *the actual string-literal returned from the API*. My intention of posting the full article body of each article was thus thwarted, and I resorted to including the url link to the full content.

###### Solutions
- Ideally the app would make realtime calls to the API instead of storing articles as static assets. This would resolve the article-duplication issue, as well as making it easier to filter out articles with unwanted null values or other data aberrations. 
- Ultimately, it may be necessary to migrate the entire platform to a different news api. This would represent a nuclear option requiring loads of refactoring, but it is probably the best choice for the long-term viability of the platform.

# Next Steps
- `ReadLater`
  - As its name would suggest, this would allow the user to bookmark a group of articles to access at a later time.
- `Boards`
  - This feature would be very similar to the `Channels` feature, except that the user would be able to save custom groups of *articles* instead of sources.
- `Source-Profile`
  - This would most likely be a `?` icon on the source-logo card which would navigate to a page offering more information about the publication.
- `Share`
  - This would link articles to social media platforms so that users could easily share headlines to their socials with just a few clicks.
