import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const NativeSelect = styled.select({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0,
  cursor: 'pointer',
});

const CustomSelect = styled.div`
  padding: 12px 40px 12px 16px;
  fontsize: ${16 / 16} + 'rem';
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const Wrapper = styled.div({
  position: 'relative',
  width: 'max-content',
  isolation: 'isolate',
});

const IconWrapper = styled.div({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 10,
  margin: 'auto',
  height: 24,
  width: 24,
  pointerEvents: 'none',
});

const Select = ({ label, value, onChange, children }) => {
  const displayValue = getDisplayedValue(value, children);
  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <CustomSelect>
        {displayValue}
        <IconWrapper>
          <Icon id="chevron-down" size={24} strokeWidth={1} />
        </IconWrapper>
      </CustomSelect>
    </Wrapper>
  );
};

export default Select;
