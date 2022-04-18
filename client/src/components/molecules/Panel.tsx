/**
 * パネル
 * - molecule(分子) では atom および基本タグのみ使用できる
 * - molecule(分子) では汎用的に使用できるパーツを作成
 * - molecule(分子) では基本的に TypeScript は組み込まず、必要な値は props で受け取る
 */
import { ColorPalette } from 'commons';
import { GoogleFontsIcon, Separator, Text } from 'components/atoms';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface WrapProps {
  colorPalette: ColorPalette;
  width?: string;
  margin?: string;
}

const Wrap = styled.div<WrapProps>`
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ colorPalette }) => colorPalette.lightTone};
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
  border: 1px solid ${({ colorPalette }) => colorPalette.concept};
  border-radius: 4px;
  max-width: 100%;
  ${({ width }) => width && `width: ${width};`}
  ${({ margin }) => margin && `margin: ${margin};`}
`;

interface HeaderProps {
  colorPalette: ColorPalette;
}

const Header = styled.div<HeaderProps>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 4px;
  margin: -1px 0 0;
  background-color: ${({ colorPalette }) => colorPalette.concept};
  border-radius: 4px 4px 0 0;
  color: ${({ colorPalette }) => colorPalette.lightTone};
  transition: 0.3s ease-in-out;
`;

const Contents = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 32px 20px;
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface PanelProps {
  children?: ReactNode;
  colorPalette: ColorPalette;
  headerTitle?: string;
  headerTitleSize?: number;
  headerIconName?: string;
  headerIconSize?: number;
  width?: string;
  margin?: string;
}

/**
 * 【分子】 パネル
 * @param {ReactNode} children - 子要素
 * @param {ColorPalette} colorPalette - 【必須】 カラーパレット
 * @param {string} headerTitle - ヘッダー文
 * @param {number} headerTitleSize - ヘッダー文サイズ [px] (初期値:16)
 * @param {string} headerIconName - GoogleFontsアイコン名
 * @ https://fonts.google.com/icons?selected=Material+Icons
 * @param {number} headerIconSize - アイコンサイズ [px] (初期値:24)
 * @param {string} width - 幅
 * @param {string} margin - マージン
 * @returns コンポーネント
 */
export const Panel: React.FC<PanelProps> = ({
  children,
  colorPalette,
  headerTitle,
  headerTitleSize = 16,
  headerIconName,
  headerIconSize = 24,
  width,
  margin,
}: PanelProps) => {
  return (
    <Wrap colorPalette={colorPalette} width={width} margin={margin}>
      {headerTitle && (
        <Header colorPalette={colorPalette}>
          {headerIconName && (
            <IconWrap>
              <GoogleFontsIcon name={headerIconName} size={headerIconSize} />
              <Separator width="16px" />
            </IconWrap>
          )}
          <Text fontSize={headerTitleSize} bold>
            {headerTitle}
          </Text>
        </Header>
      )}
      <Contents>{children}</Contents>
    </Wrap>
  );
};
