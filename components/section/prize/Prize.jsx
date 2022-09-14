/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import { Container } from '@/components/common/index';

export function Prize() {
  const boardVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { ease: 'easeOut', duration: 1 },
    },
  };

  const textVariants = {
    hidden: {
      x: -20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { ease: 'easeOut', duration: 1, delay: 0.5 },
    },
  };

  return (
    <Container className='px-0'>

    </Container>
  );
}
