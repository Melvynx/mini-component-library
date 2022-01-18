/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBase = styled.div({
  width: '100%',
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
});

const ProgressBarWrapper = styled.div({
  overflow: 'hidden',
  height: '100%',
  borderRadius: 4,
});

const SIZES = {
  large: {
    '--borderRadius': 8 + 'px',
    '--height': 24 + 'px',
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
      <ProgressBarWrapper>
        <ProgressBaseBar
          style={{
            '--progress': value + '%',
          }}
        />
      </ProgressBarWrapper>
    </ProgressBase>
  );
};

export default ProgressBar;
