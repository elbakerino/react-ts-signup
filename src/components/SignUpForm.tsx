import React from "react";
import { Grid, Button } from "@material-ui/core";
import SignUpFormUser from "./SignUpFormUser";
import SignUpFormAddress from "./SignUpFormAddress";
import { connect } from "react-redux";
import { List } from 'immutable';
import { LoadingCircular } from "./LoadingCircular";

/**
 * Validator for the form data to be able to validate it `onMount` and `onRender`
 */
const validate = (
    firstname, lastname, password, passwordConfirm,
    email,
    showAddress, street, streetNo, postcode, city,
) => {
    let errors = List([]);
    if (firstname.trim().length < 2) {
        errors = errors.push(['Firstname must be minimum 2 characters long']);
    }
    if (lastname.trim().length < 2) {
        errors = errors.push(['Lastname must be minimum 2 characters long']);
    }
    if (password.trim().length < 6) {
        errors = errors.push(['Password must be minimum 6 characters long']);
    }
    if (!password.match(/(?=(.*\d){2})/)) {
        // regex copied from StackOverflow: https://stackoverflow.com/a/19492185/2073149
        errors = errors.push(['Password must contain minimum 2 numbers']);
    }
    if (password !== passwordConfirm) {
        errors = errors.push(['Password and password confirm must be the same']);
    }
    if (street.trim().length < 4) {
        errors = errors.push(['Street must be minimum 4 characters long']);
    }
    if (streetNo.trim().length < 1) {
        errors = errors.push(['Street No must be filled out']);
    }
    if (city.trim().length < 4) {
        errors = errors.push(['City must be minimum 4 characters long']);
    }
    /*if (isValidEmail(email)) {
        errors = errors.push(['E-Mail is not a valid address']);
    }*/
    if (postcode.trim().length !== 5) {
        errors = errors.push(['ZIP must contain 5 numbers']);
    }
    if (!postcode.match(/^\d+$/)) {
        errors = errors.push(['ZIP must be all numbers']);
    }

    return errors;
};

/**
 * Root component for the whole form
 */
const SignUpForm = ({
                        firstname, lastname, password, passwordConfirm,
                        email,
                        showAddress, street, streetNo, postcode, city,
                    }) => {
    const [progress, setProgress] = React.useState('');
    /*const inpEmail = React.useRef();
    const form = React.useRef();
    const [errors, setErrors] = React.useState({});
    /* // @ts-ignore
    console.log(inpEmail && inpEmail.current ? inpEmail.current.validity : null);
    const formCurrent = form.current;
    React.useEffect(() => {
        // @ts-ignore
        console.log(formCurrent ? formCurrent.checkValidity() : null);
    }, [formCurrent]);* /

    React.useEffect(() => {
        if (firstname.length < 2) {
            setErrors(errors => ({...errors, firstname: true}));
        } else {
            setErrors(errors => ({...errors, firstname: false}));
        }
    }, [firstname]);*/

    const errors = validate(
        firstname, lastname, password, passwordConfirm,
        email,
        showAddress, street, streetNo, postcode, city,
    );

    return <Grid container spacing={2} component={'form'}>
        {!progress || progress === 'error' ? <>
            <SignUpFormUser/>
            <SignUpFormAddress/>
        </> : null}

        {progress === 'start' ? <LoadingCircular title={'Sending'}/> : null}
        {progress === 'done' ? <p><span role={'img'} aria-label={'Success'}>✅</span> Registered!</p> : null}
        {/* todo: more info about what error */}
        {progress === 'error' ? <p><span role={'img'} aria-label={'Failed'}>❌</span> Error happened, please try again!</p> : null}

        {errors.size !== 0 ? <Grid item xs={8} md={10}>
            {errors.map((err, i) => <p key={i} style={{color: 'red'}}>{err}</p>)}
        </Grid> : null}

        {!progress || progress === 'error' ?
            <Grid item xs={8} md={10}>
                <p><small>* required field</small></p>
                <Button
                    disabled={errors.size !== 0 || progress === 'start'}
                    onClick={() => {
                        setProgress('start');
                        window.setTimeout(() => {
                            //setProgress('done');
                            // on error/catch
                            setProgress('error');
                        }, 1500);
                    }}
                >register</Button>
            </Grid> : null}
    </Grid>
};

// todo: refactor this out to reducers/initial state, as only needed here for the not-nice validation
const mapStateToProps = (
    {
        user: {
            firstname = '',
            lastname = '',
            password = '',
            passwordConfirm = '',
            email = '',
        },
        address: {
            showAddress = false,
            street = '',
            streetNo = '',
            postcode = '',
            city = '',
        }
    }
) => (
    {
        firstname,
        lastname,
        password,
        passwordConfirm,
        email,
        showAddress,
        street,
        streetNo,
        postcode,
        city,
    }
);

export default connect(
    mapStateToProps
)(SignUpForm)
