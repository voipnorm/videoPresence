import React, { Component } from 'react';
import {BootstrapTable,
    TableHeaderColumn} from 'react-bootstrap-table';
import './table.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

let order = 'desc';
function rowClassNameFormat(row, rowIdx) {
    // row is whole row object
    // rowIdx is index of row
    console.log(row)

    if(row['status'] === 'online'){
        return 'online-Row'
    }else if(row['status'] === 'dnd'){
        return 'dnd-Row'
    }else{
        return 'other-Row'
    }
}


class Table1 extends Component {
    constructor(props) {
        super(props);

        this.options = {
            defaultSortName: 'status',  // default sort column name
            defaultSortOrder: 'desc'  // default sort order
        };
    }
    handleBtnClick = () => {
        if (order === 'desc') {
            this.refs.table.handleSort('asc', 'status');
            order = 'asc';
        } else {
            this.refs.table.handleSort('desc', 'status');
            order = 'desc';
        }
    }
    render() {
        return (
            <div>
                <button onClick={ this.handleBtnClick } type='button' className="btn btn-primary btn-sm">Sort By Endpoint Status</button>
                <BootstrapTable ref="table" data={this.props.data} trClassName={rowClassNameFormat} options={ this.options } pagination>
                    <TableHeaderColumn isKey dataField='cartName'>
                        Exam Room Name
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='cartIP'>
                        IP Address
                    </TableHeaderColumn>
                    <TableHeaderColumn dataSort dataField='status'>
                        Availability
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='location' filter={ { type: 'TextFilter', delay: 1000 } }>
                        Location
                    </TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default Table1;