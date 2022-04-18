/**
 * ページの基本情報を管理・操作
 */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ColorPalette,
  DEFAULT_COLOR_PALETTE,
  DisplaySize,
  Languages,
} from 'commons';
import { DispatchState, SelectorState } from 'stores';

export interface BasicState {
  language: Languages;
  displaySize: DisplaySize;
  colorPalette: ColorPalette;
  loadingMessage: string;
  mainMenuOpen: boolean;
  sample: string;
}

const initialState: BasicState = {
  language: Languages.JA,
  displaySize: DisplaySize.LARGE,
  colorPalette: DEFAULT_COLOR_PALETTE,
  loadingMessage: '',
  mainMenuOpen: true,
  sample: '',
};

/**
 * Promiseサンプル
 * @param {string} sample - サンプル引数
 * @returns 戻り値
 */
export const promiseSample = createAsyncThunk<
  { sample: string },
  { sample: string },
  { dispatch: DispatchState; state: SelectorState }
>('sample/fetch', async (props, thunkApi) => {
  thunkApi.dispatch(BasicSlice.actions.changeLoadingMessage('Now loading...'));
  await new Promise((resolve) => setTimeout(resolve, 1000));
  thunkApi.dispatch(BasicSlice.actions.changeLoadingMessage(''));
  return { sample: 'successed' };
});

export const BasicSlice = createSlice({
  name: 'basic',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<Languages>) => {
      state.language = action.payload;
    },
    changeDisplaySize: (state, action: PayloadAction<DisplaySize>) => {
      state.displaySize = action.payload;
    },
    changeColorPalette: (state, action: PayloadAction<ColorPalette>) => {
      state.colorPalette = action.payload;
    },
    changeLoadingMessage: (state, action: PayloadAction<string>) => {
      state.loadingMessage = action.payload;
    },
    changeMainMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.mainMenuOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(promiseSample.fulfilled, (state, action) => {
      state.sample = action.payload.sample;
    });
    builder.addCase(promiseSample.rejected, (state, action) => {
      state.sample = String(action.error);
    });
  },
});
