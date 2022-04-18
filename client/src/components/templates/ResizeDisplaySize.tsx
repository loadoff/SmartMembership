/**
 * ディスプレイの横幅変更時のイベント
 * - template(テンプレート) では organism, molecule, atom および基本タグのみ使用できる
 * - template(テンプレート) では固有の文言を含めた Page(ページ) で使用するパーツを作成
 * - template(テンプレート) では Redux のロジックと TypeScript による動作を組み込む
 */
import { getDisplaySize } from 'commons';
import React, { useEffect } from 'react';
import {
  BasicSlice,
  displaySizeSelector,
  useTypeDispatch,
  useTypeSelector,
} from 'stores';

/**
 * 【テンプレート】 ディスプレイの横幅変更時のイベント
 * @returns コンポーネント
 */
export const ResizeDisplaySize: React.FC = () => {
  const dispatch = useTypeDispatch();
  const displaySize = useTypeSelector(displaySizeSelector);

  useEffect(() => {
    const resizeDisplay = (): void => {
      const newDisplaySize = getDisplaySize(window.innerWidth);
      if (displaySize !== newDisplaySize) {
        dispatch(BasicSlice.actions.changeDisplaySize(newDisplaySize));
      }
    };
    resizeDisplay();
    window.addEventListener('resize', resizeDisplay);
    return () => window.removeEventListener('resize', resizeDisplay);
  }, [displaySize]);

  return null;
};
