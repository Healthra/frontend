import React from 'react';
import './Table.css';
import MUIDataTable from "mui-datatables";
import CustomToolbar from './CustomToolbar';
import CustomFooter from './CustomFooter';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        page: this.props.page,
        columns: [],
        data: [],
        selectedRows: []
    }

    this.onRowSelectionChange = this.onRowSelectionChange.bind(this);
  }
  
  componentDidMount() {
    this.getTableInfo();
  }

  componentDidUpdate(prevProps) {
    if(this.props.page !== prevProps.page) {
        this.setState({
            page: this.props.page,
            selectedRows: []
        }, this.getTableInfo);
    }
  } 

  compareDates(order, obj1, obj2) {
    const dateMap = {
        "jan": 0, "feb": 1, "mar": 2, "apr": 3, "may": 4, "jun": 5, "jul": 6, "aug": 7, "sep": 8, "oct": 9, "nov": 10, "dec": 11
    }
    let date1 = obj1.data.split('-');

    let month1 = dateMap[date1[0].toLowerCase()];
    let day1 = parseInt(date1[1]);
    let year1 = parseInt(date1[2]);

    let date2 = obj2.data.split('-');
    let month2 = dateMap[date2[0].toLowerCase()];
    let day2 = parseInt(date2[1]);
    let year2 = parseInt(date2[2]);

    let val1 = new Date(year1, month1, day1);
    let val2 = new Date(year2, month2, day2);
    return (val1 - val2) * (order === 'asc' ? 1 : -1);
  }

  getTableInfo() {
    let columns = [];
    let data = [];
    switch(this.state.page) {
        case 'medications':
            columns = [{name: "Name",}, {name: "Directions",}, {name: "Dosage",}, {name: "Prescribed by",}, 
            {
                name: "Prescribed",
                options: {
                    sortCompare: (order) => {
                        return (obj1, obj2) => {
                            return this.compareDates(order, obj1, obj2);
                        }
                    }
                }
            }, {name: "Status"}];
            data = [
                ["Levothyroxine", "2 tablets/day", "20 mg", "Dr. Anish Giri", "Jun-10-2000", "Active"],
                ["Lisinopril", "3 tablets/day", "25 mg", "Dr. Ellen Jones", "Jun-10-2018", "Active"],
                ["Metformin", "1 tablet/day", "70 mg", "Dr. Daniel Giri", "Jul-05-2020", "Inactive"],
            ];
            break;
        case 'results':
            columns = [{name: "Name",}, {
                name: "Collection Date",
                options: {
                    sortCompare: (order) => {
                        return (obj1, obj2) => {
                            return this.compareDates(order, obj1, obj2);
                        }
                    }
                }
            }, {name: "Category",}, {name: "Ordered by",}, {name: "Result"}];
            data = [
                ["Complete Blood Count (CBC)", "Nov-02,2020", "Hematology", "Dr. Anish Giri", "Warning"],
                ["Basic Metabolic Panel (BMP)",  "May-02,2020", "Hematology", "Dr. Anna Donovali", "Pass"],
                ["Lipid Panel",  "Nov-03,2020", "Hematology", "Dr. Anish Giri", "Warning"],
                ["Urinalysis",  "Oct-02,2021", "Hematology", "Dr. Anish Giri", "Pass"],
            ];
            break;
        case 'conditions':
            columns = [{name: "Name",}, {name: "Severity",}, {name: "Recorded by",}, {
                name:"Onset Date",
                options: {
                    sortCompare: (order) => {
                        return (obj1, obj2) => {
                            return this.compareDates(order, obj1, obj2);
                        }
                    }
                }
            }];
            data = [
                ["Depression", "Mild", "Dr. Anish Giri", "Jul-03-2021"],
                ["PTSD", "Mild", "Dr. Anish Giri", "Jul-13-2021"],
                ["Eating Disorder", "Moderate", "Dr. Ellen Jones", "Aug-03-2021"],
                ["Anxiety", "Severe", "Dr. Mindy Brown", "Jul-03-2020"],
                ["High Blood Pressure", "Mild", "Dr. Mark Fetto", "Aug-03-2020"],
            ]
            break;
        case 'allergies':
            columns = [{name:"Name"}, {name:"Criticality"}, {name:"Category"}, {name:"Type"}, {
                name: "Onset Date",
                options: {
                    sortCompare: (order) => {
                        return (obj1, obj2) => {
                            return this.compareDates(order, obj1, obj2);
                        }
                    }
                }
            }, {name:"Status"}];
            data = [
                ["Acetaminophen", "High", "Medication", "Allergy", "Jun-10-2021", "Inactive"],
                ["Peanuts", "Low", "Food", "Intolerance", "May-10-2021", "Active"],
                ["House Dust", "Medium", "Environment", "Allergy", "Jun-10-2019", "Inactive"],
                ["Walnuts", "Unable to assess", "Food", "Allergy", "Jun-08-2021", "Active"],
                ["Morphinan Opioid", "High", "Medication", "Allergy", "Jun-10-2021", "Inactive"],
                ["Acetaminophen", "Medium", "Medication", "Allergy", "Jun-10-2021", "Inactive"],
                ["Peanuts", "Low", "Food", "Intolerance", "May-10-2021", "Active"],
                ["House Dust", "Medium", "Environment", "Allergy", "Jun-10-2019", "Inactive"],
                ["Walnuts", "Unable to assess", "Food", "Allergy", "Jun-08-2021", "Active"],
                ["Morphinan Opioid", "High", "Medication", "Allergy", "Jun-10-2021", "Inactive"],
            ];
            break;
        case 'immunizations':
            columns = [{name:"Vaccine"}, {name:"Type"}, {name:"Doses Received"}, {name:"Administered by"}, {
                name:"Administered",
                options: {
                    sortCompare: (order) => {
                        return (obj1, obj2) => {
                            return this.compareDates(order, obj1, obj2);
                        }
                    }
                }
            }];
            data = [
                ["Influenza", "Seasonal", "2", "Dr. Ellen Jones", "Jul-02-2022"],
                ["Hepatitus A", "Pediatric", "1", "Dr. Emil Jones", "Jul-03-2022"],
                ["Cholera", "Unspecified", "2", "Dr. Emma Yang", "Sep-02-2022"],
            ];
            break;
        case 'family':
            columns = ["Condition", "Member Name", "Relationship", "Age at Diagnosis"];
            data = [
                ["Depression", "Ella Jones", "Mother", "22"],
                ["Anxiety", "Emil Jones", "Father", "23"],
                ["Depression", "Emmalina Brown", "Grandmother", "33"],
                ["PTSD", "Jordan Brown", "Grandfather", "30"],
                ["Depression", "Elsa Jones", "Sister", "18"],
            ];
            break;
        case 'procedures':
            columns = ["Name", "Category", "Location", "Performed by", {
                name:"Performed",
                options: {
                    sortCompare: (order) => {
                        return (obj1, obj2) => {
                            return this.compareDates(order, obj1, obj2);
                        }
                    }
                }
            }];
            data = [
                ["Psychological Evaluation", "Psychiatry", "Dufferin Hospital", "Dr. Ellen Jones", "Jul-02-2022"],
                ["Brain Surgery", "Surgical", "Dufferin Hospital", "Dr. Emil Jones", "Jul-03-2022"],
                ["Heart Surgery", "Surgical", "Caledon Hospital", "Dr. Emma Yang", "Sep-02-2022"],
            ];
            break;
        case 'illnesses':
            columns = ["Name", "Severity", "Recorded by", {
                name:"Onset Date",
                options: {
                    sortCompare: (order) => {
                        return (obj1, obj2) => {
                            return this.compareDates(order, obj1, obj2);
                        }
                    }
                }
            }];
            data = [
                ["Addiction", "Severe", "Dr. Ellen Jones", "Jul-02-2022"],
                ["Eating Disorder", "Moderate", "Dr. Emil Jones", "Jul-03-2022"],
                ["PTSD", "Mild", "Dr. Emma Yang", "Sep-02-2022"],
            ];
            break;
        default:
    }
    this.setState({
        columns: columns,
        data: data
    })
  }

  onRowSelectionChange(allRows) {
      this.setState({
          selectedRows: allRows
      })
  }

  onRowClick(row) {
      let selectedRows = this.state.selectedRows;      
      for (let i=0; i<selectedRows.length;i++) {
          if (selectedRows[i].dataIndex === row.dataIndex) {
              this.deselectRow(i);
              return;
          }
      }
      this.selectRow(row);
  }

  deselectRow(index) {
    let selectedRows = this.state.selectedRows;
    selectedRows.splice(index, 1);
    this.setState({
        selectedRows: selectedRows
    })
  }

  selectRow(row) {
    let selectedRows = this.state.selectedRows;      
    selectedRows.push(row);
    this.setState({
        selectedRows: selectedRows
    })
  }

  render() {
    let columns = this.state.columns;
    let data = this.state.data;
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
        filterType: 'multiselect',
        disableToolbarSelect: true,
        selectToolbarPlacement: "none",
        onRowSelectionChange: (currentRow, allRows) => {
            this.onRowSelectionChange(allRows)
        },
        onRowClick: (rowData, rowMeta) => {
            let row = {
                index: rowMeta.rowIndex,
                dataIndex: rowMeta.dataIndex
            }
            this.onRowClick(row);
        },
        rowsSelected: this.state.selectedRows.map((entry) => {
            return entry.dataIndex;
        }),
        customToolbar: () => {
            return (
                <CustomToolbar/>
            );
        },
        customFooter: (count, page, rowsPerPage, changeRowsPerPage, changePage) => {
            return (
              <CustomFooter
                count={count}
                page={page}
                rowsPerPage={rowsPerPage}
                numOfSelectedRows={this.state.selectedRows.length}
                changePage={changePage}
              />
            );
        }
    };
    return (
      <div>
        <MUIDataTable 
            title={"Table"} 
            data={data} 
            columns={columns} 
            options={options} 
        />
      </div>
    );
  }
}

export default Table;