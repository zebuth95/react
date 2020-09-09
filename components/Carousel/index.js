import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'

import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Fade } from '@material-ui/core';

export default function XhotCarousel(props){

    const items = [
        {
            image: './todos0.jpg',
        },
        {
            image: './todos1.jpg',
        }
    ]

    return (
        
            <Carousel interval={10000} indicators={false} navButtonsAlwaysInvisible={true} autoPlay={true}>
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
    )
}

function Item(props)
{
    return (
        <>
        <Paper>
            <Fade in={true} timeout={ 5000 }>
                <Card>
                <CardActionArea >
                    <CardMedia
                    component="img" 
                    alt="Contemplative Reptile"
                    image={props.item.image}
                    />
                </CardActionArea>
                </Card>
            </Fade>
        </Paper>
        </>
    )
}