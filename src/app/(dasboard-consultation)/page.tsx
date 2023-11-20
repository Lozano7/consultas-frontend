'use client';
import LogoUg from '@/components/shared/LogoUg';
import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import PageContainer from '../dashboard/components/container/PageContainer';
import SearchStatus from './components/SearchStatus';

const Dashboard = () => {
  const router = useRouter();

  const [isLoggin, setIsLoggin] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('x-token')) {
      setIsLoggin(true);
    }
  }, []);

  return (
    <PageContainer
      title='Consulta el estado de tu solicitud'
      description='this is consulting'
    >
      <Box
        sx={{
          position: 'relative',
          '&:before': {
            content: '""',
            background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
            position: 'absolute',
            height: '100%',
            width: '100%',
            opacity: '0.3',
          },
        }}
      >
        <Grid
          container
          spacing={0}
          justifyContent='center'
          sx={{ height: '100vh' }}
        >
          <Button
            sx={{ position: 'absolute', top: 0, right: 0, m: 2 }}
            variant='outlined'
            color='primary'
            onClick={() => {
              if (isLoggin) {
                router.push('/dashboard/change-status');
              } else {
                router.push('/auth/login');
              }
            }}
          >
            {isLoggin ? 'Ir al panel de administración' : 'Iniciar sesión'}
          </Button>
          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            xl={3}
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Card
              elevation={9}
              sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}
            >
              <LogoUg />
              <Box mt={2}>
                <SearchStatus />
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
