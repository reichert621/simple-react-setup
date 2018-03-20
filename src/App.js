import React from 'react';
import ReactDOM from 'react-dom';
// Import CSV data
import ports from '../data/ports.csv';
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import custom styles
import './App.less';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ports: [] };
  }

  componentDidMount() {
    this.setState({ ports });
  }

  render() {
    const { ports = [] } = this.state;

    return (
      <div className="container ports-container">
        <h1>My Ports!</h1>
        <div className="ports-table-container">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Code</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {
                ports.map(port => {
                  const { id, name, code, type } = port;

                  return (
                    <tr key={id}>
                      <th>{id}</th>
                      <td>{name}</td>
                      <td>{code}</td>
                      <td>{type}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
