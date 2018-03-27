//     wink-lexicon
//     English lexicon useful in NLP/NLU
//
//     Copyright (C) 2017  GRAYPE Systems Private Limited
//
//     This file is part of “wink-lexicon”.
//
//     “wink-lexicon” is free software: you can redistribute it
//     it and/or modify it under the terms of the GNU Affero
//     General Public License as published by the Free
//     Software Foundation, version 3 of the License.
//
//     “wink-lexicon” is distributed in the hope that it will
//     be useful, but WITHOUT ANY WARRANTY; without even
//     the implied warranty of MERCHANTABILITY or FITNESS
//     FOR A PARTICULAR PURPOSE.  See the GNU Affero General
//     Public License for more details.
//
//     You should have received a copy of the GNU Affero
//     General Public License along with “wink-lexicon”.
//     If not, see <http://www.gnu.org/licenses/>.

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
