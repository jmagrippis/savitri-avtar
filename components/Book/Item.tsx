import React, { useState } from 'react'
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  useTheme,
  Theme,
  CircularProgress,
} from '@material-ui/core'

import { checkout } from './checkout'

type Props = {
  id: string
  name: string
  price: string
  description: string
  per?: string
}

export const Item = ({ id, name, price, description, per }: Props) => {
  const theme = useTheme<Theme>()
  const [loading, setLoading] = useState(false)

  const onBook = async () => {
    setLoading(true)

    await checkout(id).catch(console.log)

    setLoading(false)
  }

  return (
    <>
      <Card>
        <CardContent style={{ minHeight: '33vh' }}>
          <Typography variant="h3" component="h2" gutterBottom>
            {name}
          </Typography>
          <div className="price">
            <Typography variant="h2" component="h4" color="primary">
              {price}
            </Typography>
            {per && (
              <Typography variant="subtitle1" color="textSecondary">
                / per {per}
              </Typography>
            )}
          </div>
          <Typography variant="body1" paragraph>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            fullWidth
            onClick={onBook}
          >
            {loading ? <CircularProgress size={26} /> : 'Book'}
          </Button>
        </CardActions>
      </Card>
      <style jsx>{`
        .price {
          display: flex;
          align-items: flex-end;
          margin-bottom: ${theme.spacing(3)}px;
        }
      `}</style>
    </>
  )
}
