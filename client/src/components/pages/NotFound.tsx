/**
 * 404エラーページ
 * - page(ページ) では template のみ使用できる(基本的に styled コンポーネント の生成は行わない)
 * - page(ページ) では template(テンプレート) のみを使用しページを作成
 * - page(ページ) では ページ全体に影響する最小限の TypeScript による動作を組み込む
 */
import { NOT_FOUND_TIMEOUT, UrlPath } from 'commons';
import { NotFoundArea } from 'components/templates';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

/**
 * 【ページ】 404エラーページ
 * @returns コンポーネント
 */
export const NotFound: React.FC = () => {
  const history = useHistory();
  useEffect(() => {
    // 表示から10秒後にトップページへ戻す
    const timer = setTimeout(() => {
      history.push({ pathname: UrlPath.HOME });
    }, NOT_FOUND_TIMEOUT);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <NotFoundArea />;
};
