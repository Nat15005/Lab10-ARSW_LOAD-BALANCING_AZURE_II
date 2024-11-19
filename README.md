### Escuela Colombiana de Ingeniería
### Arquitecturas de Software - ARSW
### Desarrollado por Ana Maria Duran y Laura Natalia Rojas  

## Escalamiento en Azure con Maquinas Virtuales, Sacale Sets y Service Plans

### Dependencias
* Cree una cuenta gratuita dentro de Azure. Para hacerlo puede guiarse de esta [documentación](https://azure.microsoft.com/es-es/free/students/). Al hacerlo usted contará con $100 USD para gastar durante 12 meses.
Antes de iniciar con el laboratorio, revise la siguiente documentación sobre las [Azure Functions](https://www.c-sharpcorner.com/article/an-overview-of-azure-functions/)

### Parte 0 - Entendiendo el escenario de calidad

Adjunto a este laboratorio usted podrá encontrar una aplicación totalmente desarrollada que tiene como objetivo calcular el enésimo valor de la secuencia de Fibonnaci.

**Escalabilidad**
Cuando un conjunto de usuarios consulta un enésimo número (superior a 1000000) de la secuencia de Fibonacci de forma concurrente y el sistema se encuentra bajo condiciones normales de operación, todas las peticiones deben ser respondidas y el consumo de CPU del sistema no puede superar el 70%.

### Escalabilidad Serverless (Functions)

1. Cree una Function App tal cual como se muestra en las  imagenes.

![](images/part3/part3-function-config.png)

![](images/part3/part3-function-configii.png)

  * Procedimiento
    
     ![image](https://github.com/user-attachments/assets/8263a8e8-2342-4ce2-ada0-07429dc5c2c7)
   
     ![image](https://github.com/user-attachments/assets/ec429663-d182-42db-b74c-92068d58fb95)

2. Instale la extensión de **Azure Functions** para Visual Studio Code.

![](images/part3/part3-install-extension.png)

  * Procedimiento
    
     ![image](https://github.com/user-attachments/assets/f7ab34eb-413f-493b-9dd2-ab1d7ad83975)


3. Despliegue la Function de Fibonacci a Azure usando Visual Studio Code. La primera vez que lo haga se le va a pedir autenticarse, siga las instrucciones.

![](images/part3/part3-deploy-function-1.png)

![](images/part3/part3-deploy-function-2.png)

  * Procedimiento:
    * Instalamos la extensión Azure Account para iniciar sesión en Azure.
       ![image](https://github.com/user-attachments/assets/752455d1-a9fe-4c8e-8a51-b80fd592f4ea)
        
    * Cambiamos la versión del host a una más actual.
       ![image](https://github.com/user-attachments/assets/c26a8109-bb2f-4099-936f-4a7a52dd86c6)


4. Dirijase al portal de Azure y pruebe la function.

![](images/part3/part3-test-function.png)

   ![image](https://github.com/user-attachments/assets/6131fae3-019e-4817-9017-c44745e9998f)

5. Modifique la coleción de POSTMAN con NEWMAN de tal forma que pueda enviar 10 peticiones concurrentes. Verifique los resultados y presente un informe.
  * Procedimiento:
    * Instalamos lo necesario para hacer el reporte
       ![image](https://github.com/user-attachments/assets/f7862696-f4ec-4ce8-afbe-1dbf6dce972d)
        
    * Generamos un reporte en un html con detalles de las peticiones, tiempos de respuesta, códigos de estado y cualquier error.
       ![image](https://github.com/user-attachments/assets/0e37b8d1-8a91-4429-be17-e83474eacfa1)


6. Cree una nueva Function que resuleva el problema de Fibonacci pero esta vez utilice un enfoque recursivo con memoization. Pruebe la función varias veces, después no haga nada por al menos 5 minutos. Pruebe la función de nuevo con los valores anteriores. ¿Cuál es el comportamiento?.
    * Efectuamos ensayos con la nueva función y notamos que tiene la habilidad de aprender a solucionar consultas de grandes números de forma gradual. Es decir, si inicialmente se le pide el valor para el término 80,000 de la secuencia, después tiene la habilidad de determinar el valor para 85,000. En la prueba, incrementamos los valores de 5,000 en 5,000, alcanzando un máximo de 120,000. No obstante, si la función no logra solucionar el cálculo por lo que consideramos un límite de memoria, pierde todo lo que ha aprendido y requerimos volver a instruirle paso a paso, repitiendo todo hasta que llegué a un limite y olvide todo nuevamente.

**Preguntas**

* ¿Qué es un Azure Function?
  
  * Azure Functions es un servicio informático sin servidor perteneciente a Microsoft Azure. Un servicio sin servidor significa que los desarrolladores pueden ejecutar su código sin preocuparse de los servidores ni de nada relacionado con la infraestructura de la misma. Como estaba implícito en el nombre, el objetivo de Azure Functions es ejecutar funciones pequeñas y especializadas; por ejemplo, cálculos, procesamiento de datos o eventos, etc. en respuesta a eventos concretos. Esto puede ser una solicitud de HTTP, un evento de la base de datos, archivos en el almacenamiento, y así sucesivamente. A los programadores se les pide que escriban solo el código para dicha función, luego lo implementen, pero el resto ya se encarga Azure, incluida la escalabilidad, la infraestructura y la ejecución de nuestro servicio a pedido.
* ¿Qué es serverless?
  
  * Serverless puede describirse como un modelo de computación en la nube en el que no se administra un servidor. Si bien hay servidores en alguna parte corriendo el código, el usuario no tiene que preocuparse por provisionar, administrar y escalar la infraestructura. En este modelo, las funciones de código se ejecutan en respuesta a eventos, y la facturación solo se realiza por el tiempo de ejecución del código. Por lo tanto, es rentable y sencillo. Un ejemplo es Azure Functions.
* ¿Qué es el runtime y que implica seleccionarlo al momento de crear el Function App?
  
  * La ejecución real del código de Azure Functions ocurre en el ambiente de ejecución de Azure Functions. Este runtime no solo establece el lenguaje de programación a emplear, sino también la versión concreta del runtime para dicho lenguaje (como una versión específica de Node.js o Python). Adicionalmente, esta decisión afecta otros factores relevantes, tales como la configuración del ambiente de ejecución, la administración de dependencias y la compatibilidad con otras funciones y servicios de Azure. Para concluir, la elección del runtime no es meramente un aspecto técnico, sino un elemento crucial que impacta en el desempeño, la adaptabilidad y la incorporación de la función en el ecosistema de Azure.
* ¿Por qué es necesario crear un Storage Account de la mano de un Function App?
  
  * Dado que Azure Functions necesita un sitio para administrar varios datos fundamentales que son vitales para su funcionamiento. Si se necesita supervisar lo que sucede en las funciones, ¿dónde se guardan los registros, las métricas o las ejecutables generadas durante la ejecución? Todo esto está en consonancia con la cuenta de almacenaje. Además, muchas funciones que se configuran en Azure están relacionadas con sucesos que surgen de colas o blobs. Por ejemplo, si la función se ejecuta cada vez que se carga un archivo, se necesita de esa cuenta de almacenamiento para gestionar y controlar estos eventos.
* ¿Cuáles son los tipos de planes para un Function App?, ¿En qué se diferencias?, mencione ventajas y desventajas de cada uno de ellos.
  * Plan de Consumo: Es la opción más flexible. Solo se paga cuando las funciones se ejecutan, lo que lo hace económicamente atractivo para cargas de trabajo variables. La escalabilidad es automática, pero tiene limitaciones. Los cold starts pueden ser un problema real en producción, y el límite de 10 minutos por ejecución puede ser restrictivo para procesos largos.
  * Plan Premium: Representa un equilibrio entre rendimiento y costo. Elimina los cold starts y permite conexiones VNet, algo crucial para muchas empresas. Las ejecuciones son ilimitadas y obtienes máquinas más potentes. Sin embargo, pagarás por capacidad reservada incluso en momentos de baja actividad. Es ideal cuando necesitas un rendimiento consistente y predecible.
  * Plan Dedicado: Ofrece control total sobre la infraestructura. No hay límites de tiempo en las ejecuciones y puedes aprovechar la capacidad no utilizada de otros servicios. El costo es significativo, pero la flexibilidad es máxima. La gestión requiere más atención y conocimientos técnicos. Es perfecto para grandes aplicaciones que necesitan recursos dedicados.
  * Kubernetes-based: La opción más reciente. Permite ejecutar Functions en cualquier cluster de Kubernetes, ofreciendo una flexibilidad extraordinaria. La portabilidad entre nubes es su punto fuerte, sin embargo, requiere experiencia en Kubernetes y añade una capa adicional de complejidad.
* ¿Por qué la memoization falla o no funciona de forma correcta?
  * En un entorno como Azure Functions, los recursos (como la memoria y el tiempo de ejecución) son limitados por el plan que se haya elegido. Si la función alcanza un límite de memoria, esto puede causar que el almacenamiento en caché de los resultados se pierda o no funcione de manera eficiente. Cuando la función intenta calcular números grandes y excede los límites de memora, se borra lo aprendido porque los datos almacenados en la memoria volátil de la función se pierden al reiniciarse o alcanzar un límite de capacidad. También es importante resaltar que el estado de la función (como los resultados memoizados) no se conserva entre ejecuciones a menos que se utilicen soluciones externas, como bases de datos o almacenamiento en la nube.
* ¿Cómo funciona el sistema de facturación de las Function App?
  
  * Segun Microsoft Azure: "Se factura según el número total de ejecuciones solicitadas cada mes para todas las funciones. Las ejecuciones se cuentan cada vez que se ejecuta una función en respuesta a un evento, desencadenado por un enlace. El primer millón de ejecuciones es gratis cada mes." Se utilizan los tipos de planes mencionados anteriormente.
  
* Informe
