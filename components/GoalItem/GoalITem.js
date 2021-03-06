import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../constants/colors";

const GoalItem = (props) => {
	return (
		<TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
			<View style={styles.listItem}>
				<Text style={styles.text}>{props.title}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: colors.goal,
		borderRadius: 8,
	},
	text: {
		color: "white",
	},
});

export default GoalItem;
