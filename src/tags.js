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
// POS for `tag`!
/** @private */
var tagPOS = Object.create( null );
tagPOS.number = 'CD';
tagPOS.email = 'NNP';
tagPOS.mention = 'NNP';
tagPOS.hashtag = 'HT';
tagPOS.url = 'NN';
tagPOS.emoticon = 'M';
tagPOS.emoji = 'M';
tagPOS.time = 'JJ';

module.exports = tagPOS;
