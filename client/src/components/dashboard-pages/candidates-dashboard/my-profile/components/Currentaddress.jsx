import { CitiesByStates, StatesByCountry } from '@/data/citydatabase'
import React, { useState ,useEffect} from 'react'

const CurrentAddress = ({ watch, register, setValue, error }) => {
    const [states, setStates] = useState([]);
      const [cities, setCities] = useState([]);
    
      const selectedCountry = watch("contact.current_address.country");
      const selectedState = watch("contact.current_address.state");
      const getStates = (country) => {
        if (country) {
          let availableStates = StatesByCountry(country)
            .map((i) => ({ state: i.state })) // Map to an array of state objects
            .filter((value, index, self) => 
              index === self.findIndex((t) => t.state === value.state) // Remove duplicates
            );
          setStates(availableStates);
        }
      };
      
      const getCities=(state)=>{
        if (state) {
          const availableStates = CitiesByStates(state);
          setCities(availableStates);
        }
      }
    /** Populate States when Country Changes */
    useEffect(() => {
      selectedCountry &&  getStates(selectedCountry)
      selectedState && getCities([selectedState])
    
    }, [selectedCountry,selectedState]);
  return (
          <div className="form-group col-lg-12 col-md-12 mt-2">
          <label>Current Address</label>
          <div>
            <input
              type="text"
              {...register("contact.current_address.lane1")}
              placeholder="Door No./ Flat No. / Address 1"
              required
            />
            <input
              type="text"
              {...register("contact.current_address.lane2")}
              placeholder="Apartment Name / Street Name / Address 2"
              className="mt-4"
              required
            />
            <div className="d-flex gap-3 mt-4">
              {/* Country Dropdown */}
              <select
                {...register("contact.current_address.country")}
                value={selectedCountry}
                onChange={(e)=>{
                  setValue("contact.current_address.country",e.target.value)
                  getStates(e.target.value)
                  setValue("contact.current_address.state","")
                  setValue("contact.current_address.city","")
                }}
                required
              >
                <option value="" hidden>Select Country</option>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
              </select>

              {/* State Dropdown */}
              <select
                {...register("contact.current_address.state")}
                value={selectedState}
                onChange={(e)=>{
                  setValue("contact.current_address.state",e.target.value)
                  getCities(e.target.value)
                  setValue("contact.current_address.city","")
                }}
                required
              >
                <option value="" hidden>Select State</option>
                {states.map((state) => (
                  <option key={state.state} value={state.state}>
                    {state.state}
                  </option>
                ))}
              </select>
            </div>
            <div className="d-flex gap-3 mt-4">
              {/* City Dropdown */}
              <select
                {...register("contact.current_address.city")}
                value={watch("contact.current_address.city")}
                onChange={(e)=>{
                  setValue("contact.current_address.city",e.target.value)
                }}
                required
              >
                <option value="" hidden>Select City</option>
                {cities.map((city) => (
                  <option key={city.city} value={city.city}>
                    {city.city}
                  </option>
                ))}
              </select>
              <input
                type="number"
                {...register("contact.current_address.pin_code")}
                placeholder="Pin Code"
                required
              />
            </div>
          </div>
        </div>
  )
}

export default CurrentAddress