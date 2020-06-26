import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import useTheme from "@material-ui/core/styles/useTheme";

const LoadingCircular = ({title, width = '100%'}) => {
    const {spacing} = useTheme();
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        overflow: 'auto',
        alignItems: 'center',
        width
    }}>
        <CircularProgress color={'secondary'} style={{margin: spacing(2) + 'px auto'}} disableShrink/>
        {title ? <Typography component={'p'} variant={'overline'} style={{
            textAlign: 'center',
            fontSize: '1em'
        }} color={'textSecondary'}>
            {title}
        </Typography> : null}
    </div>
};

export { LoadingCircular }
