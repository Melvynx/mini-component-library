import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div({
  borderBottom: `var(--border) solid ${COLORS.black}`,
  padding: 'var(--padding)',
  width: 'var(--width)',
  display: 'flex',
  alingItems: 'center',
  cursor: 'pointer',
  '&:focus-within': {
    outline: `2px solid ${COLORS.primary}`,
    borderRadius: 2,
    outlineOffset: 2,
  },
});

const Input = styled.input({
  border: 'none',
  marginLeft: 'var(--gap)',
  fontSize: 'var(--fontSize)',
  color: COLORS.gray700,
  fontWeight: 700,
  width: '100%',
  '&::placeholder': {
    color: COLORS.gray500,
    fontWeight: 400,
  },
  '&:focus': {
    outline: 'none',
  },
});

const MyIcon = styled(Icon)({});

const SIZES = {
  small: {
    '--border': 1 + 'px',
    '--padding': 4 + 'px',
    '--gap': 12 + 'px',
    '--fontSize': 14 + 'px',
  },
  large: {
    '--border': 2 + 'px',
    '--padding': 8 + 'px',
    '--gap': 16 + 'px',
    '--fontSize': 18 + 'px',
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper style={{ '--width': width + 'px', ...SIZES[size] }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <MyIcon size={size === 'large' ? 24 : 16} id={icon} />
      <Input placeholder={placeholder} />
    </Wrapper>
  );
};

export default IconInput;
