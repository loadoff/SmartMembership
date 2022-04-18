/**
 * 仕切り
 * - atom(原子) では基本タグのみ使用できる
 * - atom(原子) では汎用的に使用できるパーツを作成
 * - atom(原子) では基本的に TypeScript は組み込まず、必要な値は props で受け取る
 */
import React from 'react';
import styled from 'styled-components';

interface WrapProps {
  width: string;
}

const Wrap = styled.span<WrapProps>`
  box-sizing: border-box;
  display: inline-block;
  width: ${({ width }) => width};
`;

interface SeparatorProps {
  width: string;
}

/**
 * 【原子】 仕切り
 * @param {string} width - 【必須】 幅
 * @returns コンポーネント
 */
export const Separator: React.FC<SeparatorProps> = ({
  width,
}: SeparatorProps) => {
  return <Wrap width={width} />;
};
