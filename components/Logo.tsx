import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'

import LogoBox from './styled/LogoBox'

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Josue Retamozo
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo