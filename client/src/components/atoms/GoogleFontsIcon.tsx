/**
 * GoogleFonts アイコン
 * - atom(原子) では基本タグのみ使用できる
 * - atom(原子) では汎用的に使用できるパーツを作成
 * - atom(原子) では基本的に TypeScript は組み込まず、必要な値は props で受け取る
 */
import React from 'react';
import styled from 'styled-components';

interface WrapProps {
  size?: number;
  color?: string;
}

const Wrap = styled.span<WrapProps>`
  box-sizing: border-box;
  display: inline-block;
  ${({ size }) => size && `font-size: ${size}px;`}
  ${({ color }) => color && `color: ${color};`}
  line-height: 1;
`;

interface GoogleFontsIconProps {
  name: string;
  size?: number;
  color?: string;
}

/**
 * 【原子】 GoogleFonts アイコン
 * @param {string} name - 【必須】 GoogleFontsアイコン名
 * @ https://fonts.google.com/icons?selected=Material+Icons
 * @param {number} size - アイコンサイズ [px]
 * @param {string} color - アイコン色
 * @returns コンポーネント
 */
export const GoogleFontsIcon: React.FC<GoogleFontsIconProps> = ({
  name,
  size,
  color,
}: GoogleFontsIconProps) => {
  return (
    <Wrap className="material-icons" size={size} color={color}>
      {name}
    </Wrap>
  );
};
