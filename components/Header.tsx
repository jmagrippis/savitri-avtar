import React from 'react'
import Link from 'next/link'
import {
  Typography,
  AppBar,
  Toolbar,
  useScrollTrigger,
} from '@material-ui/core'

export const Header = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return (
    <AppBar
      position="sticky"
      elevation={trigger ? 4 : 0}
      style={{ color: '#ffffff' }}
    >
      <Toolbar>
        <Typography variant="h6" style={{ flex: 1 }}>
          <Link href="/">
            <a>🧘🏻‍ Savitri</a>
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
