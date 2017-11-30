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
/* eslint-disable no-console */

var chai = require( 'chai' );
var mocha = require( 'mocha' );
var irregularNouns = require( '../src/irregular-nouns.js' );
var irregularVerbs = require( '../src/irregular-verbs.js' );
var lexicon = require( '../src/lexicon.js' );
var punctuations = require( '../src/punctuations.js' );
var singularNouns = require( '../src/singular-nouns.js' );
var tags = require( '../src/tags.js' );
var uncountableNouns = require( '../src/uncountable-nouns.js' );
var uninflectedNouns = require( '../src/uninflected-nouns.js' );
var unknownWords = require( '../src/unknown-words.js' );

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe( 'basic test cycle', function () {
  it( 'count keys', function () {
      expect( Object.keys( irregularNouns.singular ).length ).to.deep.equal( 15 );
      expect( Object.keys( irregularNouns.plural ).length ).to.deep.equal( 15 );
      expect( Object.keys( irregularVerbs ).length ).to.deep.equal( 424 );
      expect( Object.keys( lexicon ).length ).to.deep.equal( 13455 );
      expect( Object.keys( punctuations ).length ).to.deep.equal( 16 );
      expect( Object.keys( singularNouns ).length ).to.deep.equal( 24 );
      expect( Object.keys( tags ).length ).to.deep.equal( 8 );
      expect( Object.keys( uncountableNouns ).length ).to.deep.equal( 186 );
      expect( Object.keys( uninflectedNouns ).length ).to.deep.equal( 31 );
      expect( Object.keys( unknownWords ).length ).to.deep.equal( 9 );
  } );
} );
