import { z } from 'zod';

export const LOCATION_TYPE = ['BOULDER', 'TRAD', 'INDOOR', 'OUTDOOR'] as const;
export type LocationType = z.infer<ReturnType<typeof zLocationType>>;
export const zLocationType = () => z.enum(LOCATION_TYPE);

export const zBounds = () =>
  z.object({
    southWest: zLatLng(),
    northEast: zLatLng(),
  });

export const zLatLng = () =>
  z.object({
    lat: z.number(),
    lng: z.number(),
  });

export type Location = z.infer<ReturnType<typeof zLocation>>;
export const zLocation = () =>
  z.object({
    id: z.string(),
    name: z.string(),
    type: z.array(zLocationType()).min(1),
    latitude: z.number(),
    longitude: z.number(),
    creationDate: z.date(),
    isVerified: z.boolean().catch(false),
  });

export const zLocationFormFields = zLocation().pick({
  name: true,
  type: true,
  latitude: true,
  longitude: true,
});
export type LocationFormFields = Omit<
  z.infer<typeof zLocationFormFields>,
  'latitude' | 'longitude'
>;
