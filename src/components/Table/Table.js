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
        data: []
    }
  }
  
  componentDidMount() {
    this.getTableInfo();
  }

  componentDidUpdate(prevProps) {
    if(this.props.page !== prevProps.page) {
        this.setState({
            page: this.props.page
        }, this.getTableInfo);
    }
  } 

  getTableInfo() {
    let columns = [];
    let data = [];
    switch(this.state.page) {
        case 'medications':
            columns = ["Name", "Directions", "Dosage", "Prescribed by", "Prescribed", "Status"];
            data = [
                ["Levothyroxine", "2 tablets/day", "20 mg", "Dr. Anish Giri", "Jun-10-2000", "Active"],
                ["Lisinopril", "3 tablets/day", "25 mg", "Dr. Ellen Jones", "Jun-10-2018", "Active"],
                ["Metformin", "1 tablet/day", "70 mg", "Dr. Daniel Giri", "Jul-05-2020", "Inactive"],
            ];
            break;
        case 'results':
            columns = ["Name", "Collection Date", "Category", "Ordered by", "Result"];
            data = [
                ["Complete Blood Count (CBC)", "Nov-02,2020", "Hematology", "Dr. Anish Giri", "Warning"],
                ["Basic Metabolic Panel (BMP)",  "May-02,2020", "Hematology", "Dr. Anna Donovali", "Pass"],
                ["Lipid Panel",  "Nov-03,2020", "Hematology", "Dr. Anish Giri", "Warning"],
                ["Urinalysis",  "Oct-02,2021", "Hematology", "Dr. Anish Giri", "Pass"],
            ];
            break;
        case 'conditions':
            columns = ["Name", "Severity", "Recorded by", "Onset Date"];
            data = [
                ["Depression", "Mild", "Dr. Anish Giri", "Jul-03-2021"],
                ["PTSD", "Mild", "Dr. Anish Giri", "Jul-13-2021"],
                ["Eating Disorder", "Moderate", "Dr. Ellen Jones", "Aug-03-2021"],
                ["Anxiety", "Severe", "Dr. Mindy Brown", "Jul-03-2020"],
                ["High Blood Pressure", "Mild", "Dr. Mark Fetto", "Aug-03-2020"],
            ]
            break;
        case 'allergies':
            columns = ["Name", "Criticality", "Category", "Type", "Onset Date", "Status"];
            data = [
                ["Acetaminophen", "High", "Medication", "Allergy", "Jun-10-2021", "Inactive"],
                ["Peanuts", "Low", "Food", "Intolerance", "May-10-2021", "Active"],
                ["House Dust", "Medium", "Environment", "Allergy", "Jun-10-2019", "Inactive"],
                ["Walnuts", "Unable to assess", "Food", "Allergy", "Jun-08-2021", "Active"],
                ["Morphinan Opioid", "High", "Medication", "Allergy", "Jun-10-2021", "Inactive"],
            ];
            break;
        case 'history':
            columns = ["Vaccine", "Type", "Doses Received", "Administered by", "Administered"];
            data = [
                ["Influenza", "Seasonal", "2", "Dr. Ellen Jones", "Jul-02-2022"],
                ["Hepatitus A", "Pediatric", "1", "Dr. Emil Jones", "Jul-03-2022"],
                ["Cholera", "Unspecified", "2", "Dr. Emma Yang", "Sep-02-2022"],
            ];
            break;
        default:
    }
    this.setState({
        columns: columns,
        data: data
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
        disableToolbarSelect: true,
        selectToolbarPlacement: "none",
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