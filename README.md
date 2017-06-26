# vue-auth-image

> A reusable directive for [Vue.js](https://github.com/vuejs/vue) that loads
> an image requiring authentication and includes it as data in-line in your web
> pages.

[![npm version](https://img.shields.io/npm/v/vue-auth-image.svg)](https://www.npmjs.com/package/vue-auth-image)

## Overview

Contrary to other HTTP requests, browsers don't send common headers such as
`Authorization` when retrieving an image specified in a `<img>` tag.

This Vue.js directive overcomes this limitation by providing a way to load your
images as any other resources and then embedding them into your web pages using
the `data:image/FILETYPE;base64` URI scheme.

## Requirements

- vue: \^2.0.0
- axios: >= 0.5.0

## Install

From npm:

``` sh
$ npm install vue-auth-image --save
```

From CDN:

``` html
<script src="https://cdn.jsdelivr.net/npm/vue-auth-image@0.0.1/vue-auth-image.js"></script>
<!-- OR -->
<script src="https://cdn.jsdelivr.net/npm/vue-auth-image@0.0.1/vue-auth-image.min.js"></script>
```

## API

### auth-image

A directive that requests an image URI asynchronously and embed it into your
`<img>` tag using the [data URI scheme](https://en.wikipedia.org/wiki/Data_URI_scheme).

``` js
import Vue from 'vue';
import VueAuthImage from 'vue-auth-image';

// register vue-auth-image directive
Vue.use(VueAuthImage);

// set Authorization header used by axios
var authHeader = 'Bearer ' + localStorage.getItem('id_token');
axios.defaults.headers.common['Authorization'] = authHeader;
```

Once the directive is registered, you can use it in your Vue templates.

``` html
<template>
  <div>
    <img v-auth-img="https://api.app.com/images/authenticatedImg.png">
  </div>
</template>
```

See `/example` for a demo. To build it, run `npm install && npm run build`.

## License

[MIT](https://opensource.org/licenses/MIT)
