import styled from 'styled-components'
import { space, typography } from 'styled-system'

import { variable } from './variable'

export const ConsoleContainer = styled.div`
	background-color: ${variable.colorWhite};
	border: 1px solid ${variable.colorBlue};
	border-radius: 15px;
	box-shadow: 0 1px 3px ${variable.colorBlue};
	font-weight: 400;
	font-size: 14px;
	letter-spacing: 1px;
	line-height: 1.5;
	height: 100%;
	overflow-y: auto;
`

export const ConsoleData = styled.div``

export const ConsoleHeader = styled.div`
	border-bottom: 1px solid ${variable.colorBlue};
`

export const ConsoleTitle = styled.h2`
	${space};
	${typography};
	${({ fontSize }) => fontSize === undefined && 'font-size: 20px'};
	line-height: 1.2;
`

export const List = styled.ul`
	width: 100%;
	padding: 0 10px;
	display: flex;
	flex-direction: column-reverse;
	justify-content: center;
	align-items: center;
`

export const ListItem = styled.li`
	margin-bottom: 10px;
	border: 1px solid ${variable.colorBlue};
	border-radius: 4px;
	padding: 10px;
	background-color: ${(props) => variable[props.type]};
	color: ${variable.colorBlue};
	width: 100%;
`

export const QueueList = styled.ul`
	width: 100%;
	padding: 0 10px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 10px;
`
