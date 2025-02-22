import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

export default function ResultsDashboard({ issues }) {
  const severityColor = {
    Critical: 'error',
    High: 'error',
    Medium: 'warning',
    Low: 'info',
  };

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Typography variant="h6" sx={{ p: 2 }}>Scan Results</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>Severity</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {issues.map((issue, index) => (
            <TableRow key={index}>
              <TableCell>{issue.type}</TableCell>
              <TableCell sx={{ color: severityColor[issue.severity] }}>
                {issue.severity}
              </TableCell>
              <TableCell>{issue.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}