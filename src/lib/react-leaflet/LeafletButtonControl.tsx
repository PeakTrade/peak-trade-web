import { ReactNode } from 'react';

import { Button as ChakraButton } from '@chakra-ui/react';
import { createControlComponent } from '@react-leaflet/core';
import { Control, ControlOptions, DomEvent, DomUtil } from 'leaflet';
import { createRoot } from 'react-dom/client';

export type ButtonConrtrolProps = ControlOptions & {
  content: ReactNode;
  handler?: () => void;
  href?: string;
  isDark: boolean;
};

const baseStyle = (isDark: boolean) => ({
  textDecoration: 'none',
  h: '3rem',
  w: '3rem',
  borderRadius: '20%',
  color: isDark ? 'white' : '#171717',
  bg: isDark ? '#262626' : 'white',
  border: isDark ? '1px solid #404040' : '1px solid #d4d4d4',
});

const createButtonControl = (props: ButtonConrtrolProps) => {
  const ButtonControl = LeafletButton(props);
  return new ButtonControl(props);
};

export const LeafletButtonControl = createControlComponent(createButtonControl);

const LeafletButton = (options: ButtonConrtrolProps) =>
  Control.extend({
    options: options,
    onAdd: () => {
      const div = DomUtil.create('div', '');

      // Weird workaround to populate the control
      const root = createRoot(div);
      root.render(
        options.href ? (
          <ChakraButton
            as="a"
            href={options.href}
            {...baseStyle(options.isDark)}
          >
            {options.content}
          </ChakraButton>
        ) : (
          <ChakraButton {...baseStyle(options.isDark)}>
            {options.content}
          </ChakraButton>
        )
      );

      DomEvent.disableClickPropagation(div);

      if (options.handler) DomEvent.on(div, 'click', options.handler);

      return div;
    },
  });
