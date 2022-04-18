/**
 * 404エラーメッセージ
 * - organism(有機体) では別の organism, molecule, atom および基本タグのみ使用できる
 * - organism(有機体) では固有の文言を含めたパーツを作成
 * - organism(有機体) では Redux のロジックと TypeScript による動作を組み込む
 */
import { DisplaySize, NOT_FOUND_TIMEOUT } from 'commons';
import { IconBlock, TextBlock } from 'components/molecules';
import React, { useMemo } from 'react';
import { displaySizeSelector, useTypeSelector } from 'stores';
import styled from 'styled-components';

const Wrap = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

const Message = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0 0;
`;

/**
 * 【有機体】 404エラーメッセージ
 * @returns コンポーネント
 */
export const NotFoundMessage: React.FC = () => {
  const displaySize = useTypeSelector(displaySizeSelector);
  const css = useMemo(() => {
    return displaySize === DisplaySize.LARGE
      ? { fontSize: 24 }
      : { fontSize: 16 };
  }, [displaySize]);

  return (
    <Wrap>
      <Message>
        <IconBlock
          iconName="highlight_off"
          iconSize={css.fontSize}
          margin="0 16px 0 0"
        />
        <TextBlock fontSize={css.fontSize}>
          該当URLのページは存在しません
        </TextBlock>
      </Message>
      <Message>
        <TextBlock fontSize={css.fontSize - 4}>
          {NOT_FOUND_TIMEOUT / 1000}秒後にトップページに戻ります
        </TextBlock>
      </Message>
    </Wrap>
  );
};
