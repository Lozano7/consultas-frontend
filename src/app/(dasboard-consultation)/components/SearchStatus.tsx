import CustomTextField from '@/app/dashboard/components/forms/theme-elements/CustomTextField';
import { Box, Button, Stack, Typography } from '@mui/material';

const SearchStatus = () => {
  return (
    <>
      <Stack>
        <Box>
          <Typography
            variant='subtitle1'
            fontWeight={600}
            component='label'
            htmlFor='username'
            mb='5px'
          >
            Ingrese el número de cédula
          </Typography>
          <CustomTextField variant='outlined' fullWidth />
        </Box>
      </Stack>
      <Box my={2} display='flex' justifyContent='Center'>
        <Button color='primary' variant='contained'>
          Buscar
        </Button>
      </Box>
      <Box mt={4}>
        <Typography variant='subtitle1' fontWeight={400} component='label'>
          El estado de su solicitud es:
        </Typography>
        <Typography variant='subtitle1' fontWeight={600} component='label'>
          {` Aprobada`}
        </Typography>
      </Box>
    </>
  );
};

export default SearchStatus;
