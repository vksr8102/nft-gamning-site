import { Box, CircularProgress } from '@mui/material';
import Spiner from '../Spiner/Spiner';

function Loader() {
  return (
    <Box
      sx={{ position: 'fixed', left: 0, top: 0, width: '100%', height: '100%',backgroundImage:"url('/022.png')" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      
    >
      <Spiner/>
    </Box>
  );
}

export default Loader;