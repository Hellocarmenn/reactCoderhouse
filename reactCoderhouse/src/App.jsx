import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Main from "./componentes/Main";
/*
//app es un componente
Componentes:
-son funciones 
-van en mayusculas 
-si o si tienen que tener retorno 
Solo pueden retornar UN solo elemento


pueden ser clases
class App{}

Funciones flecha
const App = () => {}


TIPOS DE COMPONENTES :
-Estructurales :Son los que representan una plantilla general o un bloque generico del  sitio/aplicacion(separar las  opartes de la pagina)

-Funcionales : Son los que representan una funcionalidad especifica o un bloque de contenido especifico
 -Reutilizables: Son los que representan un bloque que se puede reutilizar en diferentes partes del sitio o aplicacion obteniendo el mismo resultado.
*/

function App() {
  //esto es similar a
  return (
    //siempre debe ir dentro de una etiqueta o un fragmento <>
    <>
      <h1 className="titulo" id="titulo">
        Titulo
      </h1>
      <Header />
      <Main />
      <Footer/>
     
    </>
  );
}
export default App;
