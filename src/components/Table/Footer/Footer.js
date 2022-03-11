import React from "react";
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Pagination from '@mui/material/Pagination';
import { withStyles } from "tss-react/mui";

const defaultFooterStyles = {
};

class Footer extends React.Component {

  handlePageChange = (_, page) => {
    let pageIndex = page-1;
    this.props.changePage(pageIndex);
  };

  render() {
    const { count, rowsPerPage, page, numOfSelectedRows } = this.props;
    const footerStyle = {
      display:'flex', 
      justifyContent: 'flex-end',
      padding: '8px 24px',
      alignItems: 'center'
    };

    const pageCount = Math.ceil(count/rowsPerPage);
    const currentPage = page+1;
    const from = (page*rowsPerPage)+1;
    let to = currentPage*rowsPerPage;
    if (count < to) {
      to = count;
    }
    return (
      <TableFooter>
        <TableRow>
          <TableCell style={footerStyle} colSpan={1000}>
            <p className={numOfSelectedRows === 0 ? 'hide' : ''} style={{marginRight:'auto'}}>{numOfSelectedRows} row(s) selected</p>
            <p className={count === 0 ? 'hide' : ''}>{from}-{to} of {count}</p>
            <Pagination
              count={pageCount}
              page={currentPage}
              size="large"
              onChange={this.handlePageChange}
              className={count <= rowsPerPage ? 'hide' : ''}
            />
          </TableCell>
        </TableRow>
      </TableFooter>
    );
  }

}

export default withStyles(Footer, defaultFooterStyles, { name: "Footer" });