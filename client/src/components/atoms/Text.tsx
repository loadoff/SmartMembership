/**
 * 文章
 * - atom(原子) では基本タグのみ使用できる
 * - atom(原子) では汎用的に使用できるパーツを作成
 * - atom(原子) では基本的に TypeScript は組み込まず、必要な値は props で受け取る
 */
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface WrapProps {
  fontSize?: number;
  color?: string;
  bold?: boolean;
  letterSpacing?: number;
  lineHeight?: number;
}

const Wrap = styled.span<WrapProps>`
  box-sizing: border-box;
  display: inline-block;
  margin: 0;
  overflow-wrap: anywhere;
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}px;`}
  ${({ color }) => color && `color: ${color};`}
  ${({ bold }) => bold && `font-weight: bold;`}
  ${({ letterSpacing }) =>
    letterSpacing && `letter-spacing: ${letterSpacing}px;`}
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`}
`;

interface TextProps {
  children: ReactNode;
  fontSize?: number;
  color?: string;
  bold?: boolean;
  letterSpacing?: number;
  lineHeight?: number;
}

/**
 * 【原子】 文章
 * @param {ReactNode} children - 【必須】 子要素
 * @param {number} fontSize - 文字サイズ [px]
 * @param {string} color - 文字色
 * @param {boolean} bold - 太字
 * @param {number} letterSpacing - 文字間隔 [px]
 * @param {number} lineHeight - 行間 [倍率]
 * @returns コンポーネント
 */
export const Text: React.FC<TextProps> = ({
  children,
  fontSize,
  color,
  bold,
  letterSpacing,
  lineHeight,
}: TextProps) => {
  return (
    <Wrap
      fontSize={fontSize}
      color={color}
      bold={bold}
      letterSpacing={letterSpacing}
      lineHeight={lineHeight}
    >
      {children}
    </Wrap>
  );
};
