import PropTypes from 'prop-types';
/*const newMessage = {
    message: 'Hola mundo',
    tittle:'Daniel'
}
*/

/*
const getResult = (a,b) =>{
    return a*b;
}
*/
export const FirstApp = ({tittle,subTittle}) => {

  /*
  if (!tittle) {
    throw new Error('El tittle no existe');
    
  }
  */
  return (
    <>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      {/* <h1>{getResult(1,4)}</h1> */}
      <h1>{tittle}</h1>
      <p>{subTittle}</p>
    </>
  )
}

//export default FirstApp


//Las protypes se definen de la siguiente manera

FirstApp.PropTypes = {
  tittle:PropTypes.string.isRequired,
  subTittle:PropTypes.number.isRequired
}
