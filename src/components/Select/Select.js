import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
// import { getDisplayedValue } from './Select.helpers';

const MySelect = styled.select({
  width: 'max-content',
  background: COLORS.transparentGray15,
  color: 'inherit',
  border: 'none',
  padding: '12px 24px 12px 16px',
  fontSize: '1rem',
  borderRadius: 8,
  appearance: 'none',
  display: 'inline-block',
});

const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  color: COLORS.gray700,
  '&:hover': {
    color: COLORS.black,
  },
});

const MyIcon = styled(Icon)({
  display: 'inline',
  marginLeft: '-32px',
  color: 'inherit',
  pointerEvents: 'none',
});

// from https://stackoverflow.com/questions/294040/how-to-expand-select-option-width-after-the-user-wants-to-select-an-option
const updateSelectWidth = (event) => {
  console.log(event);
  const select = document.createElement('select');
  const selectOption = document.createElement('option');

  selectOption.textContent = event.target.options[event.target.selectedIndex].text;
  select.style = 'visibility: hidden; position: fixed;';

  select.appendChild(selectOption);
  event.target.after(select);

  const newSelectWidth = select.getBoundingClientRect().width;
  event.target.style.width = `${newSelectWidth + 48}px`;
  select.remove();
};

const Select = ({ label, value, onChange, children }) => {
  const selectRef = useRef();

  useEffect(() => {
    if (!selectRef.current) return;
    updateSelectWidth({ target: selectRef.current });
  }, []);

  return (
    <Wrapper>
      <MySelect
        ref={selectRef}
        aria-label={label}
        value={value}
        onChange={(event) => {
          onChange(event);
          updateSelectWidth(event);
        }}
      >
        {children}
      </MySelect>
      <MyIcon id="chevron-down" />
    </Wrapper>
  );
};

export default Select;
