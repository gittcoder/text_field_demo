import TextField from '@mui/material/TextField';
import WebFont from 'webfontloader';
import React, { useState, useEffect } from 'react';
import {makeStyles} from '@mui/styles';

const ScalableTextField =({param})=>
{
    useEffect(() => {
        WebFont.load({
          google: {
            families: [param.inputStyles.fontFamily,param.inputLabelStyles.fontFamily]
          }
        });
       }, []);
        const borders= param.border;
        
        const useStyles=makeStyles({
            root:{
                "& > *": {
                    width:'25ch'
                }
            },
            textField: param.border
        });

        const classes=useStyles();
        console.log(classes.textField);
        return(
            

            <div class="abc">
            <TextField
            className={classes.textField}
            id={param.id} 
            label={param.label} 
            variant={param.variant} 
            inputProps={{style: param.inputStyles}} 
            InputLabelProps={{style:param.inputLabelStyles}}
            defaultValue={param.default} 
            color={param.color}
            />
            
            </div>
            )
}

export default ScalableTextField