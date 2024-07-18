import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FormInput from '../component/Input/FormInput'
import DateInput from '../component/Input/DateInput';
import TimeInput from '../component/Input/TimeInput';
import FormInputTextarea from '../component/Input/FormInputTextarea';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { createTodo } from '../features/todoSlice';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Haptics from 'expo-haptics';


const CategoryPicker = ({ setCategory }: any) => {
	return (
		<View style={styles.containerCategorySub}>
			<TouchableOpacity style={styles.CategoryIcon1} onPress={() => { setCategory('Profile'); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) }}>
				<AntDesign name="profile" size={18} color="#194A66" />
			</TouchableOpacity>
			<TouchableOpacity style={styles.CategoryIcon2} onPress={() => { setCategory('Calendar'); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) }}>
				<MaterialCommunityIcons name="calendar-today" size={18} color="#4A3780" />
			</TouchableOpacity>
			<TouchableOpacity style={styles.CategoryIcon3} onPress={() => { setCategory('Trophy'); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) }}>
				<SimpleLineIcons name="trophy" size={18} color="#403100" />
			</TouchableOpacity>
		</View>
	);
};

const AddTodos = ({ navigation }: any) => {
	const dispatch = useDispatch();

	const [title, setTitle] = useState('');
	const [notes, setNotes] = useState('');
	const [date, setDate] = useState(new Date());
	const [category, setCategory] = useState('');

	const handleSave = () => {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
		const id = Date.now();
		const newTodo = {
			id,
			title,
			category,
			date: date.toISOString().split('T')[0],
			time: date.toTimeString().split(' ')[0],
			notes,
			isCompleted: false,
		};
		// @ts-ignore 
		dispatch(createTodo(newTodo));
		navigation.goBack();
	};



	return (
		<KeyboardAwareScrollView contentContainerStyle={styles.container} resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={true}>
			<View>
				<FormInput
					label="Task Title"
					value={title}
					onChangeText={setTitle}
					keyboardType="default"
					autoCapitalize="none"
				/>
			</View>

			<View style={styles.containerCategory}>
				<Text>Category:</Text>
				<Text>{category} </Text>
				<CategoryPicker setCategory={setCategory} />
			</View>

			<View style={styles.containerCategorySubInput}>
				<DateInput
					label="Date"
					formData={date}
					onChange={setDate}
				/>

				<TimeInput
					label="Time"
					formData={date}
					onChange={setDate}
				/>
			</View>

			<View style={styles.containerCategoryarea}>
				<FormInputTextarea
					label="Notes"
					value={notes}
					onChangeText={setNotes}
					keyboardType="default"
					autoCapitalize="none"
				/>
			</View>

			<View style={styles.btn_container_sub}>
				<TouchableOpacity style={styles.btn_container} onPress={handleSave}>
					<Text style={styles.logout_container_text}>Save</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAwareScrollView>
	);
};

export default AddTodos;

const styles = StyleSheet.create({


	containerCategoryarea: {
		marginTop: 20,
	},
	logout_container_text: {
		color: "#fff",
		fontSize: 16,
		marginLeft: 10,
		fontWeight: "bold",
	},

	btn_container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		width: '90%',
		backgroundColor: "#4A3780",
		borderRadius: 50,
		paddingHorizontal: 10,
		height: 58
	},
	btn_container_sub: {
		bottom: 30,
		position: 'absolute',
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
	},

	containerCategorySubInput: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 20,
	},

	containerCategorySub: {
		flexDirection: 'row',
		gap: 10,
	},
	containerCategory: {
		flexDirection: 'row',
		gap: 20,
		alignItems: "center",
		marginTop: 20,
	},


	CategoryIcon1: {
		width: 48,
		height: 48,
		backgroundColor: '#DBECF6',
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#fff',
	},
	CategoryIcon2: {
		width: 48,
		height: 48,
		backgroundColor: '#E7E2F3',
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#fff',
	},
	CategoryIcon3: {
		width: 48,
		height: 48,
		backgroundColor: '#FEF5D3',
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#fff',
	},
	container: {
		flex: 1,
		backgroundColor: '#F1F5F9',
		padding: 20,
	},

})