import React, { Component } from 'react';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import "./../styles/home.css"
import integrateFunctions from './../actions/integratefuncitons'
import { connect } from 'react-redux';
import { initializeIcons } from '@uifabric/icons';

initializeIcons()
class Home extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            activeTab: "",
            activeEmployeeIds: []
        }
    }
    
    getDepartmentOption() {
        const departmentArray = this.props.data.map(item => {
            return { key: item.department, text: item.department }
        })
        return departmentArray;
    }

    getEmployeeIds() {
        let selecteddata = [];
        this.props.data.forEach(item => {
            if (item.department === this.state.activeTab) {
                selecteddata = item.id;
            }
        })
        const employeeIdArray = selecteddata.map(item => {
            return { key: item, text: item }
        })
        this.setState({ activeEmployeeIds: employeeIdArray })
    }

    changeDropdown(options) {
        this.setState({ activeTab: options.key }, this.getEmployeeIds);

    }

    setEmployeeId(options) {
        this.setState({ activeEmployeeId: options.key })
    }

    clearDetails() {
        this.setState({ employeeData: null, activeTab: "", employeeIdArray: [] })
    }

    getDetails() {
        integrateFunctions.getEmployeeDetailbyId(this.state.activeEmployeeId).then(response => {
            this.setState({ employeeData: response.data })
        }, error => {
            console.log('err');
        })
    }

    render() {
        return (
            <div className="mainContent">
                <div className="formBanner">
                    <Dropdown
                        placeholder="Select Department"
                        label="Departments:"
                        id="DepartmentDrop1"
                        ariaLabel="Departments dropdown"
                        options={this.getDepartmentOption()}
                        onChanged={this.changeDropdown.bind(this)}
                    />

                    <Dropdown
                        placeholder="Select Employee Id"
                        label="Employee Id:"
                        id="EmployeeIdDrop1"
                        ariaLabel="Employee Id dropdown"
                        options={this.state.activeEmployeeIds}
                        onChanged={this.setEmployeeId.bind(this)}
                    />

                    <PrimaryButton
                        data-automation-id="test"
                        text="Get Details"
                        onClick={() => this.getDetails()}
                        allowDisabledFocus={true}
                    />

                    <DefaultButton
                        data-automation-id="test"
                        allowDisabledFocus={true}
                        text="Clear"
                        onClick={() => this.clearDetails()}
                    />
                </div>
                <div className="dataContainer">
                    {this.state.employeeData && <div className="resultContainer">
                        <img src={this.state.employeeData.avatar} alt = "avatar"/>
                        <div className="detailsResult">
                            <span>{"ID:" + this.state.employeeData.id}</span>
                            <span>{"Name:" + this.state.employeeData.first_name + " " + this.state.employeeData.last_name}</span>
                        </div>
                    </div>
                    }
                </div>

            </div>

        );
    }
}



function mapStateToProps(state, props) {
    return {
        data: state.data
    };
}
export default connect(mapStateToProps)(Home);
