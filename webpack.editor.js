const path = require('path');
const modules = ['components', 'lib', 'pages', 'type'];

function aliasBuilder(modules) {
  return modules.reduce(
    (alias, name) => ({ ...alias, [name]: sourcePathResolve(name) }),
    {}
  );
}

function sourcePathResolve(directory) {
  return path.resolve(__dirname, 'src', directory);
}

module.exports = {
  resolve: {
    alias: aliasBuilder(modules),
  },
};
