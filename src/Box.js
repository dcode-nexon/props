function Box({ wid, ht, bg, border }) {
	const defaultBorder = border || [0, 'solid', 'transparent'];
	const style = {
		width: wid || 100,
		height: ht || 100,
		backgroundColor: bg || 'gray',
		margin: 50,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#fff',
		borderWidth: defaultBorder[0],
		borderStyle: defaultBorder[1],
		borderColor: defaultBorder[2],
	};

	return <div style={style}>Box</div>;
}

export default Box;
