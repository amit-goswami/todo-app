import React, { type ReactNode } from 'react';
import { Box, type SxProps, type Theme } from '@mui/material';

type Position = 'top-right' | 'top-left' | 'top-center';

interface FloatingPositionedBoxProps {
  position?: Position;
  children: ReactNode;
}

const positionStyles: Record<Position, SxProps<Theme>> = {
  'top-right': {
    position: 'fixed',
    top: 16,
    right: 16,
  },
  'top-left': {
    position: 'fixed',
    top: 16,
    left: 16,
  },
  'top-center': {
    position: 'fixed',
    top: 16,
    left: '50%',
    transform: 'translateX(-50%)',
  },
};

const FloatingPositionedBox: React.FC<FloatingPositionedBoxProps> = ({
  position = 'top-right',
  children,
}) => {
  const style = positionStyles[position] || positionStyles['top-right'];

  return <Box sx={{ zIndex: 1300, ...style }}>{children}</Box>;
};

export default FloatingPositionedBox;
