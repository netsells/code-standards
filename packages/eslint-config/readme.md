![Netsells Logo](https://www.dropbox.com/s/4jmsg7xvcfnyfbk/logo_name_300.png?raw=1)

# Netsells Eslint Config

This repository contains the defacto-standard eslint configuration used on all Netsells projects, both internally and client.

## Usage

Add the config to your project dependencies:

```bash 
yarn add @netsells/eslint-config eslint
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
