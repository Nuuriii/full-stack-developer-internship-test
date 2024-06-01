import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<{ $checked: boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) =>
    props.$checked ? 'var(--green-primary)' : 'var(--white)'};
  border-radius: 3px;
  transition: all 150ms;
  border: 1px solid var(--border);

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px var(--green-light);
  }

  ${Icon} {
    visibility: ${(props) => (props.$checked ? 'visible' : 'hidden')};
  }
`;
