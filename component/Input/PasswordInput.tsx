import { Platform, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';

const PasswordInput = ({ label, keyboardType, formData, formErrors, value, onChangeText, error, password }: any) => {
	const [text, setText] = React.useState('');

	const [passwordShown, setPasswordShown] = useState(true);
	const [icons, setIcons] = useState("eye-off-outline");
	const togglePasswordVisiblity = () => {
		setIcons(!icons ? "eye-outline" : "eye-off-outline");
		if (icons === "eye-off-outline" && passwordShown === true) {
			setIcons("eye-outline");
			setPasswordShown(false);
		} else {
			setIcons("eye-off-outline");
			setPasswordShown(true);
		}
	};


	return (
		<TextInput
			secureTextEntry={passwordShown}
			mode="outlined"
			label={label}
			value={password}
			onChangeText={onChangeText}
			right={<TextInput.Icon icon={icons} onPress={() => togglePasswordVisiblity()} />}
			style={styles?.text_input}
			theme={{
				colors: { onSurfaceVariant: '#A7A9AC' },
				roundness: 14 // Specify the border radius here
			}}
			activeOutlineColor="#43CE2E"
		/>
	);
};


export default PasswordInput

const styles = StyleSheet.create({
	text_input: {
		backgroundColor: "#F0F4F8",
		fontFamily: "Inter_400Regular",
		fontSize: 14,
		height: 50,
		marginBottom: 10,
	},


})