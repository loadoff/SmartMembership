/**
 * 文章ブロック
 * - molecule(分子) では atom および基本タグのみ使用できる
 * - molecule(分子) では汎用的に使用できるパーツを作成
 * - molecule(分子) では基本的に TypeScript は組み込まず、必要な値は props で受け取る
 */
import { Text } from 'components/atoms';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface WrapProps {
  fontSize?: number;
  color?: string;
  bold?: boolean;
  sharp?: boolean;
  letterSpacing?: number;
  lineHeight?: number;
  textAlign?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
}

const Wrap = styled.div<WrapProps>`
  box-sizing: border-box;
  max-width: 100%;
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}px;`}
  ${({ color }) => color && `color: ${color};`}
  ${({ bold }) => bold && `font-weight: bold;`}
  ${({ sharp }) => sharp && `font-weight: 100;`}
  ${({ letterSpacing }) =>
    letterSpacing && `letter-spacing: ${letterSpacing}px;`}
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
`;

interface TextBlockProps {
  children?: ReactNode;
  fontSize?: number;
  color?: string;
  bold?: boolean;
  sharp?: boolean;
  letterSpacing?: number;
  lineHeight?: number;
  textAlign?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
}

/**
 * 【分子】 文章ブロック
 * @param {ReactNode} children - 子要素
 * @param {number} fontSize - 文字サイズ [px]
 * @param {string} color - 文字色
 * @param {boolean} bold - 太字
 * @param {boolean} sharp - 細字
 * @param {number} letterSpacing - 文字色
 * @param {number} lineHeight - 文字色
 * @param {string} textAlign - テキスト位置
 * @param {string} width - 幅
 * @param {string} height - 高さ
 * @param {string} margin - マージン
 * @param {string} padding - パディング
 * @returns コンポーネント
 */
export const TextBlock: React.FC<TextBlockProps> = ({
  children,
  fontSize,
  color,
  bold,
  sharp,
  letterSpacing,
  lineHeight,
  textAlign,
  width,
  height,
  margin,
  padding,
}: TextBlockProps) => {
  return (
    <Wrap
      fontSize={fontSize}
      color={color}
      bold={bold}
      sharp={sharp}
      letterSpacing={letterSpacing}
      lineHeight={lineHeight}
      textAlign={textAlign}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    >
      <Text>{children}</Text>
    </Wrap>
  );
};
