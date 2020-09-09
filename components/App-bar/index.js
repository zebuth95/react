import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';

import { Logo } from '../Logo';
import { Fade } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  }
}));

export default function ButtonAppBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Fade in={true} timeout={ 4000 }>
        <AppBar style={{  
          position: 'fixed', 
          backgroundColor: 'black',
          backgroundImage: `url(${"/barra.png"})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: "center",
          backgroundSize: "cover",
          }}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Link  href="/">
            <a>
              <Logo/>
            </a>
            </Link>
          </Toolbar>
        </AppBar>
        </Fade>
      </div>
    );
  }