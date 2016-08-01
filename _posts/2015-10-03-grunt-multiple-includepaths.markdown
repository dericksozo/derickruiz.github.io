---
layout: post
title:  "Multiple includePaths with Grunt SASS"
date:   2015-10-03
hasCode: true
regenerate: true
---

Here is how to include both Bourbon and Neat in your grunt sass configuration and have multiple includePaths.

## grunt-sass
<pre data-language="javascript"><code data-language="javascript">sass: {
    dev: {
        files: {
            'src/css/styles.css': 'src/scss/styles.scss'
        },
        options: {
            includePaths: require('node-bourbon').includePaths.concat(require('node-neat').includePaths),
        }
    }
}</code></pre>

## grunt-contrib-sass
<pre data-language="javascript"><code data-language="javascript">
sass: {
    dev: {
        files: {
            'src/css/styles.css': 'src/scss/styles.scss'
        },
        options: {
            loadPath: require('node-bourbon').includePaths.concat(require('node-neat').includePaths),
            sourceMap: true
        }
    }
}</code></pre>


The includePaths (or loadPath with grunt-contrib-sass) property takes an array of different string paths. Doing `require('node-bourbon').includePaths` by itself returns an array so to have multiple includePaths concatenation is required to keep that single array.