const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');

const files = fs.readdirSync(__dirname);

files.forEach((file) => {
    let name = path.basename(file, '.js');
    if (name === 'index')
        return;

    module.exports[name] = mongoose.model(name, require('./' + name));
});