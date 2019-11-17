// can use anyref as a parameter or return type

export declare function external(a: anyref): anyref;

export function internal(a: anyref): anyref {
  const b = external(a);
  let c = external(b);
  var d = external(c);
  return d;
}

// can use reflection to work with anyref values

import * as Reflect from "bindings/Reflect";

declare const someObject: anyref;
declare const someKey: anyref;

assert(Reflect.has(someObject, someKey));

// can call JS bindings with anyref values

import * as console from "bindings/console";

console.log(someObject);
console.log(someKey);
console.log(Reflect.get(someObject, someKey));

// can initialize and compare anyref globals and locals using fillers
// for ref.null, ref.is_null and ref.eq

var a: anyref;
var b: anyref = null;

function testGlobalFillers(): void {
  assert(!a);
  assert(a == b);
  assert(!(a != b));
}
testGlobalFillers();

function testLocalFillers(): void {
  var a: anyref;
  var b: anyref = null;
  assert(!a);
  // TODO: 'Assertion failed: false, at: ./src/literal.h,87,makeFromInt32' when optimizing?
  // assert(a == b);
  // assert(!(a != b));
}
testLocalFillers();
