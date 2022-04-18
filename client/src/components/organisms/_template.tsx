/**
 * organismテンプレート
 * - organism(有機体) では別の organism, molecule, atom および基本タグのみ使用できる
 * - organism(有機体) では固有の文言を含めたパーツを作成
 * - organism(有機体) では Redux のロジックと TypeScript による動作を組み込む
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
`;

interface OrganismProps {
  children?: ReactNode;
}

/**
 * 【有機体】 organismテンプレート
 * @param {ReactNode} children - 子要素
 * @returns コンポーネント
 */
export const Organism: React.FC<OrganismProps> = ({
  children,
}: OrganismProps) => {
  const colorPalette = useTypeSelector(colorPaletteSelector);

  return <Wrap colorPalette={colorPalette}>{children}</Wrap>;
};
