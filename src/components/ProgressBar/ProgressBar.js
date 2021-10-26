/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBase = styled.div({
  width: '100%',
  maxWidth: 370,
  backgroundColor: COLORS.transparentGray15,
  boxShadow: 'inset 0px 2px 4px rgba(128, 128, 128, 0.35)',
  borderRadius: 'var(--borderRadius)',
  height: 'var(--height)',
  padding: 'var(--padding)',
  overflow: 'hidden',
});

const ProgressBaseBar = styled.div({
  width: 'var(--progress)',
  height: '100%',
  backgroundColor: COLORS.primary,
  borderRadius: '4px var(--lastRadius) var(--lastRadius) 4px',
});

const SIZES = {
  large: {
    '--borderRadius': 8 + 'px',
    '--height': 16 + 'px',
    '--padding': 4 + 'px',
  },
  medium: {
    '--borderRadius': 4 + 'px',
    '--height': 12 + 'px',
    '--padding': 0 + 'px',
  },
  small: {
    '--borderRadius': 4 + 'px',
    '--height': 8 + 'px',
    '--padding': 0 + 'px',
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <ProgressBase
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      style={SIZES[size]}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <ProgressBaseBar
        style={{
          '--progress': value + '%',
          '--lastRadius': Math.max(0, value - 99) * 4 + 'px',
        }}
      />
    </ProgressBase>
  );
};

export default ProgressBar;
