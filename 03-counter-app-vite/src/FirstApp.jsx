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
export const FirstApp = ({
  tittle,
  subTittle = 'Daniel fragoso',
  name
}) => {

  /*
  if (!tittle) {
    throw new Error('El tittle no existe');
    
  }
  */
  return (
    <>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      {/* <h1>{getResult(1,4)}</h1> */}
      <h1 data-testid="test-title">{tittle}</h1>
      <p>{subTittle}</p>
      <p>{name}</p>
    </>
  )
}

//export default FirstApp


//Las protypes se definen de la siguiente manera

FirstApp.propTypes = {
  tittle:PropTypes.string.isRequired,
  subTittle:PropTypes.string.isRequired
}

FirstApp.defaultProps = {  // Estas son propiedades por defecto 
  //tittle: "No hay titulo",
  subTittle: "No hay subtitulo",
  name:"Daniel Fragoso"
}

