// import { getCode, getName } from "country-list";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { useEffect, useState } from "react";
export default function SelectStateAndCity() {
  const [selectedCountry, setSelectedCountry] = useState({
    currency:"INR",
    flag: "🇮🇳",
    isoCode: "IN",
    name: "India",
    phonecode: "91"
  });
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  return (
    <div className="App">
      {/* <Select
        options={Country.getAllCountries()}
        getOptionLabel={(options) => {
          return options["name"];
        }}
        getOptionValue={(options) => {
          return options["name"];
        }}
        value={selectedCountry}
        onChange={(item) => {
            console.log(item)
          setSelectedCountry(item);
        }}
      /> */}
       <div>
                    <p className="search_consultant_label">Select State</p>
                    <Select
                        options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
                        getOptionLabel={(options) => {
                        return options["name"];
                        }}
                        getOptionValue={(options) => {
                        return options["name"];
                        }}
                        value={selectedState}
                        onChange={(item) => {
                        setSelectedState(item);
                        }}
                    />
       </div>
       {selectedState?.isoCode &&<div>
                    <p className="search_consultant_label">Select City</p>
                    <Select
                        options={City.getCitiesOfState(
                        selectedState?.countryCode,
                        selectedState?.isoCode
                        )}
                        getOptionLabel={(options) => {
                        return options["name"];
                        }}
                        getOptionValue={(options) => {
                        return options["name"];
                        }}
                        value={selectedCity}
                        onChange={(item) => {
                          console.log(item)
                        setSelectedCity(item);
                        }}
                    />
       </div>}

       <div className="edit_profile_input_container">
                      <label className="edit_profile_input_field">
                          Enter Pin Code
                         <input type="text" className="form-control p-2" placeholder='Enter Pin Code'/>
                         
                      </label>
        </div>
    </div>
  );
}
