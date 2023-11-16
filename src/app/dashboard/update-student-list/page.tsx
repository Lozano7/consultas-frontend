'use client';
import SimplePage from '@/components/sample-page/page';
import { DragAndDrop } from '@/components/shared/DragAndDrop';

const page = () => {
  return (
    <SimplePage
      title='Actualizar listado de estudiantes matriculados'
      subtitle='Seleccione el archivo de Excel con el listado de estudiantes matriculados o arrástrelo y suéltelo en el área de carga'
    >
      <DragAndDrop
        acceptedFileTypes={{
          'application/vnd.ms-excel': ['.xls'],
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
            '.xlsx',
          ],
        }}
        height='200px'
      />
    </SimplePage>
  );
};

export default page;
