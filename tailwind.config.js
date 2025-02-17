module.exports = {
  important: true,
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'

  theme: {
    extend: {
      boxShadow: {
        drop: '0 2px 8px 0 rgba(0,0,0,0.14)',
        white: '0px 1px 7px 0px rgba(255,255,255,255.75)',
      },
      backgroundImage: {
        patternLight: "url('/patterns/double-bubble-outline.png')",
        patternDark: "url('/patterns/double-bubble-dark.png')",
      },

      backgroundImage: (theme) => ({
        profitcreations: "url('/images/bg/header-2_4x.webp')",
        free1: "url('/images/bg/freeimg_580291freejpg850_4x.jpg')",
        check: "url('/icons/check.svg')",
        landscape: "url('/images/landscape/2.jpg')",
        pt: "url('/images/flags/PT.png')",
        nl: "url('/images/flags/NL.png')",
        en: "url('/images/flags/GB.png')",
        audio: "url('/images/svg-loaders/audio.svg')",
        rings: "url('/images/svg-loaders/rings.svg')",
        rings2: "url('/images/svg-loaders/rings2.svg')",
        grid: "url('/images/svg-loaders/grid.svg')",
        hearts: "url('/images/svg-loaders/hearts.svg')",
        oval: "url('/images/svg-loaders/oval.svg')",
        'three-dots': "url('/images/svg-loaders/three-dots.svg')",
        'spinning-circles': "url('/images/svg-loaders/spinning-circles.svg')",
        puff: "url('/images/svg-loaders/puff.svg')",
        circles: "url('/images/svg-loaders/circles.svg')",
        'tail-spin': "url('/images/svg-loaders/tail-spin.svg')",
        bars: "url('/images/svg-loaders/bars.svg')",
        'ball-triangle': "url('/images/svg-loaders/ball-triangle.svg')",
      }),
      zIndex: {
        60: 60,
        70: 70,
        80: 80,
        90: 90,
      },
      width: {
        '300px': '300px',
        '275px': '275px',
      },
    },
    textIndent: {
      // defaults to {}
      1: '0.25rem',
      2: '0.5rem',
    },
    textShadow: {
      // defaults to {}
      default: '0 2px 5px rgba(0, 0, 0, 0.5)',
      lg: '0 2px 10px rgba(0, 0, 0, 0.5)',
      1: '4px 4px 4px #aaa',
    },
    textDecorationStyle: {
      // defaults to these values
      solid: 'solid',
      double: 'double',
      dotted: 'dotted',
      dashed: 'dashed',
      wavy: 'wavy',
    },
    textDecorationColor: {
      // defaults to theme => theme('colors')
      red: '#f00',
      green: '#0f0',
      blue: '#00f',
    },
    fontVariantCaps: {
      // defaults to these values
      normal: 'normal',
      small: 'small-caps',
      'all-small': 'all-small-caps',
      petite: 'petite-caps',
      unicase: 'unicase',
      titling: 'titling-caps',
    },
    fontVariantNumeric: {
      // defaults to these values
      normal: 'normal',
      ordinal: 'ordinal',
      'slashed-zero': 'slashed-zero',
      lining: 'lining-nums',
      oldstyle: 'oldstyle-nums',
      proportional: 'proportional-nums',
      tabular: 'tabular-nums',
      'diagonal-fractions': 'diagonal-fractions',
      'stacked-fractions': 'stacked-fractions',
    },
    fontVariantLigatures: {
      // defaults to these values
      normal: 'normal',
      none: 'none',
      common: 'common-ligatures',
      'no-common': 'no-common-ligatures',
      discretionary: 'discretionary-ligatures',
      'no-discretionary': 'no-discretionary-ligatures',
      historical: 'historical-ligatures',
      'no-historical': 'no-historical-ligatures',
      contextual: 'contextual',
      'no-contextual': 'no-contextual',
    },
    textRendering: {
      // defaults to these values
      'rendering-auto': 'auto',
      'optimize-legibility': 'optimizeLegibility',
      'optimize-speed': 'optimizeSpeed',
      'geometric-precision': 'geometricPrecision',
    },
    textStyles: (theme) => ({
      // defaults to {}
      heading: {
        output: false, // this means there won't be a "heading" component in the CSS, but it can be extended
        fontWeight: theme('fontWeight.bold'),
        lineHeight: theme('lineHeight.tight'),
      },
      h1: {
        extends: 'heading', // this means all the styles in "heading" will be copied here; "extends" can also be an array to extend multiple text styles
        fontSize: theme('fontSize.5xl'),
        '@screen sm': {
          fontSize: theme('fontSize.6xl'),
        },
      },
      h2: {
        extends: 'heading',
        fontSize: theme('fontSize.4xl'),
        '@screen sm': {
          fontSize: theme('fontSize.5xl'),
        },
      },
      h3: {
        extends: 'heading',
        fontSize: theme('fontSize.4xl'),
      },
      h4: {
        extends: 'heading',
        fontSize: theme('fontSize.3xl'),
      },
      h5: {
        extends: 'heading',
        fontSize: theme('fontSize.2xl'),
      },
      h6: {
        extends: 'heading',
        fontSize: theme('fontSize.xl'),
      },
      link: {
        fontWeight: theme('fontWeight.bold'),
        color: theme('colors.blue.400'),
        '&:hover': {
          color: theme('colors.blue.600'),
          textDecoration: 'underline',
        },
      },
      richText: {
        fontWeight: theme('fontWeight.normal'),
        fontSize: theme('fontSize.base'),
        lineHeight: theme('lineHeight.relaxed'),
        '> * + *': {
          marginTop: '1em',
        },
        h1: {
          extends: 'h1',
        },
        h2: {
          extends: 'h2',
        },
        h3: {
          extends: 'h3',
        },
        h4: {
          extends: 'h4',
        },
        h5: {
          extends: 'h5',
        },
        h6: {
          extends: 'h6',
        },
        ul: {
          listStyleType: 'disc',
        },
        ol: {
          listStyleType: 'decimal',
        },
        a: {
          extends: 'link',
        },
        'b, strong': {
          fontWeight: theme('fontWeight.bold'),
        },
        'i, em': {
          fontStyle: 'italic',
        },
      },
    }),
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      inset: ['checked'],
      zIndex: ['hover', 'active'],
      backgroundImage: ['dark'],
    },
    // all the following default to ['responsive']
    textIndent: ['responsive'],
    textShadow: ['responsive', 'dark', 'hover'],
    textDecorationStyle: ['responsive'],
    textDecorationColor: ['responsive'],
    ellipsis: ['responsive'],
    hyphens: ['responsive'],
    kerning: ['responsive'],
    textUnset: ['responsive'],
    fontVariantCaps: ['responsive'],
    fontVariantNumeric: ['responsive'],
    fontVariantLigatures: ['responsive'],
    textRendering: ['responsive'],
    width: ['responsive'],
  },
  plugins: [
    require('tailwindcss-elevation')(['responsive', 'group-hover', 'focus-within', 'hover', 'focus']),
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/forms'),
    require('tailwindcss-typography')({
      // all these options default to the values specified here
      ellipsis: true, // whether to generate ellipsis utilities
      hyphens: true, // whether to generate hyphenation utilities
      kerning: true, // whether to generate kerning utilities
      textUnset: true, // whether to generate utilities to unset text properties
      componentPrefix: 'c-', // the prefix to use for text style classes
    }),
    require('tailwind-nord'),
  ],
  future: {
    purgeLayersByDefault: true,
  },
};
