import { Button } from '@material-ui/core';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

import { ComponentToPrint } from './ComponentToPrint';

const Print = ({ infos, work, edu, skills, interests, projects }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint
        infos={infos}
        projects={projects}
        work={work}
        edu={edu}
        skills={skills}
        interests={interests}
        ref={componentRef}
      />
      <Button
        color="primary"
        style={{ margin: 32 }}
        variant="contained"
        onClick={handlePrint}
      >
        {'save '}
        <PictureAsPdfIcon style={{ marginLeft: 8 }} />
      </Button>
    </div>
  );
};

export default Print;
