import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, IconButton } from 'react-native-paper';
import { Calendar } from 'react-native-calendars';
import { windowWidth } from '../../utils/Dimentions';

interface Props {
	label: string;
	formData: Date;
	onChange: (selectedDate: Date) => void;
}

const DateInput = ({ label, formData, onChange }: Props) => {
	const [showDatePicker, setShowDatePicker] = useState(false);

	const onDateChangeHandler = (day: { timestamp: string | number | Date }) => {
		const selectedDate = new Date(day.timestamp);
		setShowDatePicker(false);
		onChange(selectedDate);
	};

	return (
		<View>
			<TextInput
				mode="outlined"
				label={label}
				style={styles.text_input}
				value={formData.toLocaleDateString()}
				right={<TextInput.Icon icon="calendar" onPress={() => setShowDatePicker(true)} />}
				editable={true}
				theme={{
					colors: { onSurfaceVariant: '#A7A9AC' },
					roundness: 14
				}}
				activeOutlineColor="#4A3780"
			/>

			{showDatePicker && (
				<Calendar
					onDayPress={onDateChangeHandler}
					style={styles.calendar}
				/>
			)}
		</View>
	);
};

export default DateInput;

const styles = StyleSheet.create({
	text_input: {
		backgroundColor: "#F0F4F8",
		fontFamily: "Inter_400Regular",
		fontSize: 14,
		marginBottom: 10,
		width: windowWidth / 1.15,
	},
	calendar: {
		borderTopWidth: 1,
		paddingTop: 5,
		borderBottomWidth: 1,
		borderColor: '#eee',
		height: 350,
	}
});
