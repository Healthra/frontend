import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DownloadIcon from '@mui/icons-material/Download';
import PrintIcon from '@mui/icons-material/Print';
import { styled } from '@mui/material/styles';

const defaultToolbarStyles = {

};

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

class CustomToolbar extends React.Component {
  
    handleClick = () => {
        console.log("clicked on button!");
    }

    render() {
        return (
            <React.Fragment>
                <StyledButton variant="contained" startIcon={<FilterAltIcon />} onClick={this.handleClick}>
                    Filter
                </StyledButton> 
                <StyledButton variant="contained" startIcon={<DownloadIcon />} onClick={this.handleClick}>
                    Download
                </StyledButton> 
                <StyledButton variant="contained" startIcon={<PrintIcon />} onClick={this.handleClick}>
                    Print
                </StyledButton> 
            </React.Fragment>
        );
    }

}

export default withStyles(defaultToolbarStyles, { name: "CustomToolbar" })(CustomToolbar);