import { useEffect, useRef } from "react";
import axios from "axios"
import Dialog from './dialogMap.component'
let coord = [
  {
    gov: "Ariana",
    villes: ["Riadh el Andalous", "Ghazela", "Soukra", "Chotrana", "Ennasr", "Jardins Menzah"]
  },
  {
    gov: "Ben Arous",
    villes: ["Ben Arous", "Mourouj", "Megrine", "Morneg"]
  },
  {
    gov: "Nabeul",
    villes: ["Hammamet", "Nabeul"]
  },
  {
    gov: "Tunis",
    villes: ["Marsa", "Gammarth", "Ain Zaghouan", "Aouina", "Lac 1", "Lac 2", "Kram", "Sidi Boussaid", "Carthage", "Manar", "Mutuelleville" , "Bardo", "Alain Savary", "Menzah 1", "Centre Urbain", "Jardins de Carthage" ]
  },
  
]
export default function Address(props) {
    return(
        <div >
                    <div className="col-lg-12 mb-3">
                      <select className="col-lg-12 mb-3" onChange={(e)=> props.setGov(e.target.value)} value={props.gov}>
                        <option>--Governorat--</option>
                        {coord.map((element, index)=>(
                          <option index={index} key={index}>{element.gov}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-lg-12 mb-3">
                    <select className="col-lg-12 mb-3" onChange={(e)=> props.setCity(e.target.value)} value={props.city}>
                        <option>--Ville--</option>
                        {coord.map((element, index)=>{
                          if(element.gov == props.gov){
                            element.villes = element.villes.sort()
                            return(element.villes.map((ville, index2)=>(
                              <option key={index + "," + index2}>{ville}</option>
                            )))
                          }
                          
                        }
                        )}
                      </select>
                    </div>
                    <div className="col-lg-12 mb-3">
                      <input
                        placeholder="rue"
                        className="form-control"
                        value={props.street}
                        onChange={(e) => props.setStreet(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-12 mb-3">
                      <input
                        placeholder="lat"
                        className="form-control"
                        id="lat"
                        type="number"
                        value={props.lat}
                        onChange={(e) => props.setLat(parseFloat(e.target.value))}
                        hidden
                      />
                    </div>

                    <div className="col-lg-12 mb-3">
                      <input
                        placeholder="lng"
                        className="form-control"
                        id="lng"
                        type="number"
                        value={props.lng}
                        onChange={(e) => props.setLng(parseFloat(e.target.value))}
                        hidden
                      />
                    </div>
                  
                      <Dialog address={`${props.street},${props.city},${props.gov}`} setLat={props.setLat} setLng={props.setLng} />
                  </div>
    )
}