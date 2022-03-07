import React from "react";
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Pagination from '@mui/material/Pagination';
import { withStyles } from "tss-react/mui";

const defaultFooterStyles = {
};

class CustomFooter extends React.Component {

//   handleRowChange = event => {
//     this.props.changeRowsPerPage(event.target.value);
//   };

  handlePageChange = (_, page) => {
    this.props.changePage(page-1);
  };

  render() {
    const { count, classes, textLabels, rowsPerPage, page } = this.props;
    const footerStyle = {
      display:'flex', 
      justifyContent: 'flex-end',
      padding: '15px 24px'
    };

    const pageCount = Math.ceil(count/rowsPerPage);
    return (
      <TableFooter>
        <TableRow>
          <TableCell style={footerStyle} colSpan={1000}>
            <Pagination
            //   component="div"
              count={pageCount}
            //   rowsPerPage={rowsPerPage}
              page={page+1}
            //   labelRowsPerPage={textLabels.rowsPerPage}
            //   labelDisplayedRows={({ from, to, count }) => `${from}-${to} ${textLabels.displayRows} ${count}`}
            //   backIconButtonProps={{
            //     'aria-label': textLabels.previous,
            //   }}
            //   nextIconButtonProps={{
            //     'aria-label': textLabels.next,
            //   }}
            //   rowsPerPageOptions={[5,10,15]}
              onChange={this.handlePageChange}
            //   onChangeRowsPerPage={this.handleRowChange}
            />
          </TableCell>
        </TableRow>
      </TableFooter>
    );
  }

}

export default withStyles(CustomFooter, defaultFooterStyles, { name: "CustomFooter" });