/**
 * Reduxを利用するための基本パッケージ
 */
import { configureStore } from '@reduxjs/toolkit';
import { ColorPalette, DisplaySize, Languages } from 'commons';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { BasicSlice } from './BasicSlice';

// Providerに渡すstore
export const store = configureStore({
  reducer: {
    basic: BasicSlice.reducer,
  },
});

// 型付けがされたuseDispatch
export type DispatchState = typeof store.dispatch;
export const useTypeDispatch = (): DispatchState =>
  useDispatch<DispatchState>();

// 型付けがされたuseSelector
export type SelectorState = ReturnType<typeof store.getState>;
export const useTypeSelector: TypedUseSelectorHook<SelectorState> = useSelector;

// useSelectorで利用するセレクタ(Basic)
export const languageSelector = (state: SelectorState): Languages =>
  state.basic.language;
export const displaySizeSelector = (state: SelectorState): DisplaySize =>
  state.basic.displaySize;
export const colorPaletteSelector = (state: SelectorState): ColorPalette =>
  state.basic.colorPalette;
export const mainMenuOpenSelector = (state: SelectorState): boolean =>
  state.basic.mainMenuOpen;
