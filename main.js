const core = require('@actions/core');
const github = require('@actions/github');

try {
  const tag = core.getInput('wai-abi-tag');
} catch (error) {
  core.setFailed(error.message);
}
