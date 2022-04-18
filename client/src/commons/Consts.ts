/**
 * 各種定数を管理
 */
import { ColorPalette } from 'commons';

/** 【enum】 表示言語 */
export enum Languages {
  JA,
  EN,
}

/** 【enum】 表示画面サイズ */
export enum DisplaySize {
  LARGE = 9999,
  MIDDLE = 840,
  SMALL = 320,
}
/** 【enum】 ページURL */
export enum UrlPath {
  HOME = '/',
  COUPON = '/coupon',
  POINT = '/point',
  POINT_LOG = '/point/log',
  HISTORY = '/history',
  PROFILE = '/profile',
  LOGOUT = '/logout',
}

/** 【enum】 ページ名 */
export enum MainMenus {
  HOME = '会員証',
  COUPON = 'クーポン',
  POINT = 'ポイント利用',
  POINT_LOG = 'ポイント履歴',
  HISTORY = '鑑賞履歴',
  PROFILE = '会員設定',
  LOGOUT = 'ログアウト',
}

/** 【定数】 基本配色 */
export const DEFAULT_COLOR_PALETTE: ColorPalette = {
  concept: '#000033',
  conceptLight: '#000099',
  wallpaper: '#F4F4F4',
  lightTone: '#FBFBFD',
  darkTone: '#0A0719',
  grayTone: '#BFBFBF',
  positive: '#4F9909',
  negative: '#C6001C',
  overlay: 'rgba(10, 7, 25, 0.4)',
};

/** 【定数】 404ページから自動でトップページに戻す時間 */
export const NOT_FOUND_TIMEOUT = 10000;

/** 【定数】 モーダル管理名 */
export const MODAL_IDENTIFIER_CLASS_NAME = 'smart-membership-modal-opened-';

/** 【定数】 オブジェクトの重なり調整 */
export const Z_INDEX = {
  mainMenu: 200,
};
