import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	add: {
		position: 'fixed',
		bottom: 27,
		zIndex: 50,
	},
}));

const AddContactBtn = () => {
	const classes = useStyles();

	return (
		<Fab
			className={classes.add}
			color="primary"
			component={Link}
			to="/add-contact"
		>
			<AddIcon />
		</Fab>
	);
};

export { AddContactBtn };
