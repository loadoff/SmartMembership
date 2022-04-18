/**
 * アイコンブロック
 * - molecule(分子) では atom および基本タグのみ使用できる
 * - molecule(分子) では汎用的に使用できるパーツを作成
 * - molecule(分子) では基本的に TypeScript は組み込まず、必要な値は props で受け取る
 */
import { GoogleFontsIcon } from 'components/atoms';
import React from 'react';
import styled from 'styled-components';

interface WrapProps {
  size?: number;
  color?: string;
  textAlign?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
}

const Wrap = styled.div<WrapProps>`
  box-sizing: border-box;
  max-width: 100%;
  ${({ size }) => size && `width: ${size}px;`}
  ${({ size }) => size && `height: ${size}px;`}
  ${({ color }) => color && `color: ${color};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  line-height: 1;
`;

interface IconBlockProps {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  textAlign?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
}

/**
 * 【分子】 アイコンブロック
 * @param {string} iconName - 【必須】 GoogleFontsアイコン名
 * @ https://fonts.google.com/icons?selected=Material+Icons
 * @param {number} iconSize - アイコンサイズ [px]
 * @param {string} iconColor - アイコン色
 * @param {string} textAlign - テキスト位置
 * @param {string} width - 幅
 * @param {string} height - 高さ
 * @param {string} margin - マージン
 * @param {string} padding - パディング
 * @returns コンポーネント
 */
export const IconBlock: React.FC<IconBlockProps> = ({
  iconName,
  iconSize,
  iconColor,
  textAlign,
  width,
  height,
  margin,
  padding,
}: IconBlockProps) => {
  return (
    <Wrap
      size={iconSize}
      color={iconColor}
      textAlign={textAlign}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    >
      <GoogleFontsIcon name={iconName} size={iconSize} />
    </Wrap>
  );
};
