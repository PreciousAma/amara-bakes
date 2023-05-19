import React from 'react';
import { AppBar as MuiAppBar, Toolbar, Link, styled } from '@mui/material';

export const NavBar = () => {
	return (
		<AppBar elevation='0'>
			<Toolbar>
				<NavLink href='/'>Home</NavLink>
				<NavLink href='/'>About us</NavLink>
				<NavLink href='/'>Shop</NavLink>
				<NavLink href='/'>Pages</NavLink>
				<NavLink href='/'>Blog</NavLink>
				<NavLink href='/'>Contact</NavLink>
			</Toolbar>
		</AppBar>
	);
};

const AppBar = styled(MuiAppBar)(
	({ theme }) => `
	background-color: ${theme.palette.background.paper};
`
);

const NavLink = styled(Link)(
	({ theme }) => `
    color: ${theme.palette.text.navlink};
	display: flex;
    padding: 30px;
	padding-bottom: 10px;
    font-size: 16px;
    text-decoration: none;
	align-items: center;

	:hover {
		border-bottom: 2px solid ${theme.palette.primary.main};
	}
`
);

export default NavBar;

/* const NavLink = styled(Link)`
    color: ${({ theme }) => theme.palette.text.navlink }
`; */
