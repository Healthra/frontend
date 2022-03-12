import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from '@mui/material/Button';
// import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DownloadIcon from '@mui/icons-material/Download';
import PrintIcon from '@mui/icons-material/Print';
import { styled } from '@mui/material/styles';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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

    handleDownloadClick() {
      let title = document.querySelector(".sectionTitle").innerHTML;
      let fileName = title + ".pdf";
      html2canvas(document.querySelector("#healthRecord")).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'pt', 'a4', false);
        pdf.addImage(imgData, 'PNG', 0, 0, 600, 0, undefined, false);
        pdf.save(fileName); 
      });
    }

    handlePrintClick() {
      window.print();
    }

    render() {
        return (
            <React.Fragment>
                {/* <StyledButton variant="contained" startIcon={<FilterAltIcon />} onClick={this.openFilterPopover}>
                    Filter
                </StyledButton>  */}
                <StyledButton variant="contained" startIcon={<DownloadIcon />} onClick={this.handleDownloadClick}>
                    Download
                </StyledButton> 
                <StyledButton variant="contained" startIcon={<PrintIcon />} onClick={this.handlePrintClick}>
                    Print
                </StyledButton> 
            </React.Fragment>
        );
    }

}

export default withStyles(defaultToolbarStyles, { name: "CustomToolbar" })(CustomToolbar);