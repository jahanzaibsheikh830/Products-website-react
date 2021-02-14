import React, { useEffect, useState } from 'react'
import ProductCard from './productcard'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 50
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
function Product() {
    let [product, setProduct] = useState({});
    const classes = useStyles();

    useEffect(() => {
        async function getData() {
            let data = await fetch('https://fakestoreapi.com/products')
            let jsonData = await data.json()
            setProduct(jsonData)
        }
        getData()
    }, [])
    console.log(product)
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {Object.keys(product).map((key) => {
                    return (
                        <Grid item xs={12} sm={4} key={key}>
                            <ProductCard title={product[key].title}
                                price={product[key].price}
                                category={product[key].category}
                                image={product[key].image}
                            />
                            {/* <Paper className={classes.paper}>xs</Paper> */}
                        </Grid>
                    )
                })}

            </Grid>
        </div>
    );
}

export default Product

