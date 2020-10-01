import React from 'react';

import { Container, Heading, Buttons } from './styles';

interface Porps {
  label: string;
  description: string;
}

const DefaultOverlayContent: React.FC<Porps> = ({ label, description }) => {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>

      <Buttons>
        <button>Custom Order</button>
        <button className="white">Existing Invetory</button>
      </Buttons>
    </Container>
  );
};

export default DefaultOverlayContent;
