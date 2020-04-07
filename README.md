# Nacelle Lucky Orange Nuxt Module

This module integrates [Lucky Orange](https://www.luckyorange.com/) analytics with your [Nacelle](https://getnacelle.com/) Nuxt project.

## Requirements

* A Nacelle project set up locally. See https://docs.getnacelle.com for getting started.
* A Lucky Orange account

## Setup

Once you have Nacelle and Lucky Orange set up you can install this module in your project from `npm`:

```
npm install @nacelle/nacelle-lucky-orange-nuxt-module --save
```

After the package has installed, open `nuxt.config.js`. Under `modules` add `@nacelle/nacelle-lucky-orange-nuxt-module` to the array.

Next go to your Lucky Orange settings and [find your "Site ID"](https://help.luckyorange.com/article/122-where-can-i-find-my-site-id). Back in `nuxt.config.js` add `luckyOrange: '<Your Lucky Orange Site ID>'` to the `nacelle` config object.

Lucky Orange is now connected to your Nacelle project.
