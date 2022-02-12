import styled from '@emotion/styled';
import { system, compose, space, color, layout, flexbox, border, background } from 'styled-system';

system({
  prop: 'gap',
  cssProperty: 'gap',
});

// system({
//   prop: 'cursor',
//   cssProperty: 'cursor',
// });

// https://styled-system.com/guides/build-a-box
const Box = styled.div`
  // ensures the Box can shrink below its minimum content size when used as a flex item
  min-width: 0;

  ${compose(
    space,
    color,
    layout,
    flexbox,
    border,
    background
  )}

  ${system({
    gap: true,
    // cursor: true,
  })}
`;

export default Box;