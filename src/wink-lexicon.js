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
var wl = Object.create( null );
wl.irregularNouns = require( '../src/irregular-nouns.js' );
wl.irregularVerbs = require( '../src/irregular-verbs.js' );
wl.lexicon = require( '../src/lexicon.js' );
wl.punctuations = require( '../src/punctuations.js' );
wl.singularNouns = require( '../src/singular-nouns.js' );
wl.tags = require( '../src/tags.js' );
wl.uncountableNouns = require( '../src/uncountable-nouns.js' );
wl.uninflectedNouns = require( '../src/uninflected-nouns.js' );
wl.unknownWords = require( '../src/unknown-words.js' );
wl.wnSenses = require( '../src/wn-senses.js' );
wl.wnWords = require( '../src/wn-words.js' );
wl.wnWordSenses = require( '../src/wn-word-senses.js' );
wl.wnNounExceptions = require( '../src/wn-noun-exceptions.js' );
wl.wnVerbExceptions = require( '../src/wn-verb-exceptions.js' );
wl.wnAdjectiveExceptions = require( '../src/wn-adjective-exceptions.js' );

module.exports = wl;
