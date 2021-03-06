
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    color:{
        color: "#fff"
    }
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        E-Shop
                    </Typography>
                    <Button >
                        <Link className={classes.color} to="/">Home</Link>
                    </Button>
                    <Button>
                        <Link to="/about" className={classes.color}>About</Link>
                    </Button>
                    <Button>
                        <Link to="/product" className={classes.color}>Product</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
