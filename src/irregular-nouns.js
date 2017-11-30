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
