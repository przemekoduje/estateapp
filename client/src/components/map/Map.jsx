import { MapContainer, TileLayer } from 'react-leaflet'
import './map.scss'
import 'leaflet/dist/leaflet.css'
import Pin from '../pin/Pin'

export default function Map({items}) {
  return (
    <MapContainer 
      className='map' 
      center={
        items.length === 1
          ? [items[0].latitude, items[0].longitude]
          : [50.30951172724808, 18.695251291855346]
      }
      
      zoom={6} 
      scrollWheelZoom={false}
    >

    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map(item=> (
        <Pin item={item} key={item.id} />
    ))}
  </MapContainer>
  )
}
