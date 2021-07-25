import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const colorClasses = {
    'red': 'alert-danger',
    'orange': 'alert-warning',
	'green' : 'alert-success'
}

const Alert = props => {
	//add the condition inside this function
	if (props.colorClasses === 'red') {
		return(
		<div className={`alert ${colorClasses[props.color]}`} role="alert">
			{props.text}
		</div>
		);
	} else if(props.colorClasses === 'orange') {
		// retorna aquí el componente html
		return (
			<div className={`alert ${colorClasses[props.color]}`} role="alert">
				{props.text}
		  	</div>
		);
	} else {
		return(
			<div className={`alert ${colorClasses[props.color]}`} role="alert">
			{props.text}
		  	</div>
		);
	}
};
Alert.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties are being passed to the component
ReactDOM.render(
	<div>
		<Alert text="OMG! Something really bad has happended!" color="red" />
		<Alert text="Well, it is not that bad after all!" color="orange" />
		<Alert text="I am supposed to be green" color="green" />
	</div>,
	document.querySelector("#myDiv")
);
