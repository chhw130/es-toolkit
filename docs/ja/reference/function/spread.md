# spread

配列の要素を元の関数の個別の引数として展開する新しい関数を作成します。

## インターフェース

```typescript
function spread<F extends (...args: any[]) => any>(func: F): (argsArr: Parameters<F>) => ReturnType<F>;
```

### パラメータ

- `func` (`F`): 引数の配列を受け取り、これらの引数で元の関数を呼び出した結果を返す新しい関数です。

### 戻り値

(`(args: Parameters<F>) => ReturnType<F>`): 引数の配列を受け取り、元の関数をその引数で呼び出した結果を返す新しい関数を作成します。

## 例

```typescript
import { spread } from 'es-toolkit/function';

function add(a, b) {
  return a + b;
}
const spreadAdd = spread(add);
console.log(spreadAdd([1, 2])); // Output: 3

// Example function to spread arguments over
// Create a new function that uses `spread` to combine arguments
const spreadAdd = spread(add, 1);
// Calling `spreadAdd` with an array as the second argument
console.log(spreadAdd(1, [2])); // Output: 3

// Function with default arguments
function greet(name, greeting = 'Hello') {
  return `${greeting}, ${name}!`;
}
// Create a new function that uses `spread` to position the argument array at index 0
const spreadGreet = spread(greet, 0);
// Calling `spreadGreet` with an array of arguments
console.log(spreadGreet(['Alice'])); // Output: Hello, Alice!
console.log(spreadGreet(['Bob', 'Hi'])); // Output: Hi, Bob!
```

## Lodash 互換性

`es-toolkit/compat` から `chunk` をインポートすると、Lodash と互換になります。

- `spread` は追加の数値パラメータ `argsIndex` を受け付け、引数配列が前の引数の中で位置する場所を指定します。
  - `argsIndex` が負の値または `NaN` の場合、デフォルトで `0` になります。小数の場合は最も近い整数に切り捨てられます。

```typescript
import { spread } from 'es-toolkit/compat';

function fn(a: unknown, b: unknown, c: unknown) {
  return Array.from(arguments);
}

spread(fn, -1)([1, 2]); // Returns [1, 2]
spread(fn, NaN)([1, 2]); // Returns [1, 2]
spread(fn, 'a')([1, 2]); // Returns [1, 2]
spread(fn, 1.6)(1, [2, 3]); // Returns [1, 2, 3]
```
