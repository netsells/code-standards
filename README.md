![Netsells Logo](./images/netsells-logo-with-slogan.jpg)

# Netsells Code Standards

Netsells aims to keep up to date with emerging technologies and ensure that code is structured in a consistent, readable and maintable way. On top of this, we aim to build highly performant products, utilising the best methods of tackling complex problems.

The set of standards provided herein exist to onboard new developers within the Netsells organisation, and assist in working with external companies on collaborative codebases.

## Monorepo

As well as being a place to house documentation, this repository also serves as a monorepo for various packages that provide tools for enforcing code standards.

- [Eslint Config](./packages/eslint-config)
- [Stylelint Config](./packages/stylelint-config)

## Contributing

If this document is inaccurate, or you spot mistakes, please submit an issue or pull request on the [GitHub repository](https://github.com/netsells/code-standards).

### Development

This site is built using Vuepress, to learn more check out the [Official Documentation](https://vuepress.vuejs.org/).

```bash
git clone git@github.com:netsells/code-standards.git
npm run dev
```

### Building

Make sure you build before deploying or the github pages documentation will not be updated.

```bash
npm run build
```
