import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Paper,
  styled,
  Box,
  Button,
  CircularProgress,
  Typography,
  TableCell,
  TextField,
} from "@mui/material";
 
export const FlexRowContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

export const FlexColumnContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const CenterBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  color: "white",
}));
export const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  position: "absolute";
`;

export const BlackBox = styled(Box)`
  width: 22px;
  height: 21px;
  background: #000000 0% 0% no-repeat padding-box;
  margin-bottom: 11px;
`;

export const FiveBlackBoxes = () => {
  return (
    <Container>
      <BlackBox />
      <BlackBox />
      <BlackBox />
      <BlackBox />
      <BlackBox />
    </Container>
  );
};

export const TableCellHeader = styled(TableCell)({
  overflow: "hidden",
  textOverflow: "ellipsis",
  borderStyle: "border-box",
  fontWeight: "bold",
  fontSize: "18px",
});

export const StyledTable = styled(Table)({
  maxWidth: 300,
});
