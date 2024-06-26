import Card from '../card/Card'
import './list.scss'
import { listData } from '../../lib/dummydata'

export default function List() {
  return (
    <div className='list'>
    {listData.map(item=> (
        <Card key={item.id} item={item} />
    ))}
    
    </div>
  )
}
