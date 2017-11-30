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
// POS for punctuations.
/** @private */
var punctuationPOS = Object.create( null );
punctuationPOS[ '.' ] = '.';
punctuationPOS[ '!' ] = '.';
punctuationPOS[ '?' ] = '.';
punctuationPOS[ '[' ] = '(';
punctuationPOS[ '{' ] = '(';
punctuationPOS[ '(' ] = '(';
punctuationPOS[ ']' ] = ')';
punctuationPOS[ '}' ] = ')';
punctuationPOS[ ')' ] = ')';
punctuationPOS[ ',' ] = ',';
punctuationPOS[ ':' ] = ':';
punctuationPOS[ ';' ] = ':';
punctuationPOS[ '-' ] = ':';
punctuationPOS[ '…' ] = ':';
punctuationPOS[ '"' ] = '"';
punctuationPOS[ '\'' ] = '"';

module.exports = punctuationPOS;
