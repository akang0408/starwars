'use client';
import React from 'react';

import { Box, CssBaseline, Paper, ThemeProvider } from '@mui/material';
import Header from 'components/Header/Header';
import getTheme from 'theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Adding descriptive tags can help search engines index your content for better SEO. Added a couple examples below.
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="src/star-wars-logo.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="A Stars Wars Character Search Tool."
        />
        <meta property="og:title" content="Star Wars Character Search." />
        <meta
          property="og:description"
          content="Stars Wars Character Search Tool."
        />
        <meta property="og:url" content="https://starwarssearch.com" />
      </head>
      <body>
        <Box position={'relative'} zIndex={100}>
          <Box maxWidth={{ sm: 720, md: 1236 }} margin={'0 auto'} paddingX={3}>
            <Header />
          </Box>
        </Box>
        <ThemeProvider theme={getTheme()}>
          <CssBaseline />
          <Paper elevation={0}>{children}</Paper>
        </ThemeProvider>
      </body>
    </html>
  );
}
