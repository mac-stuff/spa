import {
  Modal,
  Box,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Popup = ({ open, setOpen, modalInfo }) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">color</TableCell>
              <TableCell align="right">year</TableCell>
              <TableCell align="right">pantone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 0,
                },
              }}
            >
              <TableCell component="th" scope="row">
                {modalInfo.id}
              </TableCell>
              <TableCell component="th" scope="row" align="right">
                {modalInfo.name}
              </TableCell>
              <TableCell component="th" scope="row" align="right">
                {modalInfo.color}
              </TableCell>
              <TableCell component="th" scope="row" align="right">
                {modalInfo.year}
              </TableCell>
              <TableCell component="th" scope="row" align="right">
                {modalInfo.pantone_value}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Modal>
  );
};

export default Popup;
