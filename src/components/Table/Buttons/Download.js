import React from "react";
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
    boxShadow: 'none',
    margin: '5px',
    backgroundColor: '#D3DEFA',
    color: '#5F5A5A',
    border: '1px solid',
    borderColor: '#BEC8E2',
    fontFamily: [
      'Inter-Bold',
    ].join(','),
    '&:hover': {
      backgroundColor: '#D3DEFA',
    },
    '&:active': {
      backgroundColor: '#D3DEFA',
    }
  });

class Download extends React.Component {
    render() {
        return (
            <React.Fragment>
                <StyledButton variant="contained" startIcon={<DownloadIcon />}>
                    Download
                </StyledButton> 
            </React.Fragment>
        );
    }

}

export default Download;