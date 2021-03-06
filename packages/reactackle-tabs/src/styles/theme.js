'use strict';

import {
  baseModule,
  oneAndHalfBaseModule,
  sixBaseModule,
  colorTransparent,
  colorMain,
  bodyFontColor,
  bodyFontColorAlt,
  fontSizeBody,
  fontWeightNormal,
  fontWeightSemibold,
} from 'reactackle-core';

export default {
  tabs: {
    style: {
      light: {
        backgroundColor: colorTransparent,
      },

      dark: {
        backgroundColor: colorTransparent,
      },
    },
  },

  tab: {
    fontSize: fontSizeBody,
    lineHeight: 1.25,
    textTransform: 'uppercase',
    paddingX: oneAndHalfBaseModule,
    paddingY: baseModule,
    minHeight: sixBaseModule,
    minWidth: 120,
    maxWidth: 320,

    style: {
      light: {
        fontColor: bodyFontColorAlt,
        backgroundColor: colorTransparent,
        fontWeight: fontWeightNormal,
        opacity: 0.8,

        hover: {
          fontColor: bodyFontColorAlt,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          fontWeight: fontWeightNormal,
          opacity: 0.9,
        },

        focus: {
          fontColor: bodyFontColorAlt,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          fontWeight: fontWeightNormal,
          opacity: 1,
        },

        selected: {
          fontColor: bodyFontColorAlt,
          backgroundColor: colorTransparent,
          fontWeight: fontWeightSemibold,
          opacity: 1,
        },
      },

      dark: {
        fontColor: bodyFontColor,
        backgroundColor: colorTransparent,
        fontWeight: fontWeightNormal,
        opacity: 0.8,

        hover: {
          fontColor: bodyFontColor,
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          fontWeight: fontWeightNormal,
          opacity: 0.9,
        },

        focus: {
          fontColor: bodyFontColor,
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          fontWeight: fontWeightNormal,
          opacity: 1,
        },

        selected: {
          fontColor: bodyFontColor,
          backgroundColor: colorTransparent,
          fontWeight: fontWeightSemibold,
          opacity: 1,
        },
      },
    },
  },

  icon: {
    width: 24,
    height: 24,
    imgSize: 24,
    iconTextSpacing: baseModule,

    style: {
      light: {
        color: 'inherit',

        hover: {
          color: 'inherit',
        },

        focus: {
          color: 'inherit',
        },

        selected: {
          color: 'inherit',
        },
      },

      dark: {
        color: 'inherit',

        hover: {
          color: 'inherit',
        },

        focus: {
          color: 'inherit',
        },

        selected: {
          color: 'inherit',
        },
      },
    },
  },

  bar: {
    thickness: 4,

    style: {
      light: {
        backgroundColor: colorMain,
      },

      dark: {
        backgroundColor: colorMain,
      },
    },
  },
};
