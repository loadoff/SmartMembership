/**
 * ページ遷移時にスクロールをトップに移動
 * - template(テンプレート) では organism, molecule, atom および基本タグのみ使用できる
 * - template(テンプレート) では固有の文言を含めた Page(ページ) で使用するパーツを作成
 * - template(テンプレート) では Redux のロジックと TypeScript による動作を組み込む
 */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * 【テンプレート】 ページ遷移時にスクロールをトップに移動
 */
export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
