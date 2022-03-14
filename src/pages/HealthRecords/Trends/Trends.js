import React from 'react';
import '../HealthRecords.css';

import PropTypes from "prop-types";
import SelectUnstyled, {
  selectUnstyledClasses
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses
} from "@mui/base/OptionUnstyled";
import OptionGroupUnstyled from "@mui/base/OptionGroupUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";
import Chart from '../../../components/Chart/Chart'

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75"
};

const grey = {
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027"
};

const StyledButton = styled("button")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: bold;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 200px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 0px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
  border-radius: 0em;
  margin: 0.5em;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};

  &:hover {
    background: #F8F8F8;;
  }

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[100]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
    background: #F8F8F8;
  }

  &::after {
    content: '▾';
    float: right;
  }
  `
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 0px 0;
  min-width: 300px;
  background: #F8F8F8;
  border: 0px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
  border-radius: 0em;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  overflow: auto;
  outline: 0px;
  `
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 0em;
  cursor: default;
  color: #5F5A5A;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: #FFB6C1;
    color: #285B1B;
    text-decoration-line: underline;
    font-weight: bold;
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: #f8f8f8;
    color: #285B1B;
    font-weight: bold;
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    color: #285B1B;
    font-weight: bold;
  }

  &.${optionUnstyledClasses.disabled} {
    color: #5F5A5A;
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    color: #285B1B;
    font-weight: bold;
  }
  `
);

const StyledGroupRoot = styled("li")`
  list-style: none;
`;

const StyledGroupHeader = styled("span")`
  display: block;
  padding: 15px 0 5px 10px;
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 0.05rem;
  color: #000000;
`;

const StyledGroupOptions = styled("ul")`
  list-style: none;
  margin-left: 0;
  padding: 0;

  > li {
    padding-left: 20px;
  }
`;

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

function CustomSelect(props) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components
  };

  return <SelectUnstyled {...props} components={components} />;
}

CustomSelect.propTypes = {
  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Listbox: PropTypes.elementType,
    Popper: PropTypes.func,
    Root: PropTypes.elementType
  })
};

const CustomOptionGroup = React.forwardRef(function CustomOptionGroup(
  props,
  ref
) {
  const components = {
    Root: StyledGroupRoot,
    Label: StyledGroupHeader,
    List: StyledGroupOptions,
    ...props.components
  };

  return <OptionGroupUnstyled {...props} ref={ref} components={components} />;
});

CustomOptionGroup.propTypes = {
  /**
   * The components used for each slot inside the OptionGroupUnstyled.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Label: PropTypes.elementType,
    List: PropTypes.elementType,
    Root: PropTypes.elementType
  })
};


class Trends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeValue:  "heightData",
      timeValue: "All Time",
      unit: "cm",
      data: this.props.data,
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.data !== prevProps.data) {
        this.setState({
            data: this.props.data,
        });
    }
  } 

  setUnitandType(typeValue) {
    switch(typeValue) {
      case 'bpDiastolicData':
        return this.setState({
          typeValue,
          unit: 'mmHg'
        });
      case 'heartDataTwoYears':
        return this.setState({
          typeValue,
          unit: 'BPM'
        });
      case 'respirationData':
        return this.setState({
          typeValue,
          unit: 'breaths/min'
        });
      case 'temperatureData':
        return this.setState({
          typeValue,
          unit: 'Celcius'
        });
      case 'heightData':
        return this.setState({
          typeValue,
          unit: 'cm'
        });
      case 'weightData':
        return this.setState({
          typeValue,
          unit: 'lbs'
        });
      default:
        return this.setState({
          typeValue,
          unit: 'lbs'
        });
    }
  }

  type() {
    return (
      <CustomSelect onChange={(value)=> this.setUnitandType(value)} defaultValue="heightData">
        <CustomOptionGroup label="Vitals">
          <StyledOption value="bpDiastolicData">Blood Pressure</StyledOption>
          <StyledOption value="heartDataTwoYears">Heart Rate</StyledOption>
          <StyledOption value="respirationData">Respiration Rate</StyledOption>
          <StyledOption value="temperatureData">Temperature</StyledOption>
          <StyledOption value="heightData">Height</StyledOption>
          <StyledOption value="weightData">Weight</StyledOption>
        </CustomOptionGroup>
        <CustomOptionGroup label="Complete Blood Count (CBC)">
          <StyledOption value="Red Blood Cell Count">
            Red Blood Cell Count
          </StyledOption>
          <StyledOption value="White Blood Cell Count">
            White Blood Cell Count
          </StyledOption>
          <StyledOption value="Platelet Count">Platelet Count</StyledOption>
          <StyledOption value="Hemoglobin">Hemoglobin</StyledOption>
          <StyledOption value="Hematocrit">Hematocrit</StyledOption>
        </CustomOptionGroup>
        <CustomOptionGroup label="Basic Metabolic Panel (BMP)">
          <StyledOption value="Glucose">Glucose</StyledOption>
          <StyledOption value="Calcium">Calcium</StyledOption>
          <StyledOption value="Creatinine">Creatinine</StyledOption>
          <StyledOption value="Potassium">Potassium</StyledOption>
          <StyledOption value="Sodium">Sodium</StyledOption>
          <StyledOption value="Carbon Dioxide (Bicarbonate)">
            Carbon Dioxide (Bicarbonate)
          </StyledOption>
        </CustomOptionGroup>
      </CustomSelect>
    );
  }

  time() {
    return (
      <CustomSelect onChange={v=> this.setState({ timeValue: v})} defaultValue="All Time">
        <StyledOption value="All Time">All Time</StyledOption>
        <StyledOption value="Last 5 Years">Last 5 Years</StyledOption>
        <StyledOption value="Last 2 Years">Last 2 Years</StyledOption>
        <StyledOption value="Last Year">Last Year</StyledOption>
      </CustomSelect>
    );
  }
  

  render() {
    return (
      <div>
        <h1 className='sectionTitle'>Trends</h1>
        <div style={{
          display: 'flex', justifyContent: 'flex-end', marginTop: '-20px'
        }}>
          {this.type()}
          {this.time()}
        </div>
        <Chart typeValue={this.state.typeValue} timeValue={this.state.timeValue} unit={this.state.unit} data={this.state.data} />
      </div>
    );
  }
}

export default Trends;
