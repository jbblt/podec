import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import React, {useCallback, useMemo, useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import {RoutesPath} from '../../routes/router';
import {useNavigate} from 'react-router-dom';

type MenuItems = Array<{
	name: string;
	path: string;
}>;

function ResponsiveAppBar() {
	const pages: MenuItems = useMemo(
		() => [
			{name: 'Client', path: RoutesPath.FORM_CLIENT},
			{
				name: 'Modèle',
				path: RoutesPath.FORM_CLIENT,
			},
			{name: 'Coupe', path: RoutesPath.FORM_CLIENT},
			{
				name: 'Montage',
				path: RoutesPath.FORM_CLIENT,
			},
			{name: 'Remplissage', path: RoutesPath.FORM_CLIENT},
		],
		[],
	);
	const settings = useMemo(
		() => ['Profile', 'Account', 'Dashboard', 'Logout'],
		[],
	);
	const navigate = useNavigate();
	const [anchorElNav, setAnchorElNav] = useState<undefined | HTMLElement>(
		undefined,
	);
	const [anchorElUser, setAnchorElUser] = useState<undefined | HTMLElement>(
		undefined,
	);

	const handleOpenNavMenu = useCallback(
		(event: React.MouseEvent<HTMLElement>) => {
			setAnchorElNav(event.currentTarget);
		},
		[],
	);

	const handleOpenUserMenu = useCallback(
		(event: React.MouseEvent<HTMLElement>) => {
			setAnchorElUser(event.currentTarget);
		},
		[],
	);

	const handleCloseNavMenu = useCallback(() => {
		setAnchorElNav(undefined);
	}, []);

	const handleCloseUserMenu = useCallback(() => {
		setAnchorElUser(undefined);
	}, []);

	const handleNavigate = useCallback((path: string) => {
		if (anchorElNav) {
			handleCloseNavMenu();
		}

		navigate(path);
	}, []);

	return (
		<StyledAppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Typography
						variant='h6'
						noWrap
						component='a'
						onClick={() => {
							handleNavigate(RoutesPath.ROOT);
						}}
						sx={{
							mr: 2,
							display: {xs: 'none', md: 'flex'},
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
            PODEC
					</Typography>

					<Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: {xs: 'block', md: 'none'},
							}}
						>
							{pages.map(page => (
								<MenuItem key={page.name}>
									<Typography
										onClick={() => {
											handleNavigate(page.path);
										}}
										textAlign='center'
									>
										{page.name}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant='h5'
						noWrap
						component='a'
						onClick={() => {
							handleNavigate(RoutesPath.ROOT);
						}}
						sx={{
							mr: 2,
							display: {xs: 'flex', md: 'none'},
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
            PODEC
					</Typography>
					<Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
						{pages.map(page => (
							<Button
								key={page.name}
								onClick={() => {
									handleNavigate(page.path);
								}}
								sx={{my: 2, color: 'white', display: 'block'}}
							>
								{page.name}
							</Button>
						))}
					</Box>

					<Box sx={{flexGrow: 0}}>
						<Tooltip title='Open settings'>
							<IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
								<Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{mt: '45px'}}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map(setting => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign='center'>{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</StyledAppBar>
	);
}

const StyledAppBar = styled(AppBar)`
  height: 70px;
`;

export default ResponsiveAppBar;
