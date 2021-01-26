/**
 * The MIT License (MIT).
 *
 * Copyright (c) Johan Holmerin.
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. And its affiliates.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

// https://github.com/necolas/react-native-web/blob/36dacb2052efdab2a28655773dc76934157d9134/packages/react-native-web/src/modules/unitlessNumbers/index.js
const UNITLESS_NUMBERS = [
  'animationIterationCount',
  'borderImageOutset',
  'borderImageSlice',
  'borderImageWidth',
  'boxFlex',
  'boxFlexGroup',
  'boxOrdinalGroup',
  'columnCount',
  'flex',
  'flexGrow',
  'flexOrder',
  'flexPositive',
  'flexShrink',
  'flexNegative',
  'fontWeight',
  'gridRowEnd',
  'gridRowSpan',
  'gridRowStart',
  'gridColumnEnd',
  'gridColumnSpan',
  'gridColumnStart',
  'lineClamp',
  'lineHeight',
  'opacity',
  'order',
  'orphans',
  'tabSize',
  'widows',
  'zIndex',
  'zoom',
  'fillOpacity',
  'floodOpacity',
  'stopOpacity',
  'strokeDasharray',
  'strokeDashoffset',
  'strokeMiterlimit',
  'strokeOpacity',
  'strokeWidth',
  'scale',
  'scaleX',
  'scaleY',
  'scaleZ'
];

// https://github.com/necolas/react-native-web/blob/36dacb2052efdab2a28655773dc76934157d9134/packages/react-native-web/src/exports/StyleSheet/constants.js
const SHORTHAND_EXPANSIONS = {
  borderColor: [
    'borderTopColor',
    'borderRightColor',
    'borderBottomColor',
    'borderLeftColor'
  ],
  borderRadius: [
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderBottomRightRadius',
    'borderBottomLeftRadius'
  ],
  borderStyle: [
    'borderTopStyle',
    'borderRightStyle',
    'borderBottomStyle',
    'borderLeftStyle'
  ],
  borderWidth: [
    'borderTopWidth',
    'borderRightWidth',
    'borderBottomWidth',
    'borderLeftWidth'
  ],
  margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
  overflow: ['overflowX', 'overflowY'],
  overscrollBehavior: ['overscrollBehaviorX', 'overscrollBehaviorY'],
  padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft']
};

const LEGACY_PSEUDO_ELEMENTS = [
  ':before',
  ':after',
  ':first-letter',
  ':first-line'
];

const BASE_FONT_SIZE_PX = 16;

module.exports = {
  UNITLESS_NUMBERS,
  SHORTHAND_EXPANSIONS,
  LEGACY_PSEUDO_ELEMENTS,
  BASE_FONT_SIZE_PX
};
