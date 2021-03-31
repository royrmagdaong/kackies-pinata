// lodash must be npm installed
// all this code is just to help me to auto import all files inside the modules in store

// All Files inside the modules folder should be in camelCase, underscore doesn't work

import camelCase from 'lodash/camelCase'

const requireModule = require.context(".", false, /\.js$/);
const modules = {};

requireModule.keys().forEach(filename => {
    if(filename === "./index.js") return;

    const moduleName = camelCase(filename.replace(/(\.\/|\.js)/g, ""));

    modules[moduleName] = requireModule(filename).default;
});

export default modules;