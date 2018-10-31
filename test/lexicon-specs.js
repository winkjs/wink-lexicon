//     wink-lexicon
//     English lexicon useful in NLP/NLU
//
//     Copyright (C) 2017-18  GRAYPE Systems Private Limited
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
/* eslint-disable no-console */

var chai = require( 'chai' );
var mocha = require( 'mocha' );
var wl = require( '../src/wink-lexicon.js' );

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe( 'wink lexicon', function () {
  it( 'should be complete & accessible', function () {
      expect( Object.keys( wl.irregularNouns.singular ).length ).to.deep.equal( 15 );
      expect( Object.keys( wl.irregularNouns.plural ).length ).to.deep.equal( 15 );
      expect( Object.keys( wl.irregularVerbs ).length ).to.deep.equal( 435 );
      expect( Object.keys( wl.lexicon ).length ).to.deep.equal( 13462 );
      expect( Object.keys( wl.punctuations ).length ).to.deep.equal( 16 );
      expect( Object.keys( wl.singularNouns ).length ).to.deep.equal( 24 );
      expect( Object.keys( wl.tags ).length ).to.deep.equal( 9 );
      expect( Object.keys( wl.uncountableNouns ).length ).to.deep.equal( 186 );
      expect( Object.keys( wl.uninflectedNouns ).length ).to.deep.equal( 31 );
      expect( Object.keys( wl.unknownWords ).length ).to.deep.equal( 20 );
      expect( wl.wnSenses.length ).to.deep.equal( 45 );
      expect( Object.keys( wl.wnWords ).length ).to.deep.equal( 77262 );
      expect( wl.wnWordSenses.length ).to.deep.equal( 77262 );
      expect( Object.keys( wl.wnNounExceptions ).length ).to.deep.equal( 1944 );
      expect( Object.keys( wl.wnVerbExceptions ).length ).to.deep.equal( 2220 );
      expect( Object.keys( wl.wnAdjectiveExceptions ).length ).to.deep.equal( 1479 );
  } );
} );
