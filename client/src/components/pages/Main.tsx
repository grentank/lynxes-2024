import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import type {
  ApiResponseT,
  CharacterT,
  FavoriteType,
} from '../../types/character';
import { charSchema, favSchema } from '../../types/character';
import CharCard from '../ui/CharCard';
import PaginateChars from '../ui/PaginateChars';

export default function Main(): JSX.Element {
  const [chars, setChars] = useState<CharacterT[]>([]);
  const [page, setPage] = useState<number>(1);
  const [favs, setFavs] = useState<FavoriteType[]>([]);

  const changePage = (newPage: number): void => {
    setPage(newPage);
  };

  useEffect(() => {
    axios('/api/favorites')
      .then((res) => setFavs(favSchema.array().parse(res.data)))
      .catch(console.log);
  }, []);

  useEffect(() => {
    axios<ApiResponseT>(
      `https://rickandmortyapi.com/api/character/?page=${page}`,
    )
      .then((res) => setChars(charSchema.array().parse(res.data.results)))
      .catch(console.log);
  }, [page]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={4}>
          <PaginateChars page={page} changePage={changePage} />
        </Col>
      </Row>
      <Row>
        {chars.map((char) => (
          <Col xs={4} key={char.id}>
            <CharCard
              char={char}
              fav={!!favs.find(({ characterId }) => char.id === characterId)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
