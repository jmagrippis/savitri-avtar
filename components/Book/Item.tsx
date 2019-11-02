import React from 'react'
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  useTheme,
  Theme,
} from '@material-ui/core'

type Props = {
  name: string
  price: string
  description: string
  per?: string
}

export const Item = ({ name, price, description, per }: Props) => {
  const theme = useTheme<Theme>()

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
          <Button variant="contained" color="secondary" size="large" fullWidth>
            Book
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
