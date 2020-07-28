import React from 'react';
import styled from 'styled-components';

export const Button = props => (
	<TouchableOpacity
		backgroundColor={props.backgroundColor}
	>
		<Text textColor={props.textColor}>{props.text}</Text>
	</TouchableOpacity>
);

export const InputText = props => (
	<TextInput keyboardType={props.keyboardType}>
		
	</TextInput>
);

export const Texto = props => (
	<Text textColor={props.textColor}>{props.text}</Text>
);

const TouchableOpacity = styled.TouchableOpacity`
	width: 100px;
	height: 40px
	padding: 12px;
	margin: 20px;
	border-radius: 10px;	
	background-color: ${props => props.backgroundColor};
	text-align: center;
	justifyContent: center;
`;

const Text = styled.Text`
	font-size: 15px;
	color: ${props => props.textColor};
	text-align: center;
`;

const TextInput = styled.TextInput`
	padding: 5px;
	margin: 20px;
	text-align: center;
	justifyContent: center;
	border-radius: 10px;	
	borderColor:#000;
	borderWidth: 2;
`;