/**
 * コンテンツ表示エリア
 * - template(テンプレート) では organism, molecule, atom および基本タグのみ使用できる
 * - template(テンプレート) では固有の文言を含めた Page(ページ) で使用するパーツを作成
 * - template(テンプレート) では Redux のロジックと TypeScript による動作を組み込む
 */
import { DisplaySize } from 'commons';
import React, { ReactNode } from 'react';
import {
  displaySizeSelector,
  mainMenuOpenSelector,
  useTypeSelector,
} from 'stores';
import styled from 'styled-components';

interface WrapProps {
  displaySize: DisplaySize;
  mainMenuOpen: boolean;
}

const Wrap = styled.div<WrapProps>`
  box-sizing: border-box;
  width: ${({ mainMenuOpen }) =>
    mainMenuOpen ? 'calc(100% - 270px)' : 'calc(100% - 30px)'};
  ${({ displaySize }) =>
    displaySize !== DisplaySize.LARGE && 'min-width: calc(100% - 30px);'}
  min-height: calc(100vh - 38px - 56px);
  padding: 18px 16px;
  margin: 0 0 0 ${({ mainMenuOpen }) => (mainMenuOpen ? '270px' : '30px')};
  ${({ displaySize }) =>
    displaySize !== DisplaySize.LARGE && 'margin: 0 0 0 30px;'}
  transition: 0.3s ease-in-out;
`;

interface ContentsProps {
  children?: ReactNode;
}

/**
 * 【テンプレート】 コンテンツ表示エリア
 * @param {ReactNode} children - 子要素
 * @returns コンポーネント
 */
export const Contents: React.FC<ContentsProps> = ({
  children,
}: ContentsProps) => {
  const displaySize = useTypeSelector(displaySizeSelector);
  const mainMenuOpen = useTypeSelector(mainMenuOpenSelector);

  return (
    <Wrap displaySize={displaySize} mainMenuOpen={mainMenuOpen}>
      {children}
    </Wrap>
  );
};
