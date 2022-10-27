import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import { IMain } from '../../Interfaces/IMain'
import { FC } from 'react'
import Navbar from '../NavBar'

const Main: FC<IMain> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Josue's homepage" />
        <meta name="author" content="Josue Retamozo Vargas" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Josue Retamozo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@JosueRetamozo" />
        <meta name="twitter:creator" content="@JosueRetamozo" />
        <meta name="twitter:image" content="https://twitter.com/JosueRetamozo/photo" />
        <meta property="og:site_name" content="Josue Retamozo Vargas" />
        <meta name="og:title" content="Josue Retamozo" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://twitter.com/JosueRetamozo/photo" />
        <title>Josue Retamozo - Homepage</title>
      </Head>
      <Navbar path={router?.asPath as string} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main