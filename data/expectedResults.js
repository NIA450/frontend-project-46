export const expectedResults = {
  identical: `{
      host: hexlet.io
      timeout: 50
      proxy: 123.234.53.22
      follow: false
    }`,
  differences: `{
      - timeout: 50
      + timeout: 20
      host: hexlet.io
      - proxy: 123.234.53.22
      + verbose: true
    }`,
  missingKeys: `{
      - proxy: 123.234.53.22
      - follow: false
      + timeout: 20
      + verbose: true
      host: hexlet.io
    }`,
};
