import { FC } from 'react';

import {
  Button,
  Center,
  DrawerBody,
  DrawerFooter,
  Stack,
} from '@chakra-ui/react';
import { Formiz, useForm, useFormFields } from '@formiz/core';
import { Marker } from 'leaflet';

import FieldInput from '@/components/FieldInput';
import { FieldSelect } from '@/components/FieldSelect';
import { useMapBoxContext } from '@/components/MapBox';
import { useToastError, useToastSuccess } from '@/components/Toast';
import { trpc } from '@/lib/trpc/client';
import { LOCATION_TYPE, LocationFormFields } from '@/server/config/schemas/Map';

const LocationForm: FC = () => {
  const toastSuccess = useToastSuccess();
  const toastError = useToastError();

  const {
    currentLocation,
    useDrawer: { onClose },
  } = useMapBoxContext();

  const form = useForm<LocationFormFields>({
    onValidSubmit: (values) => {
      if (isValid && currentLocation instanceof Marker) {
        const { lat, lng } = currentLocation.getLatLng();

        createLocation({ latitude: lat, longitude: lng, ...values });
        onClose();
      }
    },
  });
  const values = useFormFields({ connect: form, selector: 'value' });
  const isValid = values.name?.length && values.type?.length;
  if (!currentLocation || !(currentLocation instanceof Marker)) {
    return <Center>Something went wrong...</Center>;
  }

  const id = `location-form-${currentLocation.getLatLng()}`;

  const { mutate: createLocation, isLoading } = trpc.map.create.useMutation({
    onSuccess: ({ message, result }) => {
      toastSuccess({ title: result, description: message });
    },
    onError: (error) => {
      if (error.data?.code !== 'BAD_REQUEST')
        toastError({ title: error.data?.code, description: error.message });
    },
  });

  return (
    <>
      <DrawerBody>
        <Formiz connect={form}>
          <form id={id} onSubmit={form.submit} noValidate>
            <Stack spacing={8}>
              <FieldInput
                name="name"
                type="text"
                label="Name of the spot"
                showError={!values.name?.length && form.isSubmitted}
                errorMessage="Please give a name to your spot"
                isRequired
              />
              <FieldSelect
                name="type"
                label="What kind of spot ?"
                options={LOCATION_TYPE.map((locationType) => ({
                  value: locationType,
                  label: `${locationType[0]}${locationType
                    .slice(1)
                    .toLowerCase()}`,
                }))}
                defaultValue={['OUTDOOR']}
                selectProps={{ isMulti: true }}
                showError={!values.type?.length}
                errorMessage="Should not be empty"
                isRequired
              />
            </Stack>
          </form>
        </Formiz>
      </DrawerBody>
      <DrawerFooter>
        <Button
          type="submit"
          form={id}
          isLoading={isLoading}
          isDisabled={!form.isValid}
        >
          Send
        </Button>
      </DrawerFooter>
    </>
  );
};

export default LocationForm;
