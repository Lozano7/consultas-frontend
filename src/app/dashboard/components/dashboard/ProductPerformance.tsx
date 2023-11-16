import {
  Box,
  Chip,
  IconButton,
  MenuItem,
  Pagination,
  Select,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { IconEdit } from '@tabler/icons-react';
import DashboardCard from '../shared/DashboardCard';

const products = [
  {
    id: '1',
    name: 'Sunil Joshi',
    post: 'Web Designer',
    pname: 'Elite Admin',
    priority: 'Low',
    pbg: 'primary.main',
    budget: '3.9',
  },
  {
    id: '2',
    name: 'Andrew McDownland',
    post: 'Project Manager',
    pname: 'Real Homes WP Theme',
    priority: 'Medium',
    pbg: 'secondary.main',
    budget: '24.5',
  },
  {
    id: '3',
    name: 'Christopher Jamil',
    post: 'Project Manager',
    pname: 'MedicalPro WP Theme',
    priority: 'High',
    pbg: 'error.main',
    budget: '12.8',
  },
  {
    id: '4',
    name: 'Nirav Joshi',
    post: 'Frontend Engineer',
    pname: 'Hosting Press HTML',
    priority: 'Critical',
    pbg: 'success.main',
    budget: '2.4',
  },
];

const ProductPerformance = () => {
  return (
    <DashboardCard title='Listado de estudiantes'>
      <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
        <Table
          aria-label='simple table'
          sx={{
            whiteSpace: 'nowrap',
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant='subtitle2' fontWeight={600}>
                  N.º
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='subtitle2' fontWeight={600}>
                  Nombre
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='subtitle2' fontWeight={600}>
                  Identificación
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='subtitle2' fontWeight={600}>
                  Correo
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='subtitle2' fontWeight={600}>
                  Estado Solicitud
                </Typography>
              </TableCell>
              <TableCell align='center'>
                <Typography variant='subtitle2' fontWeight={600}>
                  Opciones
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.name}>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: '15px',
                      fontWeight: '500',
                    }}
                  >
                    {product.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Box>
                      <Typography variant='subtitle2' fontWeight={600}>
                        {product.name}
                      </Typography>
                      <Typography
                        color='textSecondary'
                        sx={{
                          fontSize: '13px',
                        }}
                      >
                        {product.post}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography
                    color='textSecondary'
                    variant='subtitle2'
                    fontWeight={400}
                  >
                    {product.pname}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      px: '4px',
                      backgroundColor: product.pbg,
                      color: '#fff',
                    }}
                    size='small'
                    label={product.priority}
                  ></Chip>
                </TableCell>
                <TableCell>
                  <Typography
                    color='textSecondary'
                    variant='subtitle2'
                    fontWeight={400}
                  >
                    Sin solicitud
                  </Typography>
                </TableCell>
                <TableCell align='center'>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconButton>
                      <IconEdit />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={12} align='right'>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'right',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '13px',
                      fontWeight: '400',
                      mr: 1,
                    }}
                  >
                    Showing 1 to 10 of 57 entries
                  </Typography>
                  <Select
                    value='10'
                    size='small'
                    sx={{
                      ml: 1,
                      mr: 1,
                    }}
                  >
                    <MenuItem value='10'>10</MenuItem>
                    <MenuItem value='20'>20</MenuItem>
                    <MenuItem value='30'>30</MenuItem>
                  </Select>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={6} align='center'>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Pagination count={10} />
                </Box>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default ProductPerformance;
