// |reftest| skip-if(!Intl.hasOwnProperty('ListFormat')) -- Intl.ListFormat is not enabled unconditionally
// Copyright 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.ListFormat.prototype.formatToParts
description: Checks the "formatToParts" property of the ListFormat prototype object.
info: |
    Intl.ListFormat.prototype.formatToParts ()

    Unless specified otherwise in this document, the objects, functions, and constructors described in this standard are subject to the generic requirements and restrictions specified for standard built-in ECMAScript objects in the ECMAScript 2019 Language Specification, 10th edition, clause 17, or successor.

    Every other data property described in clauses 18 through 26 and in Annex B.2 has the attributes { [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
features: [Intl.ListFormat]
---*/

assert.sameValue(
  typeof Intl.ListFormat.prototype.formatToParts,
  "function",
  "typeof Intl.ListFormat.prototype.formatToParts is function"
);

verifyProperty(Intl.ListFormat.prototype, "formatToParts", {
  writable: true,
  enumerable: false,
  configurable: true,
});


reportCompare(0, 0);
