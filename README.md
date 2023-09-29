# GitHub Action for `*.wit.md` files

Configured with:

```yml
jobs:
  abi-up-to-date:
    name: Check ABI files are up-to-date
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: WebAssembly/wit-abi-up-to-date@v14
```

optionally:

```yml
jobs:
  abi-up-to-date:
    name: Check ABI files are up-to-date
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: WebAssembly/wit-abi-up-to-date@v14
      with:
        wit-bindgen: '0.12.0'
        worlds: 'command reactor'
```
