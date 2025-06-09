# GitHub Action for generating `*.md` from `*.wit`.

Configured with:

```yml
name: CI
on:
  push:
    branches: [main]
    tags-ignore: [dev]
  pull_request:
    branches: [main]

jobs:
  abi-up-to-date:
    name: Check ABI files are up-to-date
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: WebAssembly/wit-abi-up-to-date@v23
```

optionally:

```yml
jobs:
  abi-up-to-date:
    name: Check ABI files are up-to-date
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: WebAssembly/wit-abi-up-to-date@v23
      with:
        wit-bindgen: '0.42.1'
        worlds: 'command reactor'
        directory: 'wit'
```
