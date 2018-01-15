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
var wl = require( '../src/wink-lexicon.js' );

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe( 'basic test cycle', function () {
  it( 'count keys', function () {
      expect( Object.keys( wl.irregularNouns.singular ).length ).to.deep.equal( 15 );
      expect( Object.keys( wl.irregularNouns.plural ).length ).to.deep.equal( 15 );
      expect( Object.keys( wl.irregularVerbs ).length ).to.deep.equal( 435 );
      expect( Object.keys( wl.lexicon ).length ).to.deep.equal( 13455 );
      expect( Object.keys( wl.punctuations ).length ).to.deep.equal( 16 );
      expect( Object.keys( wl.singularNouns ).length ).to.deep.equal( 24 );
      expect( Object.keys( wl.tags ).length ).to.deep.equal( 8 );
      expect( Object.keys( wl.uncountableNouns ).length ).to.deep.equal( 186 );
      expect( Object.keys( wl.uninflectedNouns ).length ).to.deep.equal( 31 );
      expect( Object.keys( wl.unknownWords ).length ).to.deep.equal( 20 );
      expect( wl.wnSenses.length ).to.deep.equal( 45 );
  } );
} );
