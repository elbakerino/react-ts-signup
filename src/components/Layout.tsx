import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

//
// General Basis Layout Components
//

const Header = () => <AppBar position="static" style={{flexShrink: 0, flexGrow: 0, paddingTop: 2, paddingBottom: 2}}>
    <Toolbar variant={'dense'}>
        Some App
    </Toolbar>
</AppBar>;

const Content = ({children}: React.PropsWithChildren<any>) => <div style={{
    display: 'flex',
    overflow: 'auto',
    flexGrow: 1
}}>
    <div style={{
        display: 'flex',
        scrollBehavior: 'smooth',
        flexDirection: 'column',
        overflow: 'auto',
        flexGrow: 1
    }}>
        {children}
    </div>
</div>;

export const Layout = ({children}: React.PropsWithChildren<any>) => <>
    <CssBaseline/>
    <Header/>
    <Content>
        {children}
    </Content>
</>;
