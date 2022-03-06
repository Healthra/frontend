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
    this.props.changePage(page);
  };

  render() {
    const { count, classes, textLabels, rowsPerPage, page } = this.props;
    const footerStyle = {
      display:'flex', 
      justifyContent: 'flex-end',
      padding: '15px 24px'
    };

    return (
      <TableFooter>
        <TableRow>
          <TableCell style={footerStyle} colSpan={1000}>
            <Pagination
            //   component="div"
              count={count}
            //   rowsPerPage={rowsPerPage}
              page={page}
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