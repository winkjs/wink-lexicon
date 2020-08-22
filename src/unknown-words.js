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
// Defines the morphological rules for guessing the POS for unknown words.
/** @private */
var unknownWordsPOS = Object.create( null );
unknownWordsPOS.s = 'NNS';
unknownWordsPOS.us = 'NN';
unknownWordsPOS.ss = 'NN';
unknownWordsPOS.sis = 'NN';
unknownWordsPOS.ing = 'VBG';
unknownWordsPOS.ed = 'VBN';
unknownWordsPOS.ly = 'RB';
unknownWordsPOS.al = 'JJ';
unknownWordsPOS.ic = 'JJ';
unknownWordsPOS.ve = 'JJ';
unknownWordsPOS.ble = 'JJ';
unknownWordsPOS.ous = 'JJ';
unknownWordsPOS.ful = 'JJ';
unknownWordsPOS.ary = 'JJ';
unknownWordsPOS.ish = 'JJ';
unknownWordsPOS.lar = 'JJ';
unknownWordsPOS.ory = 'JJ';
unknownWordsPOS.less = 'JJ';
unknownWordsPOS.ier = 'JJR';
unknownWordsPOS.est = 'JJS';

module.exports = unknownWordsPOS;
