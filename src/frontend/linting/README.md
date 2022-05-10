# Linting

We utilise automated linting of both our JavaScript and SCSS via maintained linting config packages. See the following links for the rules we currently enforce.

- [Eslint](./eslint/README.md)
- [Stylelint](./stylelint/README.md)

## Automated Enforcement

To enforce that linting rules are followed we have a set of GitHub action workflows enabled on all Frontend projects which flags up any errors/warnings in pull requests. This process is automated via [Reviewdog](https://github.com/reviewdog/reviewdog) and are managed by our composite actions available here:

- [Reviewdog Eslint](https://github.com/netsells/github-actions-frontend/tree/main/reviewdog-eslint)
- [Reviewdog Stylelint](https://github.com/netsells/github-actions-frontend/tree/main/reviewdog-stylelint)

See more details on our automated workflows [here](../automated-workflows.md)
