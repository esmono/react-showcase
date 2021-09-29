import React, { useEffect, useState } from 'react';
import Characters from '../../templates/Characetrs/Characters';
import CharactersService from '../../../api/characters';

interface IDataGridRows {
  id: number,
  name: string
  status: string,
  species: string,
  type: string,
  gender: string,
}

interface IDataGridInfo {
  count: number,
  pages: number,
  next: string,
  prev: string,
}

interface IDataGridProps {
  info: IDataGridInfo,
  results: IDataGridRows[],
}

export interface ICharacterProps {
  name: string,
  status: string,
  species: string,
  type: string,
  origin: {
    name: string,
  },
  location: {
    name: string,
  },
  image: string,
}

const Showcase = () => {
  const [characterInfo, setCharacterInfo] = useState<ICharacterProps>();
  const [charactersData, setCharactersData] = useState<IDataGridRows[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState<IDataGridProps>();
  const [searchName, setSearchName] = React.useState('');

  const retrieveCharacters = () => {
    CharactersService.getAllCharacters(page, searchName)
      .then((response) => {
        setCharactersData(response.data.results);
        setRows(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    retrieveCharacters();
  }, []);

  const loadServerRows = async (newPage: number): Promise<any> => {
    CharactersService.getAllCharacters(newPage, searchName)
      .then((response) => {
        setCharactersData(response.data.results);
        setRows(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    let active = true;

    (async () => {
      setLoading(true);
      const newRows = await loadServerRows(page);

      if (!active) {
        return;
      }

      setRows(newRows);
      setLoading(false);
    })();

    return () => {
      active = false;
    };
  }, [page]);

  const handleCharacterData = (id: number) => {
    CharactersService.getCharacter(id)
      .then((response) => {
        setCharacterInfo(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handlePage = (newPage: number) => {
    setPage(newPage);
  };
  const handleRequestSearch = (searchValue: string) => {
    setSearchName(searchValue);
    setPage(0);
    CharactersService.getAllCharacters(page, searchValue)
      .then((response) => {
        setCharactersData(response.data.results);
        setRows(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const rowCount = rows?.info.count || 0;
  return (
    <Characters
      characterInfo={characterInfo}
      handleCharacterData={handleCharacterData}
      handlePage={handlePage}
      handleRequestSearch={handleRequestSearch}
      loading={loading}
      page={page}
      rows={charactersData}
      rowCount={rowCount}
    />
  );
};

export default Showcase;
