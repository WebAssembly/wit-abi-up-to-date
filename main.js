const core = require('@actions/core');
const child_process = require('child_process');

try {
  const tag = core.getInput('wai-abi-tag');
  child_process.execFileSync('cargo', [
    'install',
    '--git',
    'https://github.com/alexcrichton/example-wasi-tools',
    'wai-abi',
    '--tag',
    tag,
  ]);
  child_process.execFileSync('wai-gen', ['--check', '.'])
} catch (error) {
  core.setFailed(error.message);
}
