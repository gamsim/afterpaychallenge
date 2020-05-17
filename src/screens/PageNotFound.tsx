import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}))

function PageNotFound() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container maxWidth='sm'>
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='stretch'
          spacing={3}
        >
          <Grid item xs={12}>
            <Typography variant='h5' component='h1' gutterBottom>
              Page not implemented
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default PageNotFound
