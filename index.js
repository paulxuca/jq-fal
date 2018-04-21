const path = require('path');

const vendorDir = path.join(__dirname, 'vendor');

module.exports = {
    osx: path.join(vendorDir, 'jq-osx-amd64'),
    linux: path.join(vendorDir, 'jq-linux64')
};
