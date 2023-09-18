import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Aboutpage() {
    const theme = useTheme();
 
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{marginTop: 10}}>
        <Box>


<h2>Event Affair</h2>
    <p>
    Welcome to our event management company based in Patna! We are a team of highly skilled and experienced professionals who are dedicated to providing exceptional event management services for our clients.
    </p>
<p>
<b>"we plan event like your family member not like a service provider"</b>

</p><p>


We understand that planning and executing a successful event requires careful planning, attention to detail, and a deep understanding of our clients' needs and objectives. That's why we work closely with our clients to understand their vision and goals for the event, and use our expertise and industry knowledge to deliver a truly memorable experience.
</p><p>
Our services include everything from event conceptualization and planning to vendor management, logistics, and on-site coordination. We have extensive experience in managing a wide range of events, including weddings, corporate events, conferences, exhibitions, and more.
</p><p>
At our event management company, we believe in delivering outstanding customer service at every stage of the event planning process. Our team is always available to answer your questions, address your concerns, and ensure that your event runs smoothly and seamlessly from start to finish.
</p><p>
So if you're looking for an event management company that can deliver exceptional results and exceed your expectations, look no further. Contact us today to learn more about our services and start planning your next successful event!

    </p>
            
        </Box>




      </Container>
    </React.Fragment>
  );
}