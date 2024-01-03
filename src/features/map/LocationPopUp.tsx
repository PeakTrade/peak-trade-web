import { FC } from 'react';

import {
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  StackProps,
  Tag,
} from '@chakra-ui/react';
import { CheckCircle, Clock } from 'lucide-react';
import Image from 'next/image';

import { GoogleMaps } from '@/components/Icons/GoogleMaps';
import { Location } from '@/server/config/schemas/Map';

interface LocationPopUpProps extends StackProps {
  item: Location;
}

const LocationPopUp: FC<LocationPopUpProps> = ({ item, ...props }) => {
  return (
    <Stack spacing={4} {...props}>
      <Stack>
        <HStack justify="space-between">
          <Heading fontSize="lg" color="gray.900" _dark={{ color: 'white' }}>
            {item.name}
          </Heading>
          {item.isVerified && <CheckCircle color="#16a34a" />}
          {!item.isVerified && <Clock color="#fb923c" />}
        </HStack>

        {item.type.map((type) => (
          <Tag
            key={`${item.id}-${type}`}
            colorScheme="brand"
            width="fit-content"
          >
            {type}
          </Tag>
        ))}
      </Stack>
      <Box position="relative" h={32} objectFit="cover">
        <Image src="/placeholder.png" alt="pop up image" fill></Image>
      </Box>
      <Button
        as="a"
        href={`https://maps.google.com/maps?q=${item.latitude},${item.longitude}+(My+Point)&z=14`}
        size="md"
        textDecoration="none"
        variant="@secondary"
        gap={1}
      >
        <GoogleMaps width={24} height={24} />
        Open in Google Maps
      </Button>
    </Stack>
  );
};

export default LocationPopUp;
