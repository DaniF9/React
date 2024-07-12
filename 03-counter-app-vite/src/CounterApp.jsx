import PropTypes from 'prop-types';
// Doumentacion oficial de react
export const CounterApp  =({value}) => {

    const handleAdd  = (event,newValue) => {
        console.log(event);
    }

    return(
        <>
        <h1>CounterApp</h1>
        <h2>{ value }</h2>
        <button onClick={  handleAdd }>
            +1
        </button>
        </>
    )
}

CounterApp.prototype = {
    value:PropTypes.number.isRequired
}