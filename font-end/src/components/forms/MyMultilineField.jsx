import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Controller} from 'react-hook-form'
export default function MyMultilineField(props)

{
    const {name, control} = props
  return (
    <Controller 
    name = {name}
    control = {control}
    render= {({
      field:{onChange, value},
      fieldState:{error},
      formState,

    }) => (


        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          defaultValue='Default Value'
        />
        
 
    )}
    
    />  );
}
