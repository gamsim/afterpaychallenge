import React from 'react'

import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import mockData from '../data/mockData.json'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}))

function Menu() {
  let { id } = useParams()
  const classes = useStyles()

  const menu = mockData.menus.byId[id]
  const { title, buttons } = menu || {}

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
              {title}
            </Typography>
          </Grid>
          {buttons.length &&
            buttons.map((linkId, index) => {
              const linkData = mockData.buttons.byId[linkId]
              return (
                <Grid item xs={12} key={index}>
                  <Button
                    href={linkData.url}
                    variant='contained'
                    color='primary'
                    fullWidth
                  >
                    {linkData.label}
                  </Button>
                </Grid>
              )
            })}
        </Grid>
      </Container>
    </div>
  )
}

export default Menu
