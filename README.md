# wasm-test

Простой сайт, использующий WASM.

## Сборка без Docker

`npm ci`

`npm run asbuild:release`

`npm run start`

## Сборка в Docker

`docker build -t wasm-test-nginx .`

`docker run --name wasm-test -d -p 3000:80 wasm-test-nginx`

После этого сайт будет доступен по `http://localhost:3000`