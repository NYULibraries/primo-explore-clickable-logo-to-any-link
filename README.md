# primo-explore-clickable-logo-to-any-link

[![Build Status](https://travis-ci.org/NYULibraries/primo-explore-clickable-logo-to-any-link.svg?branch=master)](https://travis-ci.org/NYULibraries/primo-explore-clickable-logo-to-any-link)
[![npm version](https://img.shields.io/npm/v/primo-explore-clickable-logo-to-any-link.svg)](https://www.npmjs.com/package/primo-explore-clickable-logo-to-any-link)
[![Coverage Status](https://coveralls.io/repos/github/NYULibraries/primo-explore-clickable-logo-to-any-link/badge.svg?branch=master)](https://coveralls.io/github/NYULibraries/primo-explore-clickable-logo-to-any-link?branch=master)

## Description

The library's logo in the top bar becomes a clickable link to a specified URL.

## Installation

1. Assuming you've installed and are using [primo-explore-devenv](https://github.com/ExLibrisGroup/primo-explore-devenv).

2. Navigate to your template/central package root directory. For example:
    ```
    cd primo-explore/custom/MY_VIEW_ID
    ```
3. If you do not already have a package.json file in this directory, create one:
    ```
    npm init -y
    ```
4. Install this package:
    ```
    npm install primo-explore-clickable-logo-to-any-link --save-dev
    ```

## Usage

Once installed, inject `clickableLogoToAnyLink` as a dependency:

```js
let app = angular.module('viewCustom', ['clickableLogoToAnyLink'])
```

**Note:** If you're using the --browserify build option, you will need to first import the module with:

```js
import 'primo-explore-clickable-logo-to-any-link';
```

You'll need to configure the module by passing it an array of objects as an angular `constant`:

| name | type | usage |
|------|-------------|--------|
| `url` | string | the url that the clickable link will open |
| `altText` | string | for the aria label and alt tag |

### Translations

You can use translations to access back office text by wrapping the value in curly braces, e.g. `{nui.header.logoAlt}`. Anything that works in the primo templates link this `<span translate="nui.header.logoAlt"></span>` will work if it's available in the current scope.

### Example

```js
app.constant('clickableLogoLinkConfig', {
  url: '{urls.library}',
  altText: '{nui.header.logoAlt}'
});
// Alternately...
app.constant('clickableLogoLinkConfig', {
  url: 'http://library.myinstitution.edu',
  altText: 'My Institution'
});
```

## Acknowledgements

Thanks to https://github.com/Alliance-PCJWG/primo-explore-clickable-logo
for the idea
