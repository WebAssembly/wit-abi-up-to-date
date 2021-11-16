const core = require('@actions/core');
const child_process = require('child_process');

try {
  const tag = core.getInput('wai-abi-tag');
  const url = 'https://github.com/WebAssembly/wasi-tools';
  try {
    core.startGroup('Install `wai-abi` executable');
    child_process.execFileSync(
      'cargo',
      [
        'install',
        '--git',
        url,
        'wai-abi',
        '--tag',
        tag,
        '--debug',
      ],
      { stdio: [null, process.stdout, process.stdout] },
    );
  } finally {
    core.endGroup();
  }
  try {
    core.startGroup('Use `wai-abi` to verify abi files are up to date');
    child_process.execFileSync(
      'wai-abi',
      ['--check', '.'],
      { stdio: [null, process.stdout, process.stdout] },
    );
    core.endGroup();
  } catch (error) {
    core.endGroup();
    core.info('Failed to verify that `*.abi.md` files are up-to-date with');
    core.info('their `*.wai.md` counterparts. The `wai-abi` tool needs to be');
    core.info('rerun on this branch and the changes should be committed');
    core.info('');
    core.info(`  cargo install --git ${url} wai-abi --tag ${tag}`);
    core.info(`  wai-abi .`)
    core.info('');
    core.info('That command will regenerate the `*.abi.md` files to get committed here');
    throw error;
  }
} catch (error) {
  core.setFailed(error.message);
}
