/**
 * 壁紙
 * - template(テンプレート) では organism, molecule, atom および基本タグのみ使用できる
 * - template(テンプレート) では固有の文言を含めた Page(ページ) で使用するパーツを作成
 * - template(テンプレート) では Redux のロジックと TypeScript による動作を組み込む
 */
import { ColorPalette } from 'commons';
import React, { ReactNode } from 'react';
import { colorPaletteSelector, useTypeSelector } from 'stores';
import styled from 'styled-components';

interface WrapProps {
  colorPalette: ColorPalette;
}

const Wrap = styled.div<WrapProps>`
  box-sizing: border-box;
  display: block;
  background-color: ${({ colorPalette }) => colorPalette.wallpaper};
  transition: 0.3s ease-in-out;
`;

const Contents = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`;

interface WallpaperProps {
  children?: ReactNode;
}

/**
 * 【テンプレート】 壁紙
 * @param {ReactNode} children - 子要素
 * @returns コンポーネント
 */
export const Wallpaper: React.FC<WallpaperProps> = ({
  children,
}: WallpaperProps) => {
  const colorPalette = useTypeSelector(colorPaletteSelector);

  return (
    <Wrap colorPalette={colorPalette}>
      <Contents>{children}</Contents>
    </Wrap>
  );
};
