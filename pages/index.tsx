import { Box, Container, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <Container >
      <Box borderRadius="lg" bg="red" p={3} mb={6} textAlign="center" >
        Hi, I&apos;m a front-end developer based in Peru
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Josue Retamozo
          </Heading>
          WebUI developer
        </Box>
      </Box>
    </Container>
  )
}

export default Page;
