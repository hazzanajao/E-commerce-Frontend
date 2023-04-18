import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

function TvProductTechDetail() {
  {
    /* Option 1 : Not efficient,  */
  }
  const [rowData] = useState([
    { No: '1', Parts: 'Processor Brand', Descriptions: 'Intel' },
    { No: '2', Parts: 'Processor Type', Descriptions: 'Core i7' },
    { No: '3', Parts: 'Processor Speed', Descriptions: '4GHZ' },
    { No: '4', Parts: 'RAM Size', Descriptions: '32GB' },
    { No: '5', Parts: 'Computer Memory Type', Descriptions: 'DDR3 SDRAM' },
    { No: '6', Parts: 'Hard Drive Size', Descriptions: '1000GB' },
    { No: '7', Parts: 'Hard Disk Description', Descriptions: 'SSD' },
    { No: '8', Parts: 'Hard Drive Interface', Descriptions: 'Serial ATA' },
    { No: '9', Parts: 'Connectivity Type', Descriptions: 'Wi-Fi' },
    { No: '10', Parts: 'Operating System', Descriptions: 'Windows 11 Pro' }
  ])

  const [columnDefs] = useState([
    { field: 'No', sortable: true, filter: true },
    { field: 'Parts', sortable: true, filter: true },
    { field: 'Descriptions', sortable: true, filter: true }
  ])

  {
    /* Option 2: Better Option to use !.
    const [columnDefs, setColumnDefs] = useState( [

        {field: ' Computer Parts' },
        {field: ' Descriptions'},
    ])

    const defaultColDef = useMemo(()=>({
        sortable:true,
        filter:true
    }),[])

   useEffect(()=>{
       fetch(' I have to put my api here later when my backend is ready ').then(result=>result.json()).then(rowData=>
       setRowData(rowData))
   }, []);
    */
  }

  return (
    <div className="ag-theme-alpine" style={{ height: 400 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  )
}

export default TvProductTechDetail
