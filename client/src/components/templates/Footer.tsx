/**
 * ページフッター
 * - template(テンプレート) では organism, molecule, atom および基本タグのみ使用できる
 * - template(テンプレート) では固有の文言を含めた Page(ページ) で使用するパーツを作成
 * - template(テンプレート) では Redux のロジックと TypeScript による動作を組み込む
 */
import { ColorPalette, DisplaySize } from 'commons';
import React from 'react';
import {
  colorPaletteSelector,
  displaySizeSelector,
  useTypeSelector,
} from 'stores';
import styled from 'styled-components';

interface WrapProps {
  colorPalette: ColorPalette;
  displaySize: DisplaySize;
}

const Wrap = styled.div<WrapProps>`
  box-sizing: border-box;
  background: ${({ colorPalette }) => colorPalette.lightTone};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 8px;
  border-top: 1px solid ${({ colorPalette }) => colorPalette.grayTone};
  font-size: ${({ displaySize }) =>
    displaySize === DisplaySize.LARGE ? 12 : 8}px;
  text-align: center;
  letter-spacing: 1px;
  line-height: 1.3;
`;

/**
 * 【テンプレート】 ページフッター
 * @returns コンポーネント
 */
export const Footer: React.FC = () => {
  const colorPalette = useTypeSelector(colorPaletteSelector);
  const displaySize = useTypeSelector(displaySizeSelector);

  return (
    <Wrap colorPalette={colorPalette} displaySize={displaySize}>
      <div>FotterMessage</div>
    </Wrap>
  );
};
