import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function Create(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        color="secondary"
        component={Link}
        to={props.url}
      >
        Create
      </Button>
    </Stack>
  );
}
