import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeProvider';
import Colors from '../../properties/colors';

const Text = ({ children, as, color }: TextProps) => {
  const theme = useContext(ThemeContext);

  console.log(theme);

  return React.createElement(
    as || TextAs.P,
    {
      style: {
        ...(color && { color }),
      },
    },
    children
  );
};

interface TextProps {
  children?: React.ReactNode;
  as?: TextAs;
  color?: Colors;
}

export enum TextAs {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p',
  Span = 'span',
}

export default Text;
