import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, IconButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { windowWidth } from '../../utils/Dimentions';

interface Props {
	label: string;
	formData: Date;
	onChange: (selectedTime: Date) => void;
}

const TimeInput = ({ label, formData, onChange }: Props) => {
	const [showTimePicker, setShowTimePicker] = useState(false);

	const onTimeChangeHandler = (event: any, selectedTime: Date) => {
		setShowTimePicker(false);
		if (selectedTime) {
			onChange(selectedTime);
		}
	};

	return (
		<View>
			<TextInput
				mode="outlined"
				label={label}
				style={styles.text_input}
				value={formData.toTimeString().split(' ')[0]}
				right={<TextInput.Icon icon="clock" onPress={() => setShowTimePicker(true)} />}
				editable={true}
				theme={{
					colors: { onSurfaceVariant: '#A7A9AC' },
					roundness: 14
				}}
				activeOutlineColor="#4A3780"
			/>

			{showTimePicker && (
				<DateTimePicker
					value={formData}
					mode="time"
					is24Hour={true}
					display="default"
					onChange={onTimeChangeHandler}
				/>
			)}
		</View>
	);
};

export default TimeInput;

const styles = StyleSheet.create({
	text_input: {
		backgroundColor: "#F0F4F8",
		fontSize: 14,
		marginBottom: 10,
		width: windowWidth / 1.15,
	},
});
