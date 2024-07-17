import Checkbox from 'expo-checkbox';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Todo() {
	const [isChecked, setChecked] = useState(false);


	return (
		<View style={styles.container}>
			<ScrollView  >
				<StatusBar style="auto" />
				<ImageBackground source={require('../assets/Header.png')} resizeMode="cover" style={styles.imagecontainer}>
					<View style={styles.titleViewContainer}>
						<View  >
							<Text style={styles.title_text_one}>October 20, 2022</Text>
						</View>
						<View  >
							<Text style={styles.title_text_two}>My Todo List</Text>
						</View>
					</View>
				</ImageBackground>

				<View style={styles.Study_Container}>
					<View style={styles.list_item1}>
						<View style={styles.list_item1_sub}>
							<View style={styles.circle_icon}></View>
							<View style={styles.circle_icon_container}>
								<Text style={styles.circle_icon_Text}>Study lesson</Text>
								<Text>4:00pm</Text>
							</View>
						</View>
						<View>
							<Checkbox
								style={styles.checkbox}
								value={isChecked}
								onValueChange={setChecked}
								color={isChecked ? '#4A3780' : undefined}
							/>
						</View>
					</View>
					<View style={styles.list_item2}>
						<View style={styles.list_item1_sub}>
							<View style={styles.circle_icon}></View>
							<View style={styles.circle_icon_container}>
								<Text style={styles.circle_icon_Text}>Run 5k</Text>
								<Text>4:00pm</Text>
							</View>
						</View>
						<View>
							<Checkbox
								style={styles.checkbox}
								value={isChecked}
								onValueChange={setChecked}
								color={isChecked ? '#4A3780' : undefined}
							/>
						</View>
					</View>
					<View style={styles.list_item3}>
						<View style={styles.list_item1_sub}>
							<View style={styles.circle_icon}></View>
							<View style={styles.circle_icon_container}>
								<Text style={styles.circle_icon_Text}>Go to party</Text>
								<Text>4:00pm</Text>
							</View>
						</View>
						<View>
							<Checkbox
								style={styles.checkbox}
								value={isChecked}
								onValueChange={setChecked}
								color={isChecked ? '#4A3780' : undefined}
							/>
						</View>
					</View>

				</View>

				<View style={styles.Completed_selection}>

					<Text style={styles.Completed_selection_text}>Completed</Text>

					<View style={styles.list_item2}>
						<View style={styles.list_item1_sub}>
							<View style={styles.circle_icon}></View>
							<View style={styles.circle_icon_container}>
								<Text style={styles.circle_icon_Text}>Run 5k</Text>
								<Text>4:00pm</Text>
							</View>
						</View>
						<View>
							<Checkbox
								style={styles.checkbox}
								value={isChecked}
								onValueChange={setChecked}
								color={isChecked ? '#4A3780' : undefined}
							/>
						</View>
					</View>
					<View style={styles.list_item2}>
						<View style={styles.list_item1_sub}>
							<View style={styles.circle_icon}></View>
							<View style={styles.circle_icon_container}>
								<Text style={styles.circle_icon_Text}>Run 5k</Text>
								<Text>4:00pm</Text>
							</View>
						</View>
						<View>
							<Checkbox
								style={styles.checkbox}
								value={isChecked}
								onValueChange={setChecked}
								color={isChecked ? '#4A3780' : undefined}
							/>
						</View>
					</View>
				</View>

			</ScrollView>
			<View style={styles.btn_container_sub}>
				<TouchableOpacity style={styles.btn_container}  >
					<Text style={styles.logout_container_text}>Add New Task</Text>
				</TouchableOpacity>
			</View>

		</View>
	);
}

const styles = StyleSheet.create({

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

	circle_icon_container: {

	},

	checkbox: {
		// margin: 5,
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
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
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
		gap: 1

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

	container: {
		flex: 1,
		backgroundColor: '#F1F5F9',
	},
});
