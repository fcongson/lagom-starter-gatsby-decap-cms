# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md).

## Setup

> Install yarn on your system: [https://yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)

### Install dependencies

> Only required on the first run, subsequent runs can use `yarn` to both
bootstrap and run the development server using `yarn develop`. Also see the
README's [GitHub Packages setup](README.md#github-packages-setup) section —
`@fcongson/lagom-ui` and `@fcongson/lagom-tokens` need a token in your
user-level `~/.npmrc` before `yarn` will succeed.

```sh
$ git clone https://github.com/fcongson/lagom-starter-gatsby-decap-cms
$ yarn
```

## Available scripts


### `build`

Build the static files into the `public` folder, turns lambda functions into a deployable form. 

#### Usage

```sh
$ yarn build
```

### `clean`

Runs `gatsby clean` command.

#### Usage

```sh
yarn clean
```

### `develop` or `start`

Runs the `clean` script and starts the Gatsby develop server using the command `gatsby develop`.

#### Usage

```sh
yarn develop
```

### `lint`

Lints `src/` and the Gatsby config files with ESLint (including `eslint-plugin-jsx-a11y`).

#### Usage

```sh
yarn lint
```

### `test`

Runs the Jest test suite.

#### Usage

```sh
yarn test
```

### `check-brand`

Checks `src/styles/brand.css` against the lagom-tokens contract (every role resolves, and light/dark/contrast pairs pass WCAG contrast).

#### Usage

```sh
yarn check-brand
```

### `format`

Formats code and docs according to our style guidelines using `prettier`

#### Usage

```sh
yarn format
```


## Pull Requests

We actively welcome your pull requests!

1. Fork the repo.
2. Create a branch from `main`. If you're addressing a specific issue, prefix your branch name with the issue number.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Run `yarn lint` and `yarn test` and ensure both pass.
5. Use `yarn format` to format your code.
6. PR's must be rebased before merge (feel free to ask for help).
7. PR should be reviewed by two maintainers prior to merging.

## License

By contributing to this starter, you agree that your contributions will be licensed
under its [MIT license](LICENSE).
