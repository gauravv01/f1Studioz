import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import AddForm from './AddForm';
import constants from '../../Data/Constants/Constants';
import './FormData.css';

function FormData() {
const data=useSelector(state=>state.ColectFormDataSlice.dataArray)

return (
    <div className='table-div'>
    <Table striped bordered hover size='xxs' className='table-data' >
      <thead>
        <tr style={{backgroundColor:'white'}}>
          <th>{constants.ASSEMBLY_TYPE}</th>
          <th>{constants.WINDCODE}</th>
          <th>{constants.DESIGN}</th>
          <th>{constants.COLOR}</th>
          <th>{constants.WIDTH}</th>
          <th>{constants.HEIGHT}</th>
        </tr>
      </thead>
      <tbody>
      {data.map((itm)=>{return <tr style={{backgroundColor:'white'}} key={itm.Width}>
        <td>{itm.Assembly_type}</td>
        <td>{itm.WindCode}</td>
        <td>{itm.Design}</td>
        <td>{itm.Color}</td>
        <td>{itm.Width}</td>
        <td>{itm.Height}</td>
      </tr>})}
      </tbody>
    </Table>
    <AddForm/>
    </div>
  );
}

export default FormData;