import { Icon, MarkerCluster, divIcon, point } from 'leaflet';

import { LocationType } from '@/server/config/schemas/Map';

export const ICON_SIZE: [number, number] = [38, 38];
export const ICONS: Record<LocationType | 'DEFAULT' | 'CURRENT_LOC', Icon> = {
  DEFAULT: new Icon({
    iconUrl:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1hcC1waW4iPjxwYXRoIGQ9Ik0yMCAxMGMwIDYtOCAxMi04IDEycy04LTYtOC0xMmE4IDggMCAwIDEgMTYgMFoiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSIzIi8+PC9zdmc+',
    iconSize: ICON_SIZE,
  }),
  INDOOR: new Icon({
    iconUrl:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhvbWUiPjxwYXRoIGQ9Im0zIDkgOS03IDkgN3YxMWEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnoiLz48cG9seWxpbmUgcG9pbnRzPSI5IDIyIDkgMTIgMTUgMTIgMTUgMjIiLz48L3N2Zz4=',
    iconSize: ICON_SIZE,
  }),
  OUTDOOR: new Icon({
    iconUrl:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1vdW50YWluIj48cGF0aCBkPSJtOCAzIDQgOCA1LTUgNSAxNUgyTDggM3oiLz48L3N2Zz4=',
    iconSize: ICON_SIZE,
  }),
  BOULDER: new Icon({
    // mountain icon
    iconUrl:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN0YXIiPjxwb2x5Z29uIHBvaW50cz0iMTIgMiAxNS4wOSA4LjI2IDIyIDkuMjcgMTcgMTQuMTQgMTguMTggMjEuMDIgMTIgMTcuNzcgNS44MiAyMS4wMiA3IDE0LjE0IDIgOS4yNyA4LjkxIDguMjYgMTIgMiIvPjwvc3ZnPg==',
    iconSize: ICON_SIZE,
  }),
  TRAD: new Icon({
    // mountain icon
    iconUrl:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN0YXIiPjxwb2x5Z29uIHBvaW50cz0iMTIgMiAxNS4wOSA4LjI2IDIyIDkuMjcgMTcgMTQuMTQgMTguMTggMjEuMDIgMTIgMTcuNzcgNS44MiAyMS4wMiA3IDE0LjE0IDIgOS4yNyA4LjkxIDguMjYgMTIgMiIvPjwvc3ZnPg==',
    iconSize: ICON_SIZE,
  }),
  CURRENT_LOC: new Icon({
    // mountain icon
    iconUrl: '/current-loc.svg',
    iconSize: ICON_SIZE,
  }),
};

export const iconWithColorModeFunction =
  (isDark: boolean) => (cluster: MarkerCluster) => {
    const count = cluster.getChildCount();

    return divIcon({
      html: `
    <div
      class="marker-cluster-icon-back"
      style="
      width: ${3 * (1 + count / 50)}rem;
      height: ${3 * (1 + count / 50)}rem;
      background: ${
        isDark ? 'rgba(64, 64, 64, 0.6);' : 'rgba(255, 255, 255, 0.6);'
      }
      color: ${isDark ? 'white' : 'black'}
      font-size: ${1.25 * (1 + count / 50)}rem;">
      <div 
        class="marker-cluster-icon" 
        style="
        width: ${2.5 * (1 + count / 50)}rem;
        height: ${2.5 * (1 + count / 50)}rem;
        background: ${
          isDark ? 'rgba(64, 64, 64, 1);' : 'rgba(255, 255, 255, 1);'
        }">
          ${cluster.getChildCount()}
      </div>
    </div>`,
      className: 'marker-cluster-icon-container',
      iconSize: point(...ICON_SIZE, true),
    });
  };
