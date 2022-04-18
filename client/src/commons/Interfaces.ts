/**
 * 各種データとのインターフェースを管理
 */

/** 【インターフェース】 配色情報 */
export interface ColorPalette {
  concept: string;
  conceptLight: string;
  wallpaper: string;
  lightTone: string;
  darkTone: string;
  grayTone: string;
  overlay: string;
  positive: string;
  negative: string;
}
