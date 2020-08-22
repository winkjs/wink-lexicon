//     wink-lexicon
//     English lexicon useful in NLP/NLU
//
//     Copyright (C) GRAYPE Systems Private Limited
//
//     This file is part of “wink-lexicon”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var nouns = Object.create( null );
nouns.singular = Object.create( null );
nouns.plural = Object.create( null );

nouns.singular.children = 'child';
nouns.singular.ephemerides = 'ephemeris';
nouns.singular.oxen = 'ox';
nouns.singular.men = 'man';
nouns.singular.women = 'woman';
nouns.singular.people = 'person';
nouns.singular.sexes = 'sex';
nouns.singular.zombies = 'zombie';
nouns.singular.moves = 'move';
nouns.singular.leaves = 'leaf';
nouns.singular.mouse = 'mice';
nouns.singular.louse = 'lice';
nouns.singular.feet = 'foot';
nouns.singular.teeth = 'tooth';
nouns.singular.geese = 'goose';

/* eslint guard-for-in: 0 */
for ( var noun in nouns.singular ) {
  nouns.plural[ nouns.singular[ noun ] ] = noun;
}

module.exports = nouns;
