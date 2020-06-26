export const TOGGLE_ADDRESS = 'TOGGLE_ADDRESS';
export const CHANGE_STREET = 'CHANGE_STREET';
export const CHANGE_STREET_NO = 'CHANGE_STREET_NO';
export const CHANGE_POSTCODE = 'CHANGE_POSTCODE';
export const CHANGE_CITY = 'CHANGE_CITY';
export const CHANGE_ADDRESS_INFO = 'CHANGE_ADDRESS_INFO';

export const toggleAddress = showAddress => ({
    type: TOGGLE_ADDRESS,
    showAddress
});

export const changeStreet = text => ({
    type: CHANGE_STREET,
    text
});

export const changeStreetNo = text => ({
    type: CHANGE_STREET_NO,
    text
});

export const changePostcode = text => ({
    type: CHANGE_POSTCODE,
    text
});

export const changeCity = text => ({
    type: CHANGE_CITY,
    text
});

export const changeAddressInfo = text => ({
    type: CHANGE_ADDRESS_INFO,
    text
});
