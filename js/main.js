const vue = {
  el: '#app',

  data() {
    return {
      searchText: '',
      selectedColorHex: '#000000',
      isVisibleControlArea: true,
      isVisibleEditor: true,
      config: {
        colorExpression: 'palette',  // 'palette'(fallback to color) | 'color' | 'colorf' | 'hex' | 'web'
        withAlpha: false,
      },
      palette: [ 
        { siv: "Black", web: "black", },
        { siv: "Dimgray", web: "dimgray", },
        { siv: "Gray", web: "gray", },
        { siv: "Darkgray", web: "darkgray", },
        { siv: "Silver", web: "silver", },
        { siv: "Lightgray", web: "lightgray", },
        { siv: "Gainsboro", web: "gainsboro", },
        { siv: "Whitesmoke", web: "whitesmoke", },
        { siv: "White", web: "white", },
        { siv: "Snow", web: "snow", },
        { siv: "Ghostwhite", web: "ghostwhite", },
        { siv: "Floralwhite", web: "floralwhite", },
        { siv: "Linen", web: "linen", },
        { siv: "Antiquewhite", web: "antiquewhite", },
        { siv: "Papayawhip", web: "papayawhip", },
        { siv: "Blanchedalmond", web: "blanchedalmond", },
        { siv: "Bisque", web: "bisque", },
        { siv: "Moccasin", web: "moccasin", },
        { siv: "Navajowhite", web: "navajowhite", },
        { siv: "Peachpuff", web: "peachpuff", },
        { siv: "Mistyrose", web: "mistyrose", },
        { siv: "Lavenderblush", web: "lavenderblush", },
        { siv: "Seashell", web: "seashell", },
        { siv: "Oldlace", web: "oldlace", },
        { siv: "Ivory", web: "ivory", },
        { siv: "Honeydew", web: "honeydew", },
        { siv: "Mintcream", web: "mintcream", },
        { siv: "Azure", web: "azure", },
        { siv: "Aliceblue", web: "aliceblue", },
        { siv: "Lavender", web: "lavender", },
        { siv: "Lightsteelblue", web: "lightsteelblue", },
        { siv: "Lightslategray", web: "lightslategray", },
        { siv: "Slategray", web: "slategray", },
        { siv: "Steelblue", web: "steelblue", },
        { siv: "Royalblue", web: "royalblue", },
        { siv: "Midnightblue", web: "midnightblue", },
        { siv: "Navy", web: "navy", },
        { siv: "Darkblue", web: "darkblue", },
        { siv: "Mediumblue", web: "mediumblue", },
        { siv: "Blue", web: "blue", },
        { siv: "Dodgerblue", web: "dodgerblue", },
        { siv: "Cornflowerblue", web: "cornflowerblue", },
        { siv: "Deepskyblue", web: "deepskyblue", },
        { siv: "Lightskyblue", web: "lightskyblue", },
        { siv: "Skyblue", web: "skyblue", },
        { siv: "Lightblue", web: "lightblue", },
        { siv: "Powderblue", web: "powderblue", },
        { siv: "Paleturquoise", web: "paleturquoise", },
        { siv: "Lightcyan", web: "lightcyan", },
        { siv: "Cyan", web: "cyan", },
        { siv: "Aqua", web: "aqua", },
        { siv: "Turquoise", web: "turquoise", },
        { siv: "Mediumturquoise", web: "mediumturquoise", },
        { siv: "Darkturquoise", web: "darkturquoise", },
        { siv: "Lightseagreen", web: "lightseagreen", },
        { siv: "Cadetblue", web: "cadetblue", },
        { siv: "Darkcyan", web: "darkcyan", },
        { siv: "Teal", web: "teal", },
        { siv: "Darkslategray", web: "darkslategray", },
        { siv: "Darkgreen", web: "darkgreen", },
        { siv: "Green", web: "green", },
        { siv: "Forestgreen", web: "forestgreen", },
        { siv: "Seagreen", web: "seagreen", },
        { siv: "Mediumseagreen", web: "mediumseagreen", },
        { siv: "Mediumaquamarine", web: "mediumaquamarine", },
        { siv: "Darkseagreen", web: "darkseagreen", },
        { siv: "Aquamarine", web: "aquamarine", },
        { siv: "Palegreen", web: "palegreen", },
        { siv: "Lightgreen", web: "lightgreen", },
        { siv: "Springgreen", web: "springgreen", },
        { siv: "Mediumspringgreen", web: "mediumspringgreen", },
        { siv: "Lawngreen", web: "lawngreen", },
        { siv: "Chartreuse", web: "chartreuse", },
        { siv: "Greenyellow", web: "greenyellow", },
        { siv: "Lime", web: "lime", },
        { siv: "Limegreen", web: "limegreen", },
        { siv: "Yellowgreen", web: "yellowgreen", },
        { siv: "Darkolivegreen", web: "darkolivegreen", },
        { siv: "Olivedrab", web: "olivedrab", },
        { siv: "Olive", web: "olive", },
        { siv: "Darkkhaki", web: "darkkhaki", },
        { siv: "Palegoldenrod", web: "palegoldenrod", },
        { siv: "Cornsilk", web: "cornsilk", },
        { siv: "Beige", web: "beige", },
        { siv: "Lightyellow", web: "lightyellow", },
        { siv: "Lightgoldenrodyellow", web: "lightgoldenrodyellow", },
        { siv: "Lemonchiffon", web: "lemonchiffon", },
        { siv: "Wheat", web: "wheat", },
        { siv: "Burlywood", web: "burlywood", },
        { siv: "Tan", web: "tan", },
        { siv: "Khaki", web: "khaki", },
        { siv: "Yellow", web: "yellow", },
        { siv: "Gold", web: "gold", },
        { siv: "Orange", web: "orange", },
        { siv: "Sandybrown", web: "sandybrown", },
        { siv: "Darkorange", web: "darkorange", },
        { siv: "Goldenrod", web: "goldenrod", },
        { siv: "Peru", web: "peru", },
        { siv: "Darkgoldenrod", web: "darkgoldenrod", },
        { siv: "Chocolate", web: "chocolate", },
        { siv: "Sienna", web: "sienna", },
        { siv: "Saddlebrown", web: "saddlebrown", },
        { siv: "Maroon", web: "maroon", },
        { siv: "Darkred", web: "darkred", },
        { siv: "Brown", web: "brown", },
        { siv: "Firebrick", web: "firebrick", },
        { siv: "Indianred", web: "indianred", },
        { siv: "Rosybrown", web: "rosybrown", },
        { siv: "Darksalmon", web: "darksalmon", },
        { siv: "Lightcoral", web: "lightcoral", },
        { siv: "Salmon", web: "salmon", },
        { siv: "Lightsalmon", web: "lightsalmon", },
        { siv: "Coral", web: "coral", },
        { siv: "Tomato", web: "tomato", },
        { siv: "Orangered", web: "orangered", },
        { siv: "Red", web: "red", },
        { siv: "Crimson", web: "crimson", },
        { siv: "Mediumvioletred", web: "mediumvioletred", },
        { siv: "Deeppink", web: "deeppink", },
        { siv: "Hotpink", web: "hotpink", },
        { siv: "Palevioletred", web: "palevioletred", },
        { siv: "Pink", web: "pink", },
        { siv: "Lightpink", web: "lightpink", },
        { siv: "Thistle", web: "thistle", },
        { siv: "Magenta", web: "magenta", },
        { siv: "Fuchsia", web: "fuchsia", },
        { siv: "Violet", web: "violet", },
        { siv: "Plum", web: "plum", },
        { siv: "Orchid", web: "orchid", },
        { siv: "Mediumorchid", web: "mediumorchid", },
        { siv: "Darkorchid", web: "darkorchid", },
        { siv: "Darkviolet", web: "darkviolet", },
        { siv: "Darkmagenta", web: "darkmagenta", },
        { siv: "Purple", web: "purple", },
        { siv: "Indigo", web: "indigo", },
        { siv: "Darkslateblue", web: "darkslateblue", },
        { siv: "Blueviolet", web: "blueviolet", },
        { siv: "Mediumpurple", web: "mediumpurple", },
        { siv: "Slateblue", web: "slateblue", },
        { siv: "Mediumslateblue", web: "mediumslateblue", },
      ],
    }
  },

  created() {
    this.paletteFromHex = {};
    for (const color of this.palette) {
      this.paletteFromHex[chroma(color.web).hex()] = color.siv;
    }
  },

  computed: {
    filteredPalette() {
      if (this.searchText === '') { return this.palette; }

      return this.palette.filter(color => color.web.includes(this.searchText.toLowerCase()));
    },

    selectedColorBoxStyle() {
      return {
        backgroundColor: this.selectedColorHex,
        color: chroma(this.selectedColorHex).luminance() > 0.5 ? '#111' : '#eee',
      }
    }
  },

  methods: {
    panelStyle(colorText) {
      return {
        backgroundColor: colorText,
        color: chroma(colorText).luminance() > 0.5 ? 'black' : 'white',
        textAlign: 'center',
      };
    },

    onClickConfigColorExpression(expression) {
      this.config.colorExpression = expression;
    },

    onClickPanel(colorObj, event) {
      if (colorObj.web !== undefined) {
        this.selectedColorHex = chroma(colorObj.web).hex();
      }

      let target = event.target;
      if (target.tagName.toLowerCase() === 'span') { target = event.target.parentElement; }

      navigator.clipboard.writeText(target.title);

      target.classList.remove('color-panel-clicked');
      setTimeout(() => target.classList.add('color-panel-clicked'), 1);
    },

    onChangeR(event) {
      const rgb = chroma(this.selectedColorHex).rgb();
      this.selectedColorHex = chroma([event.target.value, rgb[1], rgb[2]]).hex();
    },

    onChangeG(event) {
      const rgb = chroma(this.selectedColorHex).rgb();
      this.selectedColorHex = chroma([rgb[0], event.target.value, rgb[2]]).hex();
    },

    onChangeB(event) {
      const rgb = chroma(this.selectedColorHex).rgb();
      this.selectedColorHex = chroma([rgb[0], rgb[1], event.target.value]).hex();
    },

    onPickColor(event) {
      this.selectedColorHex = event.target.value;
    },

    configuredColorText(colorHex) {
      const color = chroma(colorHex);

      switch (this.config.colorExpression) {
        case 'palette':
        case 'web':
          {
            if (this.paletteFromHex[colorHex]) {
              const colorname = this.paletteFromHex[colorHex];
              if (this.config.colorExpression === 'web') {
                return colorname.toLowerCase();
              }

              const alphaText = this.config.withAlpha ? '.withAlpha(255)' : '';
              return `Palette::${colorname}${alphaText}`;
            }
          }
          // fallback to color...
        case 'color':
          {
            const rgb = color.rgb();
            const alphaText = this.config.withAlpha ? ', 255' : '';
            return `Color{ ${rgb[0]}, ${rgb[1]}, ${rgb[2]}${alphaText} }`;
          }
        case 'colorf':
          {
            const gl = color.gl();
            const alphaText = this.config.withAlpha ? ', 1.0' : '';
            return `ColorF{ ${gl[0].toFixed(4)}, ${gl[1].toFixed(4)}, ${gl[2].toFixed(4)}${alphaText} }`;
          }
        case 'hex':
          if (this.config.withAlpha) {
            return `Color{ U"${colorHex}" }.withAlpha(255)`
          }
          return colorHex;
      }
    },

  }
};

window.onload = function () {
  vueApp = new Vue(vue);
};
