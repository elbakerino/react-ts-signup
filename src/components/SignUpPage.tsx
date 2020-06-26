import React from "react";
import { Container, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import SignUpForm from "./SignUpForm";

export const SignUpPage = () => {
    const {spacing} = useTheme();

    return <Container maxWidth={'sm'} style={{marginTop: spacing(2), marginBottom: spacing(2)}}>
        <Typography component={"h1"} variant={"h5"} style={{marginBottom: spacing(2)}}>
            Sign Up
        </Typography>
        <SignUpForm/>
    </Container>;
};
