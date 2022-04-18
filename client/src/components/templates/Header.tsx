/**
 * ページヘッダー
 * - template(テンプレート) では organism, molecule, atom および基本タグのみ使用できる
 * - template(テンプレート) では固有の文言を含めた Page(ページ) で使用するパーツを作成
 * - template(テンプレート) では Redux のロジックと TypeScript による動作を組み込む
 */
import { ColorPalette, DisplaySize } from 'commons';
import { TextBlock } from 'components/molecules';
import React, { ReactNode, useMemo } from 'react';
import {
  colorPaletteSelector,
  displaySizeSelector,
  useTypeSelector,
} from 'stores';
import styled from 'styled-components';

interface WrapProps {
  colorPalette: ColorPalette;
  displaySize: DisplaySize;
}

const Wrap = styled.div<WrapProps>`
  box-sizing: border-box;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ colorPalette }) => colorPalette.concept};
  width: 100%;
  height: 38px;
  padding: 4px 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid ${({ colorPalette }) => colorPalette.lightTone};
  line-height: 1;
`;

const PageTitle = styled.div`
  display: flex;
  align-items: center;
`;

interface HeaderProps {
  children?: ReactNode;
}

/**
 * 【テンプレート】 ページヘッダー
 * @param {ReactNode} children - 子要素
 * @returns コンポーネント
 */
export const Header: React.FC<HeaderProps> = ({ children }: HeaderProps) => {
  const colorPalette = useTypeSelector(colorPaletteSelector);
  const displaySize = useTypeSelector(displaySizeSelector);
  const css = useMemo(() => {
    return displaySize === DisplaySize.LARGE
      ? { fontSize: 16 }
      : { fontSize: 12 };
  }, [displaySize]);

  return (
    <Wrap colorPalette={colorPalette} displaySize={displaySize}>
      <PageTitle>
        <TextBlock
          fontSize={css.fontSize}
          color={colorPalette.lightTone}
          margin="0 0 0 8px"
          bold
        >
          スマート会員証
        </TextBlock>
      </PageTitle>
      <TextBlock
        fontSize={css.fontSize - 2}
        color={colorPalette.lightTone}
        sharp
      >
        {children}
      </TextBlock>
    </Wrap>
  );
};
