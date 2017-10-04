[![NPM Package](https://img.shields.io/npm/v/reference-map.svg?style=flat-square)](https://www.npmjs.org/package/reference-map)
[![Build Status](https://img.shields.io/travis/wanderer/referenceMap.svg?branch=master&style=flat-square)](https://travis-ci.org/wanderer/referenceMap)
[![Coverage Status](https://img.shields.io/coveralls/wanderer/referenceMap.svg?style=flat-square)](https://coveralls.io/wanderer/referenceMap)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)  

# install

[![Greenkeeper badge](https://badges.greenkeeper.io/wanderer/referenceMap.svg)](https://greenkeeper.io/)
`npm install referanceMap`

# SYNOPSIS 
This is a simple determinstic map that maps POJOs to an integer.

# API

## constructor

[index.js:5-7](https://github.com/wanderer/referanceMap/blob/e1f2c200e1e82a761064a31fb0aebf800a54e6ea/index.js#L5-L7 "Source code on GitHub")

Handle mapping arbitary JS object to ints

## add

[index.js:15-17](https://github.com/wanderer/referanceMap/blob/e1f2c200e1e82a761064a31fb0aebf800a54e6ea/index.js#L15-L17 "Source code on GitHub")

Adds an object to the referance map returning an int to be used as a
referance

**Parameters**

-   `obj` **any** 

Returns **integer** 

## get

[index.js:24-30](https://github.com/wanderer/referanceMap/blob/e1f2c200e1e82a761064a31fb0aebf800a54e6ea/index.js#L24-L30 "Source code on GitHub")

gets a POJO given a refernce as an int

**Parameters**

-   `ref` **integer** 

Returns **any** 

## delete

[index.js:37-39](https://github.com/wanderer/referanceMap/blob/e1f2c200e1e82a761064a31fb0aebf800a54e6ea/index.js#L37-L39 "Source code on GitHub")

deletes an object given a referance as an int

**Parameters**

-   `integer`  
-   `ref`  

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** whether or not the object was deleted

## clear

[index.js:44-46](https://github.com/wanderer/referanceMap/blob/e1f2c200e1e82a761064a31fb0aebf800a54e6ea/index.js#L44-L46 "Source code on GitHub")

clears the referance map of a objects

## size

[index.js:52-54](https://github.com/wanderer/referanceMap/blob/e1f2c200e1e82a761064a31fb0aebf800a54e6ea/index.js#L52-L54 "Source code on GitHub")

returns the number of items in the refernace map

Returns **integer** 

## has

[index.js:60-63](https://github.com/wanderer/referanceMap/blob/e1f2c200e1e82a761064a31fb0aebf800a54e6ea/index.js#L60-L63 "Source code on GitHub")

tests wether a given referance is valid or not

**Parameters**

-   `ref`  

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# LICENSE
[MPL-2.0](https://tldrlegal.com/license/mozilla-public-license-2.0-(mpl-2))
