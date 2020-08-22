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
// This data is derived from the WordNet project of Princeton University. The
// Wordnet is copyright by Princeton University. It is sourced from
// http://wordnet.princeton.edu/; the license text can be accessed at
// http://wordnet.princeton.edu/wordnet/license/ URL.
// WordNet License:
// WordNet Release 3.0 This software and database is being provided to you,
// the LICENSEE, by Princeton University under the following license.
// By obtaining, using and/or copying this software and database,
// you agree that you have read, understood, and will comply with these terms
// and conditions.:
// Permission to use, copy, modify and distribute this software and database and
// its documentation for any purpose and without fee or royalty is hereby
// granted, provided that you agree to comply with the following copyright
// notice and statements, including the disclaimer, and that the same appear
// on ALL copies of the software, database and documentation, including
// modifications that you make for internal use or for distribution.
// WordNet 3.0 Copyright 2006 by Princeton University. All rights reserved.
// THIS SOFTWARE AND DATABASE IS PROVIDED "AS IS" AND PRINCETON UNIVERSITY
// MAKES NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED.
// BY WAY OF EXAMPLE, BUT NOT LIMITATION, PRINCETON UNIVERSITY MAKES NO
// REPRESENTATIONS OR WARRANTIES OF MERCHANT- ABILITY OR FITNESS FOR ANY
// PARTICULAR PURPOSE OR THAT THE USE OF THE LICENSED SOFTWARE, DATABASE OR
// DOCUMENTATION WILL NOT INFRINGE ANY THIRD PARTY PATENTS, COPYRIGHTS,
// TRADEMARKS OR OTHER RIGHTS. The name of Princeton University or Princeton
// may not be used in advertising or publicity pertaining to distribution of
// the software and/or database. Title to copyright in this software, database
// and any associated documentation shall at all times remain with
// Princeton University and LICENSEE agrees to preserve same.

// Reference: http://wordnet.princeton.edu/man/lexnames.5WN.html
const senses = [
  // 00 - all adjective clusters
  'adj.all',
  // 01 - relational adjectives (pertainyms) eg: acoustic
  'adj.pertainym',
  // 02 - all adverbs
  'adv.all',
  // 03 - unique beginner for nouns
  'noun.tops',
  // 04 - nouns denoting acts or actions eg: gift
  'noun.act',
  // 05 - nouns denoting animals eg: tadpole
  'noun.animal',
  // 06 - nouns denoting man-made objects eg: tag
  'noun.artifact',
  // 07 - nouns denoting attributes of people and objects eg: talkativeness
  'noun.attribute',
  // 08 - nouns denoting body parts eg: finger
  'noun.body',
  // 09 - nouns denoting cognitive processes and contents eg: flavor
  'noun.cognition',
  // 10 - nouns denoting communicative processes and contents eg: fluency
  'noun.communication',
  // 11 - nouns denoting natural events eg: germination
  'noun.event',
  // 12 - nouns denoting feelings and emotions eg: glee
  'noun.feeling',
  // 13 - nouns denoting foods and drinks eg: gluten
  'noun.food',
  // 14 - nouns denoting groupings of people or objects eg: government
  'noun.group',
  // 15 - nouns denoting spatial position eg: harbor
  'noun.location',
  // 16 - nouns denoting goals eg: incentive
  'noun.motive',
  // 17 - nouns denoting natural objects (not man-made) eg: river
  'noun.object',
  // 18- - nouns denoting people eg: artison
  'noun.person',
  // 19 - nouns denoting natural phenomena eg: aurora
  'noun.phenomenon',
  // 20 - nouns denoting plants eg: asparagus
  'noun.plant',
  // 21 - nouns denoting possession and transfer of possession eg: assignment
  'noun.possession',
  // 22 - nouns denoting natural processes eg: biosynthesis
  'noun.process',
  // 23 - nouns denoting quantities and units of measure eg: bit
  'noun.quantity',
  // 24 - nouns denoting relations between people or things or ideas eg: bond
  'noun.relation',
  // 25 - nouns denoting two and three dimensional shapes eg: bulge
  'noun.shape',
  // 26 - nouns denoting stable states of affairs eg: calcification
  'noun.state',
  // 27 - nouns denoting substances eg: calcium
  'noun.substance',
  // 28 - nouns denoting time and temporal relations eg: centenary
  'noun.time',
  // 29 - verbs of grooming, dressing and bodily care eg: cleanse
  'verb.body',
  // 30 - verbs of size, temperature change, intensifying, etc. eg: elongate
  'verb.change',
  // 31 - verbs of thinking, judging, analyzing, doubting eg: elucidate
  'verb.cognition',
  // 32 - verbs of telling, asking, ordering, singing eg: entice
  'verb.communication',
  // 33 - verbs of fighting, athletic activities eg: fortify
  'verb.competition',
  // 34 - verbs of eating and drinking eg: gobble
  'verb.consumption',
  // 35 - verbs of touching, hitting, tying, digging eg: grate
  'verb.contact',
  // 36 - verbs of sewing, baking, painting, performing eg: ideate
  'verb.creation',
  // 37 - verbs of feeling eg: impress
  'verb.emotion',
  // 38 - verbs of walking, flying, swimming eg: inspect
  'verb.motion',
  // 39 - verbs of seeing, hearing, feeling eg: listen
  'verb.perception',
  // 40 - verbs of buying, selling, owning eg: loan
  'verb.possession',
  // 41 - erbs of political and social activities and events eg: lobby
  'verb.social',
  // 42 - verbs of being, having, spatial relations eg: locate
  'verb.stative',
  // 43 - verbs of raining, snowing, thawing, thundering eg: overcast
  'verb.weather',
  // 44 - participial adjectives
  'adj.ppl'
];

module.exports = senses;
