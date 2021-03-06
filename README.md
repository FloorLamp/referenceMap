[![NPM Package](https://img.shields.io/npm/v/reference-map.svg?style=flat-square)](https://www.npmjs.org/package/reference-map)
[![Build Status](https://img.shields.io/travis/wanderer/referenceMap.svg?branch=master&style=flat-square)](https://travis-ci.org/wanderer/referenceMap)
[![Coverage Status](https://img.shields.io/coveralls/wanderer/referenceMap.svg?style=flat-square)](https://coveralls.io/wanderer/referenceMap)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)  

# install  
`npm install referanceMap`

# SYNOPSIS 
This is a simple determinstic map that maps POJOs to an integer.

# API

## constructor

[index.js:5-7](https://github.com/wanderer/referanceMap/blob/be536d78f588a72a29acd71fb3ab0fa35b0789eb/index.js#L5-L7 "Source code on GitHub")

Handle mapping arbitary JS object to ints

## add

[index.js:16-18](https://github.com/wanderer/referanceMap/blob/be536d78f588a72a29acd71fb3ab0fa35b0789eb/index.js#L16-L18 "Source code on GitHub")

Adds an object to the referance map returning an int to be used as a
referance

**Parameters**

-   `obj` **any** 
-   `type` **any** optional

Returns **integer** 

## get

[index.js:26-32](https://github.com/wanderer/referanceMap/blob/be536d78f588a72a29acd71fb3ab0fa35b0789eb/index.js#L26-L32 "Source code on GitHub")

gets a POJO given a refernce as an int

**Parameters**

-   `ref` **integer** 
-   `typeCheck`  
-   `type` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** optional

Returns **any** 

## delete

[index.js:39-41](https://github.com/wanderer/referanceMap/blob/be536d78f588a72a29acd71fb3ab0fa35b0789eb/index.js#L39-L41 "Source code on GitHub")

deletes an object given a referance as an int

**Parameters**

-   `ref`  
-   `integer`  

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** whether or not the object was deleted

## clear

[index.js:46-48](https://github.com/wanderer/referanceMap/blob/be536d78f588a72a29acd71fb3ab0fa35b0789eb/index.js#L46-L48 "Source code on GitHub")

clears the referance map of a objects

## size

[index.js:54-56](https://github.com/wanderer/referanceMap/blob/be536d78f588a72a29acd71fb3ab0fa35b0789eb/index.js#L54-L56 "Source code on GitHub")

returns the number of items in the refernace map

Returns **integer** 

## has

[index.js:62-65](https://github.com/wanderer/referanceMap/blob/be536d78f588a72a29acd71fb3ab0fa35b0789eb/index.js#L62-L65 "Source code on GitHub")

tests wether a given referance is valid or not

**Parameters**

-   `ref`  

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# LICENSE
[MPL-2.0][LICENSE]

[LICENSE]: https://tldrlegal.com/license/mozilla-public-license-2.0-(mpl-2)
