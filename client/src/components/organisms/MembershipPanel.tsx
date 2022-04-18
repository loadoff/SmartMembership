/**
 * 会員証パネル
 * - organism(有機体) では別の organism, molecule, atom および基本タグのみ使用できる
 * - organism(有機体) では固有の文言を含めたパーツを作成
 * - organism(有機体) では Redux のロジックと TypeScript による動作を組み込む
 */
import { ColorPalette, DisplaySize } from 'commons';
import { GoogleFontsIcon, Text } from 'components/atoms';
import { Panel, TextBlock } from 'components/molecules';
import React, { useMemo } from 'react';
import {
  colorPaletteSelector,
  displaySizeSelector,
  useTypeSelector,
} from 'stores';
import styled from 'styled-components';

interface WrapProps {
  colorPalette: ColorPalette;
}

const Wrap = styled.div<WrapProps>`
  box-sizing: border-box;
`;

/**
 * 【有機体】 会員証パネル
 * @returns コンポーネント
 */
export const MembershipPanel: React.FC = () => {
  const colorPalette = useTypeSelector(colorPaletteSelector);
  const displaySize = useTypeSelector(displaySizeSelector);
  const css = useMemo(() => {
    return displaySize === DisplaySize.LARGE
      ? {
          panelMargin: 16,
          titleSize: 20,
          fontSize: 18,
          iconSize: 28,
          lineSpacing: 1.3,
        }
      : {
          panelMargin: 8,
          titleSize: 16,
          fontSize: 14,
          iconSize: 24,
          lineSpacing: 1,
        };
  }, [displaySize]);

  return (
    <Wrap colorPalette={colorPalette}>
      <Panel
        colorPalette={colorPalette}
        headerTitle="マイページ"
        headerTitleSize={css.titleSize}
        headerIconName="account_box"
        headerIconSize={css.iconSize}
        width="100%"
        margin={`0 0 ${css.panelMargin}px`}
      >
        <TextBlock letterSpacing={css.lineSpacing} textAlign="center" bold>
          <GoogleFontsIcon name="qr_code_2" size={160} />
        </TextBlock>
        <TextBlock
          fontSize={css.fontSize}
          letterSpacing={css.lineSpacing}
          textAlign="center"
          bold
        >
          会員番号
        </TextBlock>
        <TextBlock
          fontSize={css.fontSize + 8}
          letterSpacing={css.lineSpacing}
          textAlign="center"
          bold
        >
          1234567890123
        </TextBlock>
        <TextBlock
          fontSize={css.fontSize}
          letterSpacing={css.lineSpacing}
          textAlign="center"
          margin="20px 0 0"
          bold
        >
          有効期限: 2023/04/01
        </TextBlock>
        <TextBlock
          fontSize={css.fontSize + 4}
          letterSpacing={css.lineSpacing}
          textAlign="center"
          bold
        >
          保有ポイント: <Text color={colorPalette.positive}>9,876</Text>
        </TextBlock>
      </Panel>
    </Wrap>
  );
};
