/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import { Container } from '@/components/common/index';

export function Title() {
  return (
    <Container>
      <div className="mx-4 xl:mx-0 font-Rokkitt text-4xl font-bold text-center py-24">
        <h2>It started with a simple idea: Create quality, well-designed products that I wanted myself.</h2>
      </div>
    </Container>
  );
}
