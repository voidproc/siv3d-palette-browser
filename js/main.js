/**
 * ある色に対してコントラストの高い色を得る.
 * 例えば背景色に対する見やすい文字色として.
 */
const ContrastColor = {
  default: {
    light: '#efefef',
    dark: '#222',
  },

  /**
   * ある色 `color` に対して、`light` と `dark` のうちコントラストが高い方の色を得る.
   * @param {string} color 
   * @param {string} light 
   * @param {string} dark 
   * @returns {string}
   */
  get(color, light=ContrastColor.default.light, dark=ContrastColor.default.dark) {
    return chroma(color).luminance() > 0.5 ? dark : light;
  },
};

/**
 * ある色について、そのRGB成分（0～1で表される実数値）それぞれをprecisionで指定される精度とした色のHEXカラーコードを返す
 * @param {string} colorHex 元となる色のHEXカラーコード
 * @param {number} precision 精度（小数点以下の桁数）
 * @returns {string}
 */
function precisionColorHex(colorText, precision) {
  const [r, g, b] = chroma(colorText).gl();
  return chroma.gl(
    Number(r.toFixed(precision)),
    Number(g.toFixed(precision)),
    Number(b.toFixed(precision)),
  ).hex();
}

/**
 * OpenSiv3DのPaletteとwebカラー名（named-color）
 */
const Palette = [ 
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
];

/**
 * 色の表現方法
 */
const ColorExpression = {
  list: [
    'Palette',
    'Color',
    'ColorF',
    'Hex',
    'Web',
  ],

  colorNameMap_: {},

  getBracket_(useParentheses) {
    return useParentheses ? { open: '(', close: ')' } : { open: '{ ', close: ' }' };
  },

  getColorName_(colorHex) {
    return this.colorNameMap_[colorHex];
  },

  get(colorHex, alphaNum=null, useParentheses=false) {
    return {
      /**
       * OpenSiv3DのPaletteで定義されている名称での表現
       * 対応する名称が存在しない場合は Color{ r, g, b } での表現
       */
      palette() {
        const name = ColorExpression.getColorName_(colorHex);
        if (!name) {
          return ColorExpression.get(colorHex, alphaNum, useParentheses).color();
        }

        const alphaText = alphaNum !== null ? `.withAlpha(${alphaNum})` : '';
        return `Palette::${name.charAt(0).toUpperCase()}${name.substring(1)}${alphaText}`;
      },

      /**
       * webカラー名での表現
       * 対応する名称が存在しない場合は Color{ r, g, b} での表現
       */
      web() {
        const name = ColorExpression.getColorName_(colorHex);
        if (!name) {
          return ColorExpression.get(colorHex, alphaNum, useParentheses).color();
        }
        return name;
      },

      /**
       * Color{ r, g, b } での表現
       */
      color() {
        const [r, g, b] = chroma(colorHex).rgb();
        const alphaText = alphaNum !== null ? `, ${alphaNum}` : '';
        const bracket = ColorExpression.getBracket_(useParentheses);
        return `Color${bracket.open}${r}, ${g}, ${b}${alphaText}${bracket.close}`;
      },

      /**
       * ColorF{ r, g, b } での表現
       * @param {number} precision 精度（小数点以下の桁数）
       */
      colorf(precision) {
        const [r, g, b] = chroma(colorHex).gl();
        const alphaText = alphaNum !== null ? `, ${alphaNum.toFixed(precision)}` : '';
        const bracket = ColorExpression.getBracket_(useParentheses);
        return `ColorF${bracket.open}${r.toFixed(precision)}, ${g.toFixed(precision)}, ${b.toFixed(precision)}${alphaText}${bracket.close}`;
      },

      /**
       * HEXカラーコードでの表現
       */
      hex() {
        if (alphaNum !== null) {
          const bracket = ColorExpression.getBracket_(useParentheses);
          return `Color${bracket.open}U"${colorHex}"${bracket.close}.withAlpha(${alphaNum})`;
        }
        return colorHex;
      }
    }
  },

  init() {
    for (const color of Palette) {
      this.colorNameMap_[chroma(color.web).hex()] = color.web;
    }
  }
};

ColorExpression.init();


Vue.component('app-title', {
  props: [
    'bgColor',
  ],
  computed: {
    bgStyle() {
      return {
        backgroundColor: this.bgColor,
      }
    },
    textStyle() {
      return {
        color: ContrastColor.get(this.bgColor),
      }
    }
  },
  template: `
    <section class="hero" :style="bgStyle">
      <div class="hero-body logo-area">
        <p class="title logo-title has-text-centered has-text-weight-bold" :style="textStyle">
          <span class="icon-text">
            <span class="icon">
              <i class="fa-solid fa-palette"></i>
            </span>
            <span>Siv3D Palette Browser</span>
          </span>
        </p>
      </div>
    </section>
  `,
});

Vue.component('color-element-input', {
  props: {
    label: {},
    min: {},
    max: {},
    step: {},
    value: {},
    enabled: { default: true },
  },
  template: `
    <div class="field is-grouped">
      <div class="control">
        <input type="range" :min="min" :max="max" :step="step" :value="value" :disabled="!enabled" @input="$emit('input', $event.target.value)">
      </div>
      <div class="field has-addons">
        <div class="control">
          <a class="button is-static is-small">
            {{label}}
          </a>
        </div>
        <div class="control">
          <input class="input is-small" type="number" :min="min" :max="max" :value="value" :disabled="!enabled" @input="$emit('input', $event.target.value)">
        </div>
      </div>
    </div>
  `,
});

