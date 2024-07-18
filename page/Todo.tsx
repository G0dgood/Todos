
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, ImageBackground, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchTodos, toggleTodo, clearTodos } from '../features/todoSlice';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Checkbox } from 'react-native-paper';
import * as Haptics from 'expo-haptics';


export default function Todo({ navigation }: any) {
	const dispatch = useDispatch();
	const todos = useSelector((state: RootState) => state.todo?.todos);

	useEffect(() => {
		// @ts-ignore 
		dispatch(fetchTodos());
	}, [dispatch]);

	const handleClearTodos = () => {
		// @ts-ignore 
		dispatch(clearTodos());
	};

	// State for the current date
	const [currentDate, setCurrentDate] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentDate(new Date());
		}, 60000); // Update every minute

		return () => clearInterval(intervalId); // Cleanup interval on unmount
	}, []);

	const formattedDate = currentDate.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });



	const handleToggleTodo = (id: number) => {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
		dispatch(toggleTodo(id)); // Dispatch action to toggle todo completion
	};

	const activeTodos = todos.filter((todo) => !todo.isCompleted);
	const completedTodos = todos.filter((todo) => todo.isCompleted);


	const getCategoryIcon = (category: any) => {
		switch (category) {
			case 'Profile':
				return <AntDesign name="profile" size={18} color="#194A66" />;
			case 'Calendar':
				return <MaterialCommunityIcons name="calendar-today" size={18} color="#4A3780" />;
			case 'Trophy':
				return <SimpleLineIcons name="trophy" size={18} color="#403100" />;
			default:
				return <AntDesign name="question" size={18} color="#194A66" />;
		}
	};

	return (
		<View style={styles.container}>
			<View>
				<StatusBar style="auto" />
				<ImageBackground source={require('../assets/Header.png')} resizeMode="cover" style={styles.imagecontainer}>
					<View style={styles.titleViewContainer}>
						<View>
							<Text style={styles.title_text_one}>{formattedDate}</Text>
						</View>
						<View>
							<Text style={styles.title_text_two}>My Todo List</Text>
						</View>
					</View>
				</ImageBackground>

				<ScrollView style={styles.Study_Container}>
					{activeTodos.length === 0 ? (
						<View style={styles.noTodosContainer}>
							<AntDesign name="frowno" size={50} color="#194A66" />
							<Text style={styles.noTodosText}>No active todos available</Text>
						</View>
					) : (
						activeTodos.map((todo) => (
							<TouchableOpacity
								key={todo.id}
								onPress={() => { handleToggleTodo(todo.id), Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) }}
							>

								<View style={styles.list_item1}>
									<View style={styles.list_item1_sub}>
										<View style={todo.category === "Profile" ? styles.CategoryIcon1 : todo.category === "Calendar" ? styles.CategoryIcon2 : styles.CategoryIcon3}>
											{getCategoryIcon(todo.category)}
										</View>
										<View style={styles.circle_icon_container}>
											<Text style={styles.circle_icon_Text}>{todo.title}</Text>
											<Text>{todo.time}</Text>
										</View>
									</View>
									<Checkbox.Item
										label=""
										status={todo.isCompleted ? 'checked' : 'unchecked'}
										color="#4A3780"
										onPress={() => handleToggleTodo(todo.id)}
									/>
								</View>
							</TouchableOpacity>
						))
					)}
				</ScrollView>

				<View style={styles.Completed_selection}>
					<Text style={styles.Completed_selection_text}>Completed</Text>

					<ScrollView style={styles.Study_Container1}>
						{completedTodos.length === 0 ? (
							<View style={styles.noTodosContainer}>
								<AntDesign name="frowno" size={50} color="#194A66" />
								<Text style={styles.noTodosText}>No completed todos available</Text>
							</View>
						) : (
							completedTodos.map((completedTodo) => (
								<View key={completedTodo.id} style={styles.list_item1}>
									<View style={styles.list_item1_sub}>
										<View style={completedTodo.category === "Profile" ? styles.CategoryIcon1 : completedTodo.category === "Calendar" ? styles.CategoryIcon2 : styles.CategoryIcon3}>
											{getCategoryIcon(completedTodo.category)}
										</View>
										<View style={styles.circle_icon_container}>
											<Text style={styles.circle_icon_Text}>{completedTodo.title}</Text>
											<Text>{completedTodo.time}</Text>
										</View>
									</View>
									<Checkbox.Item
										label=""
										status={completedTodo.isCompleted ? 'checked' : 'unchecked'}
										color="green"

									/>
								</View>
							))
						)}
					</ScrollView>

					<View  >
						<TouchableOpacity onPress={handleClearTodos}>
							<Text>
								Clear All Todos
							</Text>
						</TouchableOpacity>
					</View>
				</View>

			</View>
			<View style={styles.btn_container_sub}>
				<TouchableOpacity style={styles.btn_container} onPress={() => navigation.navigate("AddTodos")}>
					<Text style={styles.logout_container_text}>Add New Task</Text>
				</TouchableOpacity>
			</View>
		</View>

	);
}

