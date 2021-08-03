import urlParse from 'url-parse';
import { compile } from 'path-to-regexp';
import queryString from 'query-string';
import isEmpty from 'lodash/isEmpty';

export default function compileUrl(
  url: string,
  pathMapping = {},
  queryMapping = {},
): string {
  const { pathname } = urlParse(url);

  let compiledUrl = compile(pathname, { encode: encodeURIComponent })(
    pathMapping,
  );

  if (!isEmpty(queryMapping)) {
    compiledUrl += `?${queryString.stringify(queryMapping, {
      skipEmptyString: true,
      skipNull: true,
    })}`;
  }

  return compiledUrl;
}
