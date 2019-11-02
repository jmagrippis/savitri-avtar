import React, { MutableRefObject } from 'react'
import { Grid, IconButton } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

const scroll = (ref: MutableRefObject<any>) =>
  window.scrollTo(0, ref.current.offsetTop)

type Props = {
  target: MutableRefObject<any>
}

export const ScrollToRef = ({ target }: Props) => (
  <div className="next-section">
    <Grid container direction="column" alignItems="center">
      <IconButton
        color="primary"
        aria-label="scroll to next section"
        component="a"
        onClick={() => scroll(target)}
      >
        <KeyboardArrowDownIcon />
      </IconButton>
    </Grid>
  </div>
)
