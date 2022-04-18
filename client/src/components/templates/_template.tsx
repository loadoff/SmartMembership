/**
 * templateテンプレート
 * - template(テンプレート) では organism, molecule, atom および基本タグのみ使用できる
 * - template(テンプレート) では固有の文言を含めた Page(ページ) で使用するパーツを作成
 * - template(テンプレート) では Redux のロジックと TypeScript による動作を組み込む
 */
import { ColorPalette, DisplaySize } from 'commons';
import React, { ReactNode } from 'react';
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
`;

interface TemplateProps {
  children?: ReactNode;
}

/**
 * 【テンプレート】 templateテンプレート
 * @param {ReactNode} children - 子要素
 * @returns コンポーネント
 */
export const Template: React.FC<TemplateProps> = ({
  children,
}: TemplateProps) => {
  const colorPalette = useTypeSelector(colorPaletteSelector);
  const displaySize = useTypeSelector(displaySizeSelector);

  return (
    <Wrap colorPalette={colorPalette} displaySize={displaySize}>
      {children}
    </Wrap>
  );
};
