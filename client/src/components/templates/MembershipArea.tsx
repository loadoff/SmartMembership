/**
 * 会員情報表示エリア
 * - template(テンプレート) では organism, molecule, atom および基本タグのみ使用できる
 * - template(テンプレート) では固有の文言を含めた Page(ページ) で使用するパーツを作成
 * - template(テンプレート) では Redux のロジックと TypeScript による動作を組み込む
 */
import { MembershipPanel } from 'components/organisms';
import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

/**
 * 【テンプレート】 会員情報表示エリア
 * @returns コンポーネント
 */
export const MembershipArea: React.FC = () => {
  return (
    <Wrap>
      <MembershipPanel />
    </Wrap>
  );
};
