import React from 'react'
import { useParams } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import mockData from '../data/mockData.json'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}))

function Page() {
  let { id } = useParams()
  const classes = useStyles()

  const form = mockData.forms.byId[id]
  const { title, fields, submitUrl, cancelUrl } = form || {}

  const handleSubmit = (event) => {
    event.preventDefault()
    const _form = event.target
    const data = new FormData(_form)
    const body = JSON.stringify(Object.fromEntries(data))
    alert(body)
    fetch(submitUrl, {
      method: 'POST',
      body,
    })
      .then((data) => {
        console.log('Success:', data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

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
          {fields.length > 0 && (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                {fields.map((fieldId, index) => {
                  const field = mockData.fields.byId[fieldId]
                  const { dataParse, required, label, type } = field || {}
                  return (
                    <Grid item xs={12} md={6} key={index}>
                      <TextField
                        required={required}
                        label={label}
                        type={type}
                        name={fieldId}
                        data-parse={dataParse}
                        fullWidth
                      />
                    </Grid>
                  )
                })}
                <Grid item xs={12}>
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    href={cancelUrl}
                    variant='contained'
                    color='primary'
                    fullWidth
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Grid>
      </Container>
    </div>
  )
}

export default Page
