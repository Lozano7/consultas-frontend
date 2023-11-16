'use client';
import SimplePage from '@/components/sample-page/page';
import { Box, Button, Grid } from '@mui/material';
import { IconSearch } from '@tabler/icons-react';
import ProductPerformance from '../components/dashboard/ProductPerformance';
import CustomTextField from '../components/forms/theme-elements/CustomTextField';

const page = () => {
  return (
    <SimplePage
      title='Cambiar el estado de la solicitud de un estudiante'
      subtitle='Busque al estudiante por su número de identificación o por su nombre completo'
    >
      <>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            lg={4}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CustomTextField variant='outlined' fullWidth />
            <Box
              sx={{
                ml: 2,
              }}
            >
              <Button color='primary' variant='contained'>
                <IconSearch />
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3 }}>
          <ProductPerformance />
        </Box>
      </>
    </SimplePage>
  );
};

export default page;
