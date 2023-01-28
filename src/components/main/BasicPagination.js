import { Button, Stack } from "@mui/material/";

const BasicPagination = ({
  startIndex,
  setStartIndex,
  endIndex,
  setEndIndex,
}) => {
  const handleClickPrev = () => {
    setStartIndex(startIndex - 5);
    setEndIndex(endIndex - 5);
  };

  const handleClickNext = () => {
    setStartIndex(startIndex + 5);
    setEndIndex(endIndex + 5);
  };
  return (
    <Stack spacing={2} direction="row">
      <Button onClick={handleClickPrev} disabled={startIndex === 0}>
        prev
      </Button>
      <Button onClick={handleClickNext} disabled={startIndex === 5}>
        next
      </Button>
    </Stack>
  );
};

export default BasicPagination;
