import React, { useContext } from 'react';
import Button from '../core/Button';
import PaginateWrapper from './Paginate.wrapper';
import content from './Paginate.content';
import { LanguageCtx } from '../../contexts/Language.context';
import pokeapi from '../../helpers/pokeapi';

function Paginate({ offset, setOffset, data }) {
  const { language } = useContext(LanguageCtx);
  const lastIndex = pokeapi.LAST_INDEX;
  const jumpPages = [5, 10, 20];
  return (
    <PaginateWrapper>
      <div>
        <Button
          isLarge
          isDisabled={offset <= pokeapi.LIMIT - 1 ? true : false}
          onClick={() => setOffset(offset - pokeapi.LIMIT)}
        >
          {content.PREVIOUS[language]}
        </Button>

        <Button
          isLarge
          isDisabled={offset >= pokeapi.LAST_INDEX ? true : false}
          onClick={() => setOffset(offset + pokeapi.LIMIT)}
        >
          {content.NEXT[language]}
        </Button>
      </div>

      <div>
        {jumpPages.reverse().map((jump) => (
          <Button
            key={jump}
            isWarning={offset <= pokeapi.LIMIT * jump - 1 ? false : true}
            isDisabled={offset <= pokeapi.LIMIT * jump - 1 ? true : false}
            onClick={() => setOffset(offset - pokeapi.LIMIT * jump)}
          >
            - {jump}
          </Button>
        ))}
        {jumpPages.reverse().map((jump) => (
          <Button
            key={jump}
            isWarning={offset >= pokeapi.LAST_INDEX - pokeapi.LIMIT * jump ? false : true}
            isDisabled={offset >= pokeapi.LAST_INDEX - pokeapi.LIMIT * jump ? true : false}
            onClick={() => setOffset(offset + pokeapi.LIMIT * jump)}
          >
            + {jump}
          </Button>
        ))}
      </div>

      <h3 className="pagination-resume">
        {Math.ceil(offset / pokeapi.LIMIT) + 1} {content.ON[language]}{' '}
        {Math.ceil(lastIndex / pokeapi.LIMIT)}
      </h3>
    </PaginateWrapper>
  );
}

export default Paginate;
