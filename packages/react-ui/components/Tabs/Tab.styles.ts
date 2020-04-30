import { css, cssName, memoizeStyle } from '../../lib/theming/Emotion';
import { shift } from '../../lib/styles/DimensionFunctions';
import * as ColorFunctions from '../../lib/styles/ColorFunctions';
import { Theme } from '../../lib/theming/Theme';

const styles = {
  root(t: Theme) {
    return css`
      border-bottom: ${t.tabBorderWidth} solid transparent;
      box-sizing: border-box;
      color: inherit;
      cursor: pointer;
      display: inline-block;
      font-size: ${t.tabFontSize};
      line-height: ${t.tabLineHeight};
      margin-left: ${t.tabPaddingX};
      margin-right: ${t.tabPaddingX};
      padding-bottom: ${shift(t.tabPaddingY, '1px')};
      padding-top: ${shift(t.tabPaddingY, '-1px')};
      position: relative;
      text-decoration: inherit;
      transition: border-bottom 0.2s ease-out;

      &:hover {
        outline: inherit;
        border-bottom: ${t.tabBorderWidth} solid ${t.tabColorHover};
      }

      &:focus {
        outline: inherit;
      }
    `;
  },

  vertical(t: Theme) {
    return css`
      border-bottom: none;
      border-left: ${t.tabBorderWidth} solid transparent;
      display: block;
      margin-left: 0;
      margin-right: 0;
      padding-left: ${shift(t.tabPaddingX, `-${t.tabBorderWidth}`)};
      padding-right: ${t.tabPaddingX};

      ${cssName(styles.root(t))}&:hover {
        border-bottom: none;
        border-left: ${t.tabBorderWidth} solid ${t.tabColorHover};
      }

      ${cssName(styles.focus(t))} {
        bottom: 0;
        left: -${t.tabBorderWidth};
        right: 0;
      }
    `;
  },

  active(t: Theme) {
    return css`
      &:hover {
        cursor: default;
        border-bottom: ${t.tabBorderWidth} solid transparent;
      }

      &${cssName(styles.vertical(t))}:hover {
        border-left: ${t.tabBorderWidth} solid transparent;
      }
    `;
  },

  focus(t: Theme) {
    return css`
      border: ${t.tabBorderWidthFocus} solid ${t.tabColorFocus};
      bottom: -${t.tabBorderWidth};
      left: -${t.tabPaddingX};
      position: absolute;
      right: -${t.tabPaddingX};
      top: 0;
    `;
  },

  disabled(t: Theme) {
    return css`
      color: rgba(
        ${ColorFunctions.red(t.tabTextColorDefault)},
        ${ColorFunctions.green(t.tabTextColorDefault)},
        ${ColorFunctions.blue(t.tabTextColorDefault)},
        0.5
      );
      cursor: default;

      &:hover {
        border-bottom-color: transparent !important;
      }

      &${cssName(styles.vertical(t))}:hover {
        border-left-color: transparent !important;
      }
    `;
  },

  primary(t: Theme) {
    return css`
      &:hover {
        border-bottom-color: ${t.tabBorderColorHoverPrimary};
      }
      &${cssName(styles.vertical(t))}:hover {
        border-left-color: ${t.tabBorderColorHoverPrimary};
      }
    `;
  },

  success(t: Theme) {
    return css`
      &:hover {
        border-bottom-color: ${t.tabBorderColorHoverSuccess};
      }
      &${cssName(styles.vertical(t))}:hover {
        border-left-color: ${t.tabBorderColorHoverSuccess};
      }
    `;
  },

  warning(t: Theme) {
    return css`
      &:hover {
        border-bottom-color: ${t.tabBorderColorHoverWarning};
      }
      &${cssName(styles.vertical(t))}:hover {
        border-left-color: ${t.tabBorderColorHoverWarning};
      }
    `;
  },

  error(t: Theme) {
    return css`
      &:hover {
        border-bottom-color: ${t.tabBorderColorHoverError};
      }
      &${cssName(styles.vertical(t))}:hover {
        border-left-color: ${t.tabBorderColorHoverError};
      }
    `;
  },
};

export const jsStyles = memoizeStyle(styles);