const styles = StyleSheet.create({

	circle_icon_container: {

	},
	noTodosContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	noTodosText: {
		fontSize: 18,
		color: '#194A66',
		marginTop: 10,
	},
	Study_Container1: {
		borderRadius: 16,
	},

	Completed_selection_text: {
		fontSize: 16,
		color: "#4A3780",
		marginVertical: 20,
		fontWeight: "bold",
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


	Completed_selection: {
		marginTop: 200,
		backgroundColor: "#F1F5F9",
		marginHorizontal: 20,
		marginBottom: 20,
		height: 240,
		borderRadius: 20,
		width: "90%",
		gap: 1
	},

	circle_icon_Text: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#1B1B1D",
	},





	list_item1_sub: {
		flexDirection: "row",
		alignItems: "center",
		gap: 15
	},


	circle_icon: {
		width: 48,
		height: 48,
		borderRadius: 54,
		backgroundColor: "#DBECF6",
		justifyContent: "center",
		alignItems: "center",
	},

	list_item1: {
		flexDirection: "row",
		borderColor: "#ddd",
		height: 80,
		width: "100%",
		backgroundColor: "#fff",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 16,
	},

	list_item2: {
		flexDirection: "row",
		borderColor: "#ddd",
		height: 80,
		width: "100%",
		backgroundColor: "#fff",
		padding: 16,
		justifyContent: "space-between",
		alignItems: "center",
	},

	list_item3: {
		flexDirection: "row",
		borderColor: "#ddd",
		height: 80,
		width: "100%",
		backgroundColor: "#fff",
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		padding: 16,
		justifyContent: "space-between",
		alignItems: "center",
	},

	Study_Container: {
		backgroundColor: "#F1F5F9",
		marginHorizontal: 20,
		marginBottom: 20,
		height: 240,
		borderRadius: 20,
		width: "90%",
		position: "absolute",
		marginTop: 190,
		gap: 1,
	},

	title_text_two: {
		fontSize: 30,
		fontWeight: 'bold',
		color: "#fff"
	},

	title_text_one: {
		fontSize: 16,
		color: "#fff"
	},
	titleViewContainer: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		marginTop: Platform.OS === "ios" ? 80 : 80,
		textAlign: "center",
		gap: 40
	},

	imagecontainer: {
		width: '100%',
		height: 250,
	},

	CategoryIcon1: {
		width: 48,
		height: 48,
		backgroundColor: '#DBECF6',
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',

	},
	CategoryIcon2: {
		width: 48,
		height: 48,
		backgroundColor: '#E7E2F3',
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',

	},
	CategoryIcon3: {
		width: 48,
		height: 48,
		backgroundColor: '#FEF5D3',
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',

	},

	container: {
		flex: 1,
		backgroundColor: '#F1F5F9',
	},
});



