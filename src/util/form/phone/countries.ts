import sc from "states-cities-db";

const COUNTRIES = sc.getCountries();

const getCountryTelCode = (country: any) => {
    const a = COUNTRIES.find(({ iso }: any) => {
        return iso === country;
    })
    
    if (a) {
        return a.prefix;
    }
    return "";
}

export { COUNTRIES, getCountryTelCode };
