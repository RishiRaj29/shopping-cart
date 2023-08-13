import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import '../styles/colors.scss';
import { AppContext } from '../context/AppContext';

const style = {
  position: 'absolute',
  top: '16%',
  left: '90%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { setIsSort } = useContext(AppContext);

  return (
    <div>
      <Button onClick={handleOpen} style={{'color':'white'}}>Sort Results</Button>
      <Modal 
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} onChange={(e)=>{setIsSort(e.target.value)}}>
            <input type="radio" value="asec" name="sort" /> Low to High
            <input type="radio" value="desc" name="sort" /> High to Low
            <input type="radio" value="none" name="sort" /> None
        </Box>
      </Modal>
    </div>
  );
}