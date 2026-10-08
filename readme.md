[![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

# @dada78641/eslint-config

A basic [ESLint](https://eslint.org/) config I use in my projects.

## Usage

```ts
// eslint.config.js
// Use either baseConfig, or nodeConfig for a Node project.
import {baseConfig, nodeConfig} from '@dada78641/eslint-config';

export default nodeConfig;
```

If you don't like semi-colons, you can import from `@dada78641/eslint-config/no-semi` instead.

## Rules

Probably the most controversial rule here is that [object literal spacing](https://eslint.style/rules/object-curly-spacing) is disallowed. So for example:

```ts
// valid code
const obj = {foo: {bar: 'baz'}, qux: 'quxx'};
type Foo = {bar: string};
interface Foo {bar: string};
enum Foo {Bar};
```

I always thought those were totally unnecessary, especially since we don't use them for arrays either, and so arrays inside objects are visually inconsistent. I think the spaces reduce the readability of object literals.

Other than that I think it's probably fairly close to what most people work with.

## License

MIT licensed.
