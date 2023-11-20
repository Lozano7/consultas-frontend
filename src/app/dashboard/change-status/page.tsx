'use client';
import { mainApi } from '@/api/mainApi';
import SimplePage from '@/components/sample-page/page';
import { Box, Button, Grid } from '@mui/material';
import { IconSearch } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import ProductPerformance from '../components/dashboard/ProductPerformance';
import CustomTextField from '../components/forms/theme-elements/CustomTextField';
import { StudentsResponse } from './interfaces/studentRespondeData.interface';

const Page = () => {
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [data, setData] = useState<StudentsResponse | null>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const execute = async () => {
      setLoading(true);
      try {
        const { data: response } = await mainApi.get<StudentsResponse>(
          '/students',
          {
            params: {
              search,
              page,
              limit: limit,
            },
          }
        );
        setData(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    execute();
  }, [search, page, limit]);

  const handleGetStudents = async () => {
    setLoading(true);
    try {
      const { data: response } = await mainApi.get<StudentsResponse>(
        '/students',
        {
          params: {
            search,
            page,
            limit: limit,
          },
        }
      );
      setData(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <SimplePage
      title='Cambiar el estado de la solicitud de un estudiante'
      subtitle='Busque al estudiante por su número de identificación'
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
            <CustomTextField
              variant='outlined'
              fullWidth
              value={searchInput}
              onChange={(
                e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => {
                setSearchInput(e.target.value);
              }}
            />
            <Box
              sx={{
                ml: 2,
              }}
            >
              <Button
                color='primary'
                variant='contained'
                onClick={() => {
                  setSearch(searchInput);
                }}
              >
                <IconSearch />
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3 }}>
          <ProductPerformance
            students={data}
            setPage={setPage}
            setLimit={setLimit}
            handleGetStudents={handleGetStudents}
          />
        </Box>
      </>
    </SimplePage>
  );
};

export default Page;
