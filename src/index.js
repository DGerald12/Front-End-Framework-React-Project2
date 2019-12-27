import React from 'react';
import ReactDOM from 'react-dom';

const TableofStates = (title1, title2, title3) => {
    return (
        <table>
            <tr>
                <th>{title1}</th>
                <th>{title2}</th>
                <th>{title3}</th>
            </tr>
            <tr>
                <td>Idaho</td>
                <td>1.683 million</td>
                <td>Boise</td>
            </tr>
            <tr>
                <td>Tennessee</td>
                <td>6.651 million</td>
                <td>Nashville</td>
            </tr>
            <tr>
                <td>Maine</td>
                <td>1.331 million</td>
                <td>Augusta</td>
            </tr>
            <tr>
                <td>Wisconsin</td>
                <td>5.779 million</td>
                <td>Madison</td>
            </tr>
        </table>
    );
};

ReactDOM.render(
    TableofStates('States', 'Population', 'Capital'),
    document.getElementById('root')
);