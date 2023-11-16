import { IconEdit, IconUpload } from '@tabler/icons-react';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Change',
  },

  {
    id: uniqueId(),
    title: 'Cambiar estado de solicitud',
    icon: IconEdit,
    href: '/dashboard/change-status',
  },
  {
    navlabel: true,
    subheader: 'Update',
  },
  {
    id: uniqueId(),
    title: 'Actualizar listado',
    icon: IconUpload,
    href: '/dashboard/update-student-list',
  },

  /*{
    id: uniqueId(),
    title: 'Shadow',
    icon: IconCopy,
    href: '/utilities/shadow',
  },
  {
    navlabel: true,
    subheader: 'Auth',
  },
  {
    id: uniqueId(),
    title: 'Login',
    icon: IconLogin,
    href: '/authentication/login',
  },
  {
    id: uniqueId(),
    title: 'Register',
    icon: IconUserPlus,
    href: '/authentication/register',
  },
  {
    navlabel: true,
    subheader: 'Extra',
  },
  {
    id: uniqueId(),
    title: 'Icons',
    icon: IconMoodHappy,
    href: '/icons',
  },
  {
    id: uniqueId(),
    title: 'Sample Page',
    icon: IconAperture,
    href: '/sample-page',
  },*/
];

export default Menuitems;
