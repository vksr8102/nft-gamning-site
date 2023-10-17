import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { Slide } from '@mui/material';
import { useRouter } from 'next/router';
import {authApi} from "../../mockes/auth";
import Loader from '../Loader/Loader';

export const Authenticated = (props) => {
  const { children } = props;
  const router = useRouter()
  const [verified, setVerified] = useState(false);
  const { enqueueSnackbar } = useSnackbar()


  const isAuthenticated = async () =>{
    const result = await authApi.me();
     if(result){
      setVerified(true);
      enqueueSnackbar('You are successfully authenticated!', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right'
        },
        autoHideDuration: 2000,
        TransitionComponent: Slide
      });
     }
    else 
    router.push('/main?login=false');
  }

  

  useEffect(() => {
   isAuthenticated();   
  }, []);

  if (!verified) {
    return <Loader/>;
  }

  return <>{children}</>;
};

Authenticated.propTypes = {
  children: PropTypes.node
};
