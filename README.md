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

[index.js:5-7](https://github.com/wanderer/referanceMap/blob/4feba821797fde6cd27d47673c1d1cdb90120baf/index.js#L5-L7 "Source code on GitHub")

Handle mapping arbitary JS object to ints

## add

[index.js:15-17](https://github.com/wanderer/referanceMap/blob/4feba821797fde6cd27d47673c1d1cdb90120baf/index.js#L15-L17 "Source code on GitHub")

Adds an object to the referance map returning an int to be used as a
referance

**Parameters**

-   `obj` **any** 
-   `type`  

Returns **integer** 

## get

[index.js:25-31](https://github.com/wanderer/referanceMap/blob/4feba821797fde6cd27d47673c1d1cdb90120baf/index.js#L25-L31 "Source code on GitHub")

gets a POJO given a refernce as an int

**Parameters**

-   `ref` **integer** 
-   `type` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** optional, a contructor that the retreived object should be an instance of

Returns **any** 

## delete

[index.js:38-40](https://github.com/wanderer/referanceMap/blob/4feba821797fde6cd27d47673c1d1cdb90120baf/index.js#L38-L40 "Source code on GitHub")

deletes an object given a referance as an int

**Parameters**

-   `ref`  
-   `integer`  

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** whether or not the object was deleted

## clear

[index.js:45-47](https://github.com/wanderer/referanceMap/blob/4feba821797fde6cd27d47673c1d1cdb90120baf/index.js#L45-L47 "Source code on GitHub")

clears the referance map of a objects

## size

[index.js:53-55](https://github.com/wanderer/referanceMap/blob/4feba821797fde6cd27d47673c1d1cdb90120baf/index.js#L53-L55 "Source code on GitHub")

returns the number of items in the refernace map

Returns **integer** 

## has

[index.js:61-64](https://github.com/wanderer/referanceMap/blob/4feba821797fde6cd27d47673c1d1cdb90120baf/index.js#L61-L64 "Source code on GitHub")

tests wether a given referance is valid or not

**Parameters**

-   `ref`  

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# LICENSE
[MPL-2.0][LICENSE]

[LICENSE]: https://tldrlegal.com/license/mozilla-public-license-2.0-(mpl-2)
