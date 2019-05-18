![Netsells Logo](https://www.dropbox.com/s/4jmsg7xvcfnyfbk/logo_name_300.png?raw=1)

# Netsells Eslint Config

This repository contains the defacto-standard eslint configuration used on all Netsells projects, both internally and client.

## Usage

Add the config to your project dependencies:

```bash
yarn add @netsells/eslint-config eslint@^4.10.0
```

Extend the config in your project. For example, a `.eslintrc` file in your project root:

```json
{
  "extends": "@netsells"
}
```

### With webpack

Add the eslint-loader to your project:

```bash
yarn add eslint-loader
```

Add the loader into your workflow. The following example will force the linter to be ran before other loaders such as babel compilation. This means we lint the raw ES6 code rather than the transpiled ES5 output:

```js
{
    module: {
        rules: [
            {
                test:    /.(vue|js)$/,
                loader:  'eslint-loader',
                enforce: 'pre',
                exclude: /node_modules/,
            },
        ],
    },
},
```

## Contributing

If you disagree with any rules in this linter, or feel additional rules should be added, please open an issue on this project to initiate an open dialogue with all team members. Please bear in mind this is a public repository.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/5918348?v=4" width="100px;"/><br /><sub><b>Sam Turrell</b></sub>](http://samturrell.co.uk)<br />[💻](https://github.com/netsells/eslint-config-netsells/commits?author=samturrell "Code") | [<img src="https://avatars0.githubusercontent.com/u/26109442?v=4" width="100px;"/><br /><sub><b>BeccaAnderton18</b></sub>](https://github.com/BeccaAnderton18)<br />[💻](https://github.com/netsells/eslint-config-netsells/commits?author=BeccaAnderton18 "Code") | [<img src="https://avatars3.githubusercontent.com/u/8046913?v=4" width="100px;"/><br /><sub><b>rowancollins89</b></sub>](https://github.com/rowancollins89)<br />[💻](https://github.com/netsells/eslint-config-netsells/commits?author=rowancollins89 "Code") | [<img src="https://avatars1.githubusercontent.com/u/6869002?v=4" width="100px;"/><br /><sub><b>Neveena</b></sub>](https://github.com/neveena)<br />[💻](https://github.com/netsells/eslint-config-netsells/commits?author=neveena "Code") | [<img src="https://avatars0.githubusercontent.com/u/25647489?v=4" width="100px;"/><br /><sub><b>martin91s</b></sub>](https://github.com/martin91s)<br />[💻](https://github.com/netsells/eslint-config-netsells/commits?author=martin91s "Code") | [<img src="https://avatars0.githubusercontent.com/u/26853175?v=4" width="100px;"/><br /><sub><b>Wiktor Zawierucha</b></sub>](https://github.com/wik-z)<br />[💻](https://github.com/netsells/eslint-config-netsells/commits?author=wik-z "Code") | [<img src="https://avatars2.githubusercontent.com/u/7649031?v=4" width="100px;"/><br /><sub><b>jdtjenkins</b></sub>](https://github.com/jdtjenkins)<br />[💻](https://github.com/netsells/eslint-config-netsells/commits?author=jdtjenkins "Code") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars2.githubusercontent.com/u/16099044?v=4" width="100px;"/><br /><sub><b>Sam Boylett</b></sub>](http://boylett.com)<br />[💻](https://github.com/netsells/eslint-config-netsells/commits?author=samboylett "Code") |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
