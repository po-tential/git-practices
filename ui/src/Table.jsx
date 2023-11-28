import { useEffect, useRef } from "react";
import useCallTableRef from "./hook/useCallTableRef";
import testdata from './data/test.json';

function Table() {
  const dataTableRef = useRef(null);
  const col = Object.keys(testdata.data[0]);

  useEffect(() => {
    if (dataTableRef.current) {
      new window.simpleDatatables.DataTable(dataTableRef.current);
    }
  }, []);

  return (
    <>
      <div id="layoutSidenav_content">
        <div className="container-fluid px-4">
          <div className="card mb-4">
            <div className="card-header">
              <i className="fa-solid fa-magnifying-glass"></i>
              조회결과
            </div>
            <div className="card-body">
              <table ref={dataTableRef} id="datatablesSimple">
                <thead>
                  <tr>
                    {col.map((column, index) => (
                      <th key={index}>{column}</th>
                    ))}
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    {col.map((column, index) => (
                      <th key={index}>{column}</th>
                    ))}
                  </tr>
                </tfoot>
                <tbody>
                {testdata.data.map((data, index) => (
                    <tr key={index}>
                      {col.map((column, columnIndex) => (
                        <td key={columnIndex}>{data[column]}</td>
                      ))}
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;