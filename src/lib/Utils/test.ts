import { cssVar } from 'polished';
import { hexRgb } from './color';

const remToPx = (remVal: string | number) => {
  return parseFloat((remVal as string).slice(0, -3)) * 16 + 'px';
};

// all of these methods are helper functions for cypress test files
export class Test {
  // turn hex to rgb or rgba
  static color(inputColor: string) {
    const cssColor = cssVar(`--colors-${inputColor}`);
    if ((cssColor as string).charAt(0) === '#') {
      const rgbObj = hexRgb(cssColor as string);
      const r = rgbObj.red;
      const g = rgbObj.green;
      const b = rgbObj.blue;
      const a = rgbObj.alpha;
      if ((cssColor as string).length > 7) {
        return `rgba(${r}, ${g}, ${b}, ${a})`;
      }
      return `rgb(${r}, ${g}, ${b})`;
    }
    return cssColor;
  }

  static size(inputSize: string) {
    const inputArr = inputSize.split(' ');
    if (inputArr.length === 1) {
      const cssSpace = cssVar(`--sizes-${inputSize}`);
      return remToPx(cssSpace);
    }
    for (let i = 0; i < inputArr.length; i++) {
      if (Number.isInteger(parseInt(inputArr[i]))) {
        inputArr[i] = (cssVar(`--sizes-${inputArr[i]}`) as string).slice(0, -3);
      }
    }
    return eval(inputArr.join('')) * 16 + 'px';
  }

  static space(inputSpace: string) {
    const inputArr = inputSpace.split(' ');
    if (inputArr.length === 1) {
      const cssSpace = cssVar(`--space-${inputSpace}`);
      return remToPx(cssSpace);
    }
    for (let i = 0; i < inputArr.length; i++) {
      if (Number.isInteger(parseInt(inputArr[i]))) {
        inputArr[i] = (cssVar(`--space-${inputArr[i]}`) as string).slice(0, -3);
      }
    }
    return eval(inputArr.join('')) * 16 + 'px';
  }

  static fontSize(inputFontSize: string) {
    const cssFontSize = cssVar(`--fontSizes-${inputFontSize}`);
    return remToPx(cssFontSize);
  }

  static borderRadius(inputBorderRadius: string) {
    const cssBorderRadius = cssVar(`--radii-${inputBorderRadius}`);
    return cssBorderRadius;
  }
}
