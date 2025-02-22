import { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Box, CircularProgress } from '@mui/material';

export default function ScanForm() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [scanId, setScanId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/scan', { url });
      setScanId(response.data.scan_id); // Save scan ID for polling
    } catch (error) {
      alert('Scan failed: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, margin: 'auto' }}>
      <TextField
        fullWidth
        label="Enter Website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
        placeholder="https://example.com"
      />
      <Button type="submit" variant="contained" disabled={loading} sx={{ mt: 2 }}>
        {loading ? <CircularProgress size={24} /> : 'Scan Website'}
      </Button>
    </Box>
  );
}