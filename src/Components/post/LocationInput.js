import React, { useState, useMemo, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import parse from 'autosuggest-highlight/parse'
import throttle from 'lodash/throttle'
import { GoogleApiWrapper } from 'google-maps-react'
import { usePostStore } from '../../store/PostStore'

const autocompleteService = { current: null }

const useStyles = makeStyles((theme) => ({
   icon: {
      color: theme.palette.text.secondary,
      marginRight: theme.spacing(2),
   },
}))

export function LocationInput(props) {
   const pickupLocation = usePostStore((state) => state.pickupLocation)
   const classes = useStyles()
   const [value, setValue] = useState(pickupLocation)
   const [inputValue, setInputValue] = useState('')
   const [options, setOptions] = useState([])

   const fetch = useMemo(
      () =>
         throttle((request, callback) => {
            request.componentRestrictions = { country: 'ph' }
            autocompleteService.current.getPlacePredictions(request, callback)
         }, 200),

      []
   )

   useEffect(() => {
      let active = true

      if (!autocompleteService.current && window.google) {
         autocompleteService.current =
            new window.google.maps.places.AutocompleteService()
      }
      if (!autocompleteService.current) {
         return undefined
      }

      if (inputValue === '') {
         setOptions(value ? [value] : [])
         return undefined
      }

      fetch({ input: inputValue }, (results) => {
         if (active) {
            let newOptions = []

            if (value) {
               newOptions = [value]
            }

            if (results) {
               newOptions = [...newOptions, ...results]
            }
            setOptions(newOptions)
         }
      })

      return () => {
         active = false
      }
   }, [value, inputValue, fetch])

   return (
      <>
         <Typography
            variant="body1"
            style={{ fontWeight: 'bold', marginTop: '1em' }}
         >
            Pick up location
         </Typography>
         <Autocomplete
            id="google-map-demo"
            getOptionLabel={(option) =>
               typeof option === 'string' ? option : option.description
            }
            filterOptions={(x) => x}
            options={options}
            autoComplete
            includeInputInList
            filterSelectedOptions
            value={value}
            onChange={(event, newValue) => {
               setOptions(newValue ? [newValue, ...options] : options)
               setValue(newValue)

               if (newValue) {
                  props.select(newValue.description)
               } else {
                  props.select('')
               }
            }}
            onInputChange={(event, newInputValue) => {
               setInputValue(newInputValue)
            }}
            renderInput={(params) => (
               <TextField
                  {...params}
                  label="Add a location"
                  variant="outlined"
                  fullWidth
                  margin="normal"
               />
            )}
            renderOption={(option) => {
               const matches =
                  option.structured_formatting.main_text_matched_substrings
               const parts = parse(
                  option.structured_formatting.main_text,
                  matches.map((match) => [
                     match.offset,
                     match.offset + match.length,
                  ])
               )

               return (
                  <Grid container alignItems="center">
                     <Grid item>
                        <LocationOnIcon className={classes.icon} />
                     </Grid>
                     <Grid item xs>
                        {parts.map((part, index) => (
                           <span
                              key={index}
                              style={{ fontWeight: part.highlight ? 700 : 400 }}
                           >
                              {part.text}
                           </span>
                        ))}

                        <Typography variant="body2" color="textSecondary">
                           {option.structured_formatting.secondary_text}
                        </Typography>
                     </Grid>
                  </Grid>
               )
            }}
         />
      </>
   )
}

export default GoogleApiWrapper({
   apiKey: 'AIzaSyDyn1Cs8FHCOEedwL6jWkq1EtWhulBUc70',
})(LocationInput)
