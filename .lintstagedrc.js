// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

const commands = {
  lint: 'next lint --no-cache --fix --file {{files}}',
  prettier:
    'prettier src/**/*.{js,jsx,ts,tsx} --write --ignore-unknown {{files}}',
  stylelint: 'stylelint {{files}}} --allow-empty-input --fix'
};

const buildCommand = (command) => {
  return (filenames) => {
    const files = filenames
      .map((f) => path.relative(process.cwd(), f))
      .join(' ');

    return command.replace('{{files}}', files);
  };
};

module.exports = {
  '*.{js,jsx,ts,tsx}': [
    buildCommand(commands.lint),
    buildCommand(commands.prettier)
  ],
  '*.{css,scss}': [
    buildCommand(commands.stylelint),
    buildCommand(commands.prettier)
  ],
  '!(*.{css,scss,js,jsx,ts,tsx})': [buildCommand(commands.prettier)]
};