const vue = {
  el: '#app',
  data() {
    return {
      searchText: '',
      selectedColorHex: '#000000',
      alpha: 255,
      bgColor: '#fafafa',
      isVisibleControlArea: false,
      isVisibleEditor: false,
      config: {
        expression: 'palette',  // 'palette'(fallback to color) | 'color' | 'colorf' | 'hex' | 'web'
        precision: 2,
        withAlpha: false,
        useParentheses: false,
      },
      history: [],
      expressionLabels: ColorExpression.list,
      palette: Palette,
      toast: {
        text: 'Copied.',
      },
    }
  },

  created() {
    // URLパラメータを参照して設定を行う
    // 設定可能なクエリ:
    // opencontrol=1  Controlエリアを開いた状態にする
    // openeditor=1   ColorEditorエリアを開いた状態にする
    // color=色名     指定した色を選択した状態にする

    const params = new URLSearchParams(window.location.search);

    if (params.get('opencontrol') === '1') {
      this.isVisibleControlArea = true;
    }

    if (params.get('openeditor') === '1') {
      this.isVisibleEditor = true;
    }

    const color = params.get('color');
    if (color !== null) {
      this.selectedColorHex = chroma(color).hex();
    }
  },

  computed: {
    filteredPalette() {
      if (this.searchText === '') { return this.palette; }

      return this.palette.filter(color => color.web.includes(this.searchText.toLowerCase()));
    },

    fixedAreaStyle() {
      return {
        backgroundColor: this.bgColor,
      }
    },

    configHeaderStyle() {
      return {
        color: ContrastColor.get(this.bgColor),
      }
    },

    controlAreaHeaderTextStyle() {
      return {
        textDecoration: (!this.isVisibleControlArea) ? 'underline' : 'none',
      }
    },

    editorAreaHeaderTextStyle() {
      return {
        textDecoration: (!this.isVisibleEditor) ? 'underline' : 'none',
      }
    },

    configAreaStyle() {
      return {
        borderColor: ContrastColor.get(this.bgColor),
      }
    },

    selectedColorBoxStyle() {
      let actualColorText = this.selectedColorHex;
      if (this.config.expression === 'colorf') {
        actualColorText = precisionColorHex(this.selectedColorHex, this.config.precision);
      }

      return {
        backgroundColor: actualColorText,
        color: ContrastColor.get(actualColorText),
      }
    },

    selectedColorRgb() {
      return chroma(this.selectedColorHex).rgb();
    },
  },

  methods: {
    panelStyle(colorText) {
      let actualColorText = colorText;
      if (this.config.expression === 'colorf') {
        actualColorText = precisionColorHex(colorText, this.config.precision);
      }

      return {
        backgroundColor: actualColorText,
        color: ContrastColor.get(actualColorText),
        textAlign: 'center',
      };
    },

    expressionButtonClass(expression) {
      return {
        'is-info': this.config.expression === expression.toLowerCase(),
      };
    },

    onClickExpressionButton(expression) {
      this.config.expression = expression;
    },

    onClickPanel(colorObj, event) {
      const clickedColorHex = colorObj.web !== undefined ? chroma(colorObj.web).hex() : chroma(colorObj).hex();

      // color-panelがクリックされたときのみselected-colorに反映する
      if (colorObj.web !== undefined) {
        this.selectedColorHex = clickedColorHex;
      }

      // 履歴に追加
      this.history = this.history.filter(elem => elem != clickedColorHex);
      this.history.unshift(clickedColorHex);

      // クリップボードへのコピー
      let target = event.target;
      if (target.tagName.toLowerCase() === 'span') { target = event.target.parentElement; }
      navigator.clipboard.writeText(target.title);

      // アニメーション制御
      target.classList.remove('color-panel-clicked');
      setTimeout(() => target.classList.add('color-panel-clicked'), 1);

      // toast
      this.showToast(`Copied '${target.title}' to clipboard.`)
    },

    onChangeR(value) {
      const rgb = this.selectedColorRgb;
      this.selectedColorHex = chroma([value, rgb[1], rgb[2]]).hex();
    },

    onChangeG(value) {
      const rgb = this.selectedColorRgb;
      this.selectedColorHex = chroma([rgb[0], value, rgb[2]]).hex();
    },

    onChangeB(value) {
      const rgb = this.selectedColorRgb;
      this.selectedColorHex = chroma([rgb[0], rgb[1], value]).hex();
    },

    onPickColor(event) {
      this.selectedColorHex = event.target.value;
    },

    onClickSetToBgButton() {
      const bgColor = this.selectedColorHex;
      this.bgColor = bgColor;
      document.body.style.backgroundColor = bgColor;
      document.body.style.color = ContrastColor.get(bgColor);
    },

    onClickHistoryItem(colorHex) {
      this.selectedColorHex = colorHex;
    },

    configuredColorText(colorHex) {
      const alpha = this.config.withAlpha ? this.alpha : null;
      const alphaf = this.config.withAlpha ? this.alpha / 255.0 : null;

      switch (this.config.expression) {
        case 'palette':
          return ColorExpression.get(colorHex, alpha, this.config.useParentheses).palette();
        case 'web':
          return ColorExpression.get(colorHex, alpha, this.config.useParentheses).web();
        case 'color':
          return ColorExpression.get(colorHex, alpha, this.config.useParentheses).color();
        case 'colorf':
          return ColorExpression.get(colorHex, alphaf, this.config.useParentheses).colorf(this.config.precision);
        case 'hex':
          return ColorExpression.get(colorHex, alpha, this.config.useParentheses).hex();
      }
    },

    showToast(text) {
      this.toast.text = text;

      const toastElem = document.getElementById('toast');
      toastElem.classList.remove('show-toast');
      setTimeout(() => toastElem.classList.add('show-toast'), 1);
    },
  }
};

window.onload = function () {
  vueApp = new Vue(vue);
};
