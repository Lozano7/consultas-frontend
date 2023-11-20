'use-client';
import { mainApi } from '@/api/mainApi';
import CustomTextField from '@/app/dashboard/components/forms/theme-elements/CustomTextField';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const SearchStatus = () => {
  const [identification, setIdentification] = useState('');
  const [data, setData] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const execute = async () => {
      setIsError(false);
      try {
        const { data: response } = await mainApi.get<string>(
          `/students/get-status-tramite/${identification}`
        );
        if (response) {
          setData(response);
        }
        setIsSearch(false);
        setIsSuccess(true);
      } catch (error: any) {
        console.log(error);
        setIsSearch(false);
        setIsError(true);
        setData(error?.response?.data?.message || 'Error');
      }
    };
    if (isSearch && identification) {
      execute();
    }
  }, [isSearch, identification]);

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
          <CustomTextField
            variant='outlined'
            fullWidth
            value={identification}
            onChange={(
              e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
            ) => {
              setIdentification(e.target.value);
            }}
          />
        </Box>
      </Stack>
      <Box my={2} display='flex' justifyContent='Center'>
        <Button
          color='primary'
          variant='contained'
          onClick={() => {
            setData('');
            setIsSearch(true);
          }}
        >
          Buscar
        </Button>
      </Box>
      <Box mt={4}>
        {isError ? (
          <Typography
            variant='subtitle1'
            fontWeight={400}
            component='label'
            color='red'
          >
            {data}
          </Typography>
        ) : (
          <>
            {isSuccess && (
              <>
                <Typography
                  variant='subtitle1'
                  fontWeight={400}
                  component='label'
                >
                  {`El estado de su solicitud es: `}
                </Typography>
                <Typography
                  variant='subtitle1'
                  fontWeight={600}
                  component='label'
                >
                  {data}
                </Typography>
              </>
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default SearchStatus;
