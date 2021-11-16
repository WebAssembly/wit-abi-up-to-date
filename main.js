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
    '--dev',
  ]);
  child_process.execFileSync('wai-abi', ['--check', '.'])
} catch (error) {
  core.setFailed(error.message);
}
