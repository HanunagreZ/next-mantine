import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';
import Header from '../../components/Header';

const theme = createTheme({
  fontFamily: 'Poppins, sans-serif',
  colors: {
    white: [
      '#f5f5f5',
      '#e7e7e7',
      '#cdcdcd',
      '#b2b2b2',
      '#9a9a9a',
      '#8b8b8b',
      '#848484',
      '#717171',
      '#656565',
      '#575757',
    ],
    black: [
      '#f1f3f9',
      '#e0e4ec',
      '#bec6d9',
      '#98a7c7',
      '#798cb8',
      '#657baf',
      '#5b73ac',
      '#4b6197',
      '#415687',
      '#354a79',
    ],
    gray: [
      '#f0f4fc',
      '#e4e6eb',
      '#c7cbd1',
      '#a9adb8',
      '#8e95a3',
      '#7d8597',
      '#757d91',
      '#636b7f',
      '#575f73',
      '#495268',
    ],
    'light-gray': [
      '#f3f5f7',
      '#e6e7e7',
      '#c9cccf',
      '#a9b1b8',
      '#8e99a4',
      '#7c8a99',
      '#748394',
      '#617081',
      '#556574',
      '#455768',
    ],
    'light-green': [
      '#ebfef9',
      '#d8fbf2',
      '#abfae5',
      '#7cf8d5',
      '#5bf6c9',
      '#4bf5c2',
      '#41f5bd',
      '#35d9a6',
      '#27c293',
      '#06a77e',
    ],
    green: [
      '#eafdf5',
      '#d9f6e9',
      '#b2ebd2',
      '#88e0b8',
      '#66d7a4',
      '#4fd196',
      '#42ce8f',
      '#33b77b',
      '#27a26c',
      '#128d5b',
    ],
    red: [
      '#fceeee',
      '#f2d9d9',
      '#e9aeae',
      '#e0807f',
      '#d95a58',
      '#d54340',
      '#d43833',
      '#bc2b27',
      '#a82422',
      '#931b1b',
    ],
    'light-red': [
      '#ffeaea',
      '#fbd4d4',
      '#f4a5a5',
      '#ef7474',
      '#ea4b49',
      '#e8322f',
      '#e82521',
      '#ce1916',
      '#b81212',
      '#a1040c',
    ],
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Header />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
