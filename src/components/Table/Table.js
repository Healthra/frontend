import React from 'react';
import './Table.css';
import MUIDataTable from "mui-datatables";
import CustomToolbar from './CustomToolbar';
import CustomFooter from './CustomFooter';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleSearch() {
      console.log('handle');
  }

  render() {
    const columns = ["Name", "Company", "City", "State"];
    const data = [
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
    ];
    const options = {
        searchOpen: true,
        searchAlwaysOpen: true,
        searchPlaceholder: 'Search',
        viewColumns: false,
        rowsPerPage: 5,
        rowsPerPageOptions: [5, 10, 15],
        download: false,
        print: false,
        filter: false,
        disableToolbarSelect: true,
        customToolbar: () => {
            return (
                <CustomToolbar/>
            );
        },
        customFooter: (count, page, rowsPerPage, changeRowsPerPage, changePage, textLabels) => {
            return (
              <CustomFooter
                count={count}
                page={page}
                rowsPerPage={rowsPerPage}
                changeRowsPerPage={changeRowsPerPage}
                changePage={changePage}
                textLabels={textLabels}
              />
            );
        }
    };
    return (
      <div>
        <MUIDataTable 
            title={"Employee List"} 
            data={data} 
            columns={columns} 
            options={options} 
        />
      </div>
    );
  }
}

export default Table;