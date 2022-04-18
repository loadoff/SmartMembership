/**
 * 404警告エリア
 * - template(テンプレート) では organism, molecule, atom および基本タグのみ使用できる
 * - template(テンプレート) では固有の文言を含めた Page(ページ) で使用するパーツを作成
 * - template(テンプレート) では Redux のロジックと TypeScript による動作を組み込む
 */
import { NotFoundMessage } from 'components/organisms';
import React from 'react';

/**
 * 【テンプレート】404警告エリア
 * @returns コンポーネント
 */
export const NotFoundArea: React.FC = () => {
  return <NotFoundMessage />;
};
