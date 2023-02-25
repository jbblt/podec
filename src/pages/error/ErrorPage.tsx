import {useRouteError} from 'react-router-dom';
import styled from 'styled-components';

export default function ErrorPage() {
	const error: any = useRouteError();
	console.error(error);

	return (
		<StyledContainer id='error-page'>
			<h1>Oops!</h1>
			<p>Il y a une problème</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</StyledContainer>
	);
}

export const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
