import { Box, useColorModeValue } from '@chakra-ui/react';
import { MarkerCluster } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerClusterGroup from 'react-leaflet-cluster';

import DarkModeSwitch from '@/components/DarkModeSwitch';
import MapBox from '@/components/MapBox';
import PageContainer from '@/components/PageContainer';
import '@/features/map/cluster.css';

import ButtonControlGroup from './ButtonControlGroup';
import MapContent from './MapContent';
import { iconWithColorModeFunction } from './config';

const PageMap = () => {
  const isDark = useColorModeValue(false, true);
  const iconCreateFunction = iconWithColorModeFunction(isDark);
  return (
    <PageContainer maxWidth="full" px={0} mx={0}>
      <Box position="absolute" left={0}>
        <DarkModeSwitch />
      </Box>

      <MapBox
        center={[48.8566, 2.3522]}
        zoom={13}
        height="full"
        zIndex={1}
        tileLayerProps={{
          attribution:
            "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        }}
      >
        <ButtonControlGroup />
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={iconCreateFunction}
        >
          <MapContent />
        </MarkerClusterGroup>
      </MapBox>
    </PageContainer>
  );
};

MarkerCluster;
export default PageMap;
