/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../../molecules/Header/Header';
import Characters from '../../organisms/Characters/Characters';

interface IProductProps {
  characterInfo: any,
  handleCharacterData: (id: number) => any,
  handlePage: (page: number) => void,
  handleRequestSearch: (name: string) => void,
  loading: boolean,
  page: number,
  rows: any,
  rowCount: number,
}

const Product: React.FC<IProductProps> = ({
  characterInfo,
  handleCharacterData,
  handlePage,
  handleRequestSearch,
  loading,
  page,
  rows,
  rowCount,
}) => {
  const title = 'Characters';
  return (
    <>
      <Header title={title} />
      <Characters
        characterInfo={characterInfo}
        handleRequestSearch={handleRequestSearch}
        handleCharacterData={handleCharacterData}
        handlePage={handlePage}
        loading={loading}
        page={page}
        pageSize={20}
        rows={rows}
        rowCount={rowCount}
      />
    </>
  );
};

export default Product;
