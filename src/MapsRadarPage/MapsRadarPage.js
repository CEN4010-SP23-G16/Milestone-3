import React from 'react';
import { Button, Container } from 'react-bootstrap';

export default function MapsRadarPage() {
  return (
    <>
      <Container>
        <h2>Maps and Radar</h2>

        <div>
          <Button>
            Tempature Map
          </Button>
          <Button>
            Precipitation Map
          </Button>
          <Button>
            Wind Map
          </Button>

        </div>
      </Container>
    </>
  )
}
