import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Icon,
  Input,
  Select,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react";
import Flag from "react-world-flags";
import { AsYouType } from "libphonenumber-js";
import { getCountryTelCode, COUNTRIES } from "@/util/form/phone/countries";

import FloatingLabel from "../FloatingInput";

export default function PhoneNumberInput({
  size,
  value,
  country,
  options,
  onChange,
  onCountryChangeProp,
  onValChange,
  placeholder,
  ...rest
}: any) {
  let [number, setNumber] = useState(value || "");
  let [selectedCountry, setSelectedCountry] = useState(country || "USA");
  let [countryCode, setCountryCode] = useState(
    getCountryTelCode(country) || "+1"
  );

  const countryOptions = COUNTRIES.map(({ name, iso }: any) => ({
    label: name,
    value: iso
  }));

  useEffect(() => {
    setSelectedCountry(country);
    setCountryCode(getCountryTelCode(country));
  }, [country]);

  const onCountryChange = (e: any)=> {
    let value = e.target.value;
    let code = getCountryTelCode(value);
    let parsedNumber = new AsYouType().input(`${code}${number}`);

    
    setCountryCode(code);
    setSelectedCountry(value);
    onChange(parsedNumber);
    onCountryChangeProp(value);

  };

  const onPhoneNumberChange = (e: any) => {
    let value = e.target.value;
    let parsedNumber = new AsYouType().input(`${countryCode}${value}`);

    setNumber(value);
    onChange(parsedNumber);
    onValChange(value);
  };

  return (
    <InputGroup 
     {...rest}>
      
      <InputLeftElement pl='2' h='full' width="fit-content">
        <Select
        defaultValue={'USA'}
          w={'full'}
          left="0"
          zIndex={10}
          top={0}
          bottom={0}
          position="absolute"
          value={selectedCountry}
          onChange={onCountryChange}
          opacity={0}
          iconColor='transparent'
          h={12}
        >
          <option value="" />
          {countryOptions.map((option: any) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </Select>
        <Flex p={2} width="100%" pr={'4'} alignItems="center">
          {selectedCountry ? (
            <Box as={Flex} gap={'3'} width="100%" flex={1}>
              <Flag code={selectedCountry || ""} />
              { countryCode }
            </Box>
          ) : (
            <Icon name="phone" />
          )}
        </Flex>
      </InputLeftElement>
      <Input

        pl="6rem"
        type="tel"
        value={number}
        pattern="[0-9]"
        placeholder={placeholder}
        onChange={onPhoneNumberChange}
      />
      
    </InputGroup>
  );
}

PhoneNumberInput.defaultProps = {
  options: [],
  size: "md"
};
