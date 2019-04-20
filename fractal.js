'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

const mandelbrot = require ('@frctl/mandelbrot'); // require the Mandelbrot theme module

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot ({
  skin: "black",
  nav: ["docs", "components"] // show docs above components in the sidebar
});

fractal.web.theme (myCustomisedTheme); // tell Fractal to use the configured theme by default

/* Set the title of the project */
fractal.set('project.title', 'Universal React + Fractal.build');

/* Tell Fractal which component engine to use */
const reactAdapter = require('fractal-react-adapter')({
  babelConfig: {
    presets: ['es2015', 'react']
  },
  renderMethod: 'renderToString',
});
fractal.components.engine(reactAdapter);
fractal.components.set('ext', '.jsx');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/lib');

/*
 * Top-level label for components in web UI
 */
fractal.components.set ('label', 'Library');

/* Tell Fractal where the documentation pages will live */
//fractal.docs.set('path', __dirname + '/docs');

/* Tell Fractal where to build the web project */
fractal.web.set('builder.dest', __dirname + '/build');

/* Tell Fractal where to find static assets */
fractal.web.set('static.path', __dirname + '/static');