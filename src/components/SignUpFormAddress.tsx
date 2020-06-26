import React from "react";
import { Grid, FormControlLabel, Checkbox, TextField } from "@material-ui/core";
import { useUID } from "react-uid";
import { connect } from "react-redux";
import {
    toggleAddress, changeCity, changePostcode, changeStreet, changeStreetNo, changeAddressInfo
} from "../actions";

const SignUpFormAddress = ({
                               showAddress, street, streetNo, postcode, city,
                               addressInfo,
                               toggleAddress,
                               changeCity, changePostcode,
                               changeStreet, changeStreetNo,
                               changeAddressInfo
                           }) => {
    const uid = useUID();
    return <>
        <Grid item xs={12}>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={showAddress}
                        onChange={e => toggleAddress(e.target.checked)}
                        id={'_' + uid + '--toggle-address'}
                    />
                }
                htmlFor={'_' + uid + '--toggle-address'}
                label={'Show Address'}
                style={{userSelect: 'none'}}
            />
        </Grid>
        {showAddress ? <>
            <Grid item xs={8} md={10}>
                <TextField
                    id={'_' + uid + '--street'} fullWidth required
                    label={'Street'}
                    value={street}
                    onChange={e => changeStreet(e.target.value)}
                />
            </Grid>
            <Grid item xs={4} md={2}>
                <TextField
                    id={'_' + uid + '--street-no'} fullWidth required
                    label={'No.'}
                    value={streetNo}
                    onChange={e => changeStreetNo(e.target.value)}
                />
            </Grid>
            <Grid item xs={4} md={2}>
                <TextField
                    id={'_' + uid + '--postcode'} fullWidth required
                    label={'ZIP'}
                    value={postcode}
                    onChange={e => changePostcode(e.target.value)}
                />
            </Grid>
            <Grid item xs={8} md={10}>
                <TextField
                    id={'_' + uid + '--city'} fullWidth required
                    label={'City'}
                    value={city}
                    onChange={e => changeCity(e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id={'_' + uid + '--address-info'} fullWidth multiline
                    label={'Further Information'}
                    value={addressInfo}
                    onChange={e => changeAddressInfo(e.target.value)}
                />
            </Grid>
        </> : null}
    </>;
};

const mapStateToProps = (
    {
        address: {
            showAddress = false,
            street = '',
            streetNo = '',
            postcode = '',
            city = '',
            addressInfo = '',
        }
    }
) => ({
    showAddress,
    street,
    streetNo,
    postcode,
    city,
    addressInfo,
});

const mapDispatchToProps = {
    toggleAddress, changeCity, changePostcode, changeStreet, changeStreetNo, changeAddressInfo
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpFormAddress)
