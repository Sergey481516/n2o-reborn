import replace from 'lodash/replace';

export default function generateUrl(entity: string, path = ''): string {
  return replace(`/${entity}/${path}`, /\/\//g, '/');
}
