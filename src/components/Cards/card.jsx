import React from 'react'

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
  maxWidth:'80%',
    marginLeft:280,
 marginTop:'20px',
  },
 
  title: {
    fontSize: '20px',
    
   
  },

});
export default function Cards({title}) {
  const classes = useStyles();
  

  return (
    <Card className={classes.root}>
      <CardContent>
       
        <Typography variant="h5" component="h2">
         {title}
        </Typography>
      
      </CardContent>
  
    </Card>
  );
}