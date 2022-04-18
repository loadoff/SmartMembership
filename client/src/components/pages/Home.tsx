/**
 * 会員証ページ
 * - page(ページ) では template のみ使用できる(基本的に styled コンポーネント の生成は行わない)
 * - page(ページ) では template(テンプレート) のみを使用しページを作成
 * - page(ページ) では ページ全体に影響する最小限の TypeScript による動作を組み込む
 */
import { MainMenus } from 'commons';
import {
  Contents,
  Footer,
  Header,
  MainMenu,
  MembershipArea,
} from 'components/templates';
import React from 'react';

/**
 * 【ページ】 会員証ページ
 * @returns コンポーネント
 */
export const Home: React.FC = () => {
  return (
    <>
      <Header>{MainMenus.HOME}</Header>
      <MainMenu selectedMainMenu={MainMenus.HOME} />
      <Contents>
        <MembershipArea />
      </Contents>
      <Footer />
    </>
  );
};
