import { CitiesByStates, StatesByCountry } from '@/data/citydatabase';
import React, { useState, useEffect } from 'react';
import CurrentAddress from './Currentaddress';

const ContactInformation = ({ watch, register, setValue, error }) => {
  const [sameAddress, setSameAddress] = useState(false);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const selectedCountry = watch("contact.permanent_address.country");
  const selectedState = watch("contact.permanent_address.state");
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



  /** Handle Checkbox: Same as Permanent Address */
  const handleSameAddressChange = (e) => {
    setSameAddress(e.target.checked);

    if (e.target.checked) {
      const permanentAddress = watch("contact.permanent_address");

      setValue("contact.current_address.lane1", permanentAddress.lane1 || '');
      setValue("contact.current_address.lane2", permanentAddress.lane2 || '');
      setValue("contact.current_address.city", permanentAddress.city || '');
      setValue("contact.current_address.state", permanentAddress.state || '');
      setValue("contact.current_address.pin_code", permanentAddress.pin_code || '');
      setValue("contact.current_address.country", permanentAddress.country || '');

    }
  };

  return (
    <div className="default-form">
      <div className="row">
        {/* Email and Phone */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Email address  <span className="required-form">*</span> </label>
          <input
            type="email"
            className={error?.contact?.email?.message ? 'error' : ''}
            {...register("contact.email")}
            placeholder="creativelayers"
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Phone <span className="required-form">*</span> </label>
          <input
            type="text"
            className={error?.contact?.phone?.message ? 'error' : ''}
            {...register("contact.phone")}
            placeholder="0 123 456 7890"
            required
          />
        </div>

        {/* Permanent Address */}
        <div className="form-group col-lg-12 col-md-12 mt-2">
          <label>Permanent Address <span className="required-form">*</span> </label>
          <div>
            <input
              type="text"
              {...register("contact.permanent_address.lane1")}
              placeholder="Door No./ Flat No. / Address 1"
              required
            />
            <input
              type="text"
              {...register("contact.permanent_address.lane2")}
              placeholder="Apartment Name / Street Name / Address 2"
              className="mt-4"
              required
            />
            <div className="d-flex gap-3 mt-4">
              {/* Country Dropdown */}
              <select
                {...register("contact.permanent_address.country")}
                value={selectedCountry}
                onChange={(e)=>{
                  setValue("contact.permanent_address.country",e.target.value)
                  getStates(e.target.value)
                  setValue("contact.permanent_address.state","")
                  setValue("contact.permanent_address.city","")
                }}
                required
              >
                <option value="" hidden>Select Country</option>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
              </select>

              {/* State Dropdown */}
              <select
                {...register("contact.permanent_address.state")}
                value={selectedState}
                onChange={(e)=>{
                  setValue("contact.permanent_address.state",e.target.value)
                  getCities(e.target.value)
                  setValue("contact.permanent_address.city","")
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
                {...register("contact.permanent_address.city")}
                value={watch("contact.permanent_address.city")}
                onChange={(e)=>{
                  setValue("contact.permanent_address.city",e.target.value)
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
                {...register("contact.permanent_address.pin_code")}
                placeholder="Pin Code"
                required
              />
            </div>
          </div>
        </div>

        {/* Checkbox for Same Address */}
        <div className="form-group col-lg-12 col-md-12 mt-2">
          <label>
            <input type="checkbox" checked={sameAddress} onChange={handleSameAddressChange} />
            Same as Permanent Address
           <span className="required-form">*</span> </label>
        </div>

        {/* Current Address */}
        <CurrentAddress {...{ watch, register, setValue, error }} />
      </div>
    </div>
  );
};

export default ContactInformation;
