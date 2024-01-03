import { FC } from 'react';

import { Button, Heading, Stack, StackProps } from '@chakra-ui/react';

import { Location } from '@/server/config/schemas/Map';

interface LocationPopUpProps extends StackProps {
  item: Location;
}

const LocationPopUp: FC<LocationPopUpProps> = ({ item, ...props }) => {
  return (
    <Stack {...props}>
      <Heading fontSize="md">{item.name}</Heading>
      <Button
        as="a"
        href={`https://maps.google.com/maps?q=${item.latitude},${item.longitude}+(My+Point)&z=14`}
      >
        Open in google map
      </Button>
    </Stack>
  );
};

export default LocationPopUp;
