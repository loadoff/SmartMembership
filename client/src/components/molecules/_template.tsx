/**
 * moleculeテンプレート
 * - molecule(分子) では atom および基本タグのみ使用できる
 * - molecule(分子) では汎用的に使用できるパーツを作成
 * - molecule(分子) では基本的に TypeScript は組み込まず、必要な値は props で受け取る
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

interface MoleculeProps {
  children?: ReactNode;
  colorPalette: ColorPalette;
  language?: Languages;
  displaySize?: DisplaySize;
}

/**
 * 【分子】 moleculeテンプレート
 * @param {ReactNode} children - 【必須】 子要素
 * @param {ColorPalette} colorPalette - 【必須】 カラーパレット
 * @param {Languages} language - 表示言語
 * @param {DisplaySize} displaySize - 表示画面サイズ
 * @returns コンポーネント
 */
export const Molecule: React.FC<MoleculeProps> = ({
  children,
  colorPalette,
}: MoleculeProps) => {
  return <Wrap colorPalette={colorPalette}>{children}</Wrap>;
};
