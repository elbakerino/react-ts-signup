import React from "react";
import { Grid, TextField } from "@material-ui/core";
import { useUID } from "react-uid";
import { connect } from "react-redux";
import {
    changeLastname, changeFirstname, changePassword, changePasswordConfirm,
    changeNickname, changeEmail,
} from "../actions";

const SignUpFormUser = ({
                            firstname, lastname, password, passwordConfirm,
                            nickname, email,
                            changeFirstname, changeLastname,
                            changePassword, changePasswordConfirm,
                            changeNickname, changeEmail,
                        }) => {
    const uid = useUID();
    return <>
        <Grid item xs={12} md={6}>
            <TextField
                id={'_' + uid + '--firstname'} fullWidth required
                inputProps={{minLength: 2}}
                label={'First Name'}
                value={firstname}
                onChange={e => changeFirstname(e.target.value)}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
                id={'_' + uid + '--lastname'} fullWidth required
                label={'Last Name'}
                inputProps={{minLength: 2}}
                value={lastname}
                onChange={e => changeLastname(e.target.value)}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
                id={'_' + uid + '--nickname'} fullWidth
                label={'Nickname'}
                value={nickname}
                onChange={e => changeNickname(e.target.value)}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
                id={'_' + uid + '--email'} fullWidth required
                label={'E-Mail'}
                value={email}
                onChange={e => changeEmail(e.target.value)}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
                id={'_' + uid + '--password'} fullWidth required
                type={'password'}
                label={'Password'}
                value={password}
                onChange={e => changePassword(e.target.value)}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
                id={'_' + uid + '--password-confirm'} fullWidth required
                type={'password'}
                label={'Confirm Password'}
                value={passwordConfirm}
                onChange={e => changePasswordConfirm(e.target.value)}
            />
        </Grid>
    </>;
};

const mapStateToProps = (
    {
        user: {
            firstname = '',
            lastname = '',
            nickname = '',
            password = '',
            passwordConfirm = '',
            email = '',
        }
    }
) => ({
    firstname,
    lastname,
    password,
    passwordConfirm,
    nickname,
    email
});

const mapDispatchToProps = {
    changeLastname, changeFirstname, changePassword, changePasswordConfirm,
    changeNickname, changeEmail,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpFormUser)
