/**
 * atomテンプレート
 * - atom(原子) では基本タグのみ使用できる
 * - atom(原子) では汎用的に使用できるパーツを作成
 * - atom(原子) では基本的に TypeScript は組み込まず、必要な値は props で受け取る
 */
import { ColorPalette, DisplaySize, Languages } from 'commons';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface WrapProps {
  colorPalette: ColorPalette;
}

const Wrap = styled.div<WrapProps>`
  box-sizing: border-box;
`;

interface AtomProps {
  children: ReactNode;
  colorPalette: ColorPalette;
  language?: Languages;
  displaySize?: DisplaySize;
}

/**
 * 【原子】 atomテンプレート
 * @param {ReactNode} children - 【必須】 子要素
 * @param {ColorPalette} colorPalette - 【必須】 カラーパレット
 * @param {Languages} language - 表示言語
 * @param {DisplaySize} displaySize - 表示画面サイズ
 * @returns コンポーネント
 */
export const Atom: React.FC<AtomProps> = ({
  children,
  colorPalette,
}: AtomProps) => {
  return <Wrap colorPalette={colorPalette}>{children}</Wrap>;
};
