import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import type { CharacterStatus, CharacterT } from '../../types/character';

type CharCardProps = {
  char: CharacterT;
  fav: boolean;
};

export default function CharCard({ char, fav }: CharCardProps): JSX.Element {
  const translateStatus = (status: CharacterStatus): string => {
    switch (status) {
      case 'Alive':
        return 'Живой';
      case 'Dead':
        return 'Мёртвый';
      case 'unknown':
        return 'Неизвестно';
      default:
        return 'Неизвестно';
    }
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={char.image} />
      <Card.Body>
        <Card.Title>{char.name}</Card.Title>
        <Card.Text>Пол: {char.gender}</Card.Text>
        <Card.Text>{translateStatus(char.status)}</Card.Text>
        <Button variant={fav ? 'danger' : 'primary'}>
          {fav ? 'Больше не нра' : 'Лайкнуть'}
        </Button>
      </Card.Body>
    </Card>
  );
}
