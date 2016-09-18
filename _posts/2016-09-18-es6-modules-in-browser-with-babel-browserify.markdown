---
layout: post
title: "Using ES6 modules in the browser with Babel and Browserify"
date:   2016-09-18
hasCode: true
regenerate: true
---

I'm gonna go ahead and get this out in the air. This stuff can feel super complicated at times especially when you're just trying to get setup and do some simple web development. Hopefully, this blog post can simplify things a little bit.

## Prerequisites

+ Familiar with ES6 and ES6 Module syntax
+ Familiar with CommonJS Module Syntax
+ Familiar with Babel but not necessarily how to use it
+ Familiar with Browserify but not necessarily how to use it
+ Node and Npm installed

This blog post is targeted towards Javascript programmers not necessarily familiar with Babel and Browserify and is about getting those tools set up locally so everything works right.

## Step 1: Setting up package.json

Setting up a package.json is important because we're going to use it to run some scripts later to compile the ES6 code into ES5 code from the command line.

So if you don't already have a package.json file in the root of your directory run the following command:

<pre data-language="command line"><code data-language="command line">npm init</code></pre>

It'll run you through some steps about your project. They're not very important so you can just press enter to skip them.

## Step 2: Setting up Babel

The next step is to install Babel.

<pre data-language="command line"><code data-language="command line">[sudo] npm install --save-dev babel-cli</code></pre>

You will also need to create a .babelrc file. Run `touch .babelrc` in the command line or create it. We're gonna end up modifying this file in a bit, but first, we're gonna install the necessary plugins to get things to compile correctly.

## Step 3: Installing the necessary babel plugins

For the purposes of just compiling ES6 and ES6 modules, there are only two necessary plugins. Well, one is a preset. A preset is just a collection of plugins. Those two are ES2015 preset and the ES2015 CommonJS Modules plugin. In order to install those two run the following command.

<pre data-language="command line"><code data-language="command line">[sudo] npm install --save-dev babel-preset-2015 && transform-es2015-modules-commonjs</code></pre>

Now that those are in node_modules the next step is making sure that the .babelrc file is setup correctly. It should look like the following:

<pre data-language="babelrc"><code data-language="babelrc">{
    "presets": ["es2015"],
    "plugins": ["transform-es2015-modules-commonjs"]
}</code></pre>

It's just an object with two keys that specify the presets and plugins.

## Step 4: Compiling with Npm

There's always some kind of build process with these tools to transform the code into ES5 that can run in all browsers. Go back to the `package.json` file that we created initially. It should have a key in it called `scripts` and look something like the following:

<pre data-language="package.json"><code data-language="package.json">"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
}</code></pre>

Go ahead and delete the test key and its value and create a new key called `build`. The value is going to be `babel src -d lib`. That `-d` is shorthand for `--out-dir` and compiles an entire directory into another instead of a single file into another single file. So package.json should now look like the following:

<pre data-language="package.json"><code data-language="package.json">"scripts": {
    "build": "babel src -d lib"
}</code></pre>

If you don't already have a src folder go ahead and create one and put some code in there. I have a file called `app.js` and `my-module.js` that look like the following:

<pre data-language="app.js"><code data-language="app.js">import myModule from './my-module.js';

myModule();</code></pre>

<pre data-language="my-module.js"><code data-language="my-module.js">export default function () {
    console.log("This is my module!");
}</code></pre>

Now if you go back to the command line and run `npm run build` you should get the files `lib/app.js` and `lib/my-module.js`.

Go ahead and create an `index.html` file and include `<script src="lib/app.js"></script>`. If you try running this file in the browser you're going to get an error. That error should say `Uncaught ReferenceError: require is not defined`. That's because we compiled the ES6 module syntax into CommonJS module syntax but the browser still doesn't understand CommonJS syntax. That's where Browserify comes in.

## Step 6: Setting up Browserify to run the code in the browser

Browserify is a tool to make sure that CommonJS modules can be run in the browser. To install browserify run the following command.

<pre data-language="command line"><code data-language="command line">[sudo] npm install --save-dev -g browserify</code></pre>

Now that browserify is installed the build script in package.json is going to have to be modified again. It should look like the following

<pre data-language="package.json"><code data-language="package.json">"scripts": {
    "build": "babel src -d lib && browersify lib/app.js -o lib/app.bundle.js"
}</code></pre>

Save that and run `npm run build` again and now you should have that `lib/app.bundle.js` file. If you load that into your index.html file instead of lib/app.js everything should work and compile correctly.

## Conclusion

This was a code heavy blog post and there was a lot of setting up involved but this is what it takes to compile ES6 code with modules into ES5 code that runs in the browser. I wanted to keep things simple by using npm for compilation, but there's a lot missing. What if you want to setup a watcher to compile files after they change? The next steps would be to begin looking at a build tool like Webpack or Grunt. As always, thank you for reading.