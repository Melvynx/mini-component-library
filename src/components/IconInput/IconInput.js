import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.label`
  position: relative;
  display: block;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: var(--border) solid ${COLORS.black};
  padding: var(--padding);
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  width: var(--width);
  font-size: var(--fontSize);
  height: var(--height);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 500;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  height: var(--size);
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;

const SIZES = {
  small: {
    '--border': 1 + 'px',
    '--padding': 4 + 'px',
    '--gap': 12 + 'px',
    '--fontSize': 14 / 16 + 'rem',
    '--height': 24 + 'px',
  },
  large: {
    '--border': 2 + 'px',
    '--padding': 8 + 'px',
    '--gap': 16 + 'px',
    '--fontSize': 18 / 16 + 'rem',
    '--height': 36 + 'px',
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const iconSize = size === 'small' ? 16 : 24;
  return (
    <Wrapper style={{ '--width': width + 'px', ...SIZES[size] }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': iconSize + 'px' }}>
        <Icon size={iconSize} id={icon} />
      </IconWrapper>
      <Input placeholder={placeholder} />
    </Wrapper>
  );
};

export default IconInput;
