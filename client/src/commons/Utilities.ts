/**
 * 汎用関数を管理
 */

import { DisplaySize, MODAL_IDENTIFIER_CLASS_NAME } from 'commons';

/**
 * 【汎用関数】 画面表示サイズの取得
 * @param {number} width - 【必須】 ウインドウの横幅
 * @returns 画面表示サイズ
 */
export const getDisplaySize = (width: number): DisplaySize => {
  if (width <= DisplaySize.SMALL) {
    return DisplaySize.SMALL;
  } else if (width <= DisplaySize.MIDDLE) {
    return DisplaySize.MIDDLE;
  }
  return DisplaySize.LARGE;
};

/**
 * 【汎用関数】 ヘクサコード(#FFFFFF)の形からrgbaに変換する
 * @param {string} hex - 【必須】 色コード(#FFFFFF)
 * @param {number} alpha - 【必須】 アルファ値(0.5)
 * @returns rgba値
 */
export const hexToRgba = (hex: string, alpha: number): string => {
  let color = hex;
  if (hex.slice(0, 1) === '#') {
    color = hex.slice(1);
  }
  if (color.length === 3)
    color =
      color.slice(0, 1) +
      color.slice(0, 1) +
      color.slice(1, 2) +
      color.slice(1, 2) +
      color.slice(2, 3) +
      color.slice(2, 3);
  return `rgba(${[color.slice(0, 2), color.slice(2, 4), color.slice(4, 6)]
    .map((str: string) => {
      return parseInt(str, 16);
    })
    .join(',')},${alpha})`;
};

/**
 * 【汎用関数】 モーダル表示時のBodyのスクロールの表示切り替え
 * @param {boolean} isOpen - 【必須】 モーダル表示時フラグ
 * @param {string} uniqueId - 【必須】 モーダルの識別文字列
 */
export const setModalOpenClassToBody = (
  isOpen: boolean,
  uniqueId: string,
): void => {
  const body = document.querySelector('body');
  if (body) {
    isOpen
      ? body.classList.add(MODAL_IDENTIFIER_CLASS_NAME + uniqueId)
      : body.classList.remove(MODAL_IDENTIFIER_CLASS_NAME + uniqueId);
    body.style.overflow =
      body.className.indexOf(MODAL_IDENTIFIER_CLASS_NAME) >= 0 ? 'hidden' : '';
  }
};
