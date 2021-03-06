### Quickstart

1. Download the project folder or clone the repo.
2. `npm install`
3. Authorize your computer if this is your first time to ever use the kit: `npm run spreadsheet/authorize`
4. Add your Google sheet's ID to the `config.json`, and override any sheets that need to be processed differently. (`keyvalue` or `objectlist`)
5. Get to work! `gulp serve` to view locally

### Flow Charts

You'll need to give each question an ID, and indicate which ID (i.e. question) to show next for each option. Switch to the "flow-chart" branch and clone THAT repo (the styles, script &amp; index.html are a bit different). Here's a flow-chart [spreadsheet template](https://docs.google.com/spreadsheets/d/1zcnH7kQNqYA7a9DM6gRivG7HZu9fUab4nGLmRqJY3Ls/edit#gid=0):

| id    | text_md                                                                                                                                                             | a_option_md                        | b_option_md              | a_next | b_next | img       |
|-------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------|--------------------------|--------|--------|-----------|
| start | Are you a cat or dog person?                                                                                                                                        | Cat                                | Dog                      | cat    | dog    |           |
| cat   | Do you tell secrets to your cat?                                                                                                                                    | Yes! She's the best secret-keeper. | No, I have real friends. | annie  | becca  |           |
| dog   | Would you rather have a [chickenosaurus](http://qz.com/404056/a-team-of-scientists-have-engineered-a-chicken-with-a-dinosaurs-face-to-study-evolution/) or a corgi? | Chickenosaurus                     | Corgi                    | jolie  | ryan   |           |
| annie | You're Annie Daniel!                                                                                                                                                |                                    |                          |        |        | annie.jpg |
| becca | You're Becca Aaronson!                                                                                                                                              |                                    |                          |        |        | becca.jpg |
| jolie | You're Jolie McCullough!                                                                                                                                            |                                    |                          |        |        | jolie.jpg |
| ryan  | You're Ryan Murphy!                                                                                                                                                 |                                    |                          |        |        | ryan.jpg  |

### Features

- Live reloading and viewing powered by [BrowserSync](http://www.browsersync.io/)
- Compiling of Sass/SCSS with [Ruby Sass](http://sass-lang.com/)
- CSS prefixing with [autoprefixer](https://github.com/postcss/autoprefixer)
- CSS sourcemaps with [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)
- CSS compression with [csso](https://github.com/css/csso)
- JavaScript linting with [jshint](http://jshint.com/)
- JavaScript compression with [uglifyjs](https://github.com/mishoo/UglifyJS2)
- Template compiling with [nunjucks](http://mozilla.github.io/nunjucks/)
- Image compression with [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)
- Asset revisioning with [gulp-rev](https://github.com/sindresorhus/gulp-rev) and [gulp-rev-replace](https://github.com/jamesknelson/gulp-rev-replace)
- [pym.js](http://blog.apps.npr.org/pym.js/) included by default for easy embedding in hostile CMS environments

### Connect to S3

To use the commands to deploy your project to Amazon S3, you'll need to add a [profile newsapps] to ~/.aws/config. It should look something like this:

```
[profile newsapps]
aws_access_key_id=YOUR_UNIQUE_ID
aws_secret_access_key=YOUR_SECRET_ACCESS_KEY
```

Then you can run these commands to build and deploy:

```
gulp
npm run deploy
```

The package will deploy to graphics.texastribune.org/. You'll need to add a slug to package.json to designate a specific S3 location.

## Available Commands

```sh
npm run spreadsheet/authorize
```
Allows your computer to interact with the scraper. Only needs to be done once! Any future uses of the graphic kit can skip this.

```sh
npm run spreadsheet/fetch
```
Pulls down the project's spreadsheet and processes it into the `data.json` file.

```sh
npm run spreadsheet/edit
```
Opens the project's spreadsheet in your browser.

```sh
npm run deploy
```
Deploys the project.
