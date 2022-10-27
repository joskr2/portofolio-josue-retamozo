
import { Link, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FC } from 'react'
import { ILinkItem } from '../../Interfaces/ILinkItem'
const LinkItem: FC<ILinkItem> = ({ href, path, target, children, display, alignItems, style, pl, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        display={display}
        alignItems={alignItems}
        style={style}
        pl={pl}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

export default LinkItem