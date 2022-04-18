/**
 * クーポンページ
 * - page(ページ) では template のみ使用できる(基本的に styled コンポーネント の生成は行わない)
 * - page(ページ) では template(テンプレート) のみを使用しページを作成
 * - page(ページ) では ページ全体に影響する最小限の TypeScript による動作を組み込む
 */
import { MainMenus } from 'commons';
import { Contents, Footer, Header, MainMenu } from 'components/templates';
import React from 'react';

/**
 * 【ページ】 クーポンページ
 * @returns コンポーネント
 */
export const Coupon: React.FC = () => {
  return (
    <>
      <Header>{MainMenus.COUPON}</Header>
      <MainMenu selectedMainMenu={MainMenus.COUPON} />
      <Contents></Contents>
      <Footer />
    </>
  );
};
