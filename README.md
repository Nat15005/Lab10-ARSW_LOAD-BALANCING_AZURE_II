### Escuela Colombiana de Ingeniería
### Arquitecturas de Software - ARSW

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
    
    * ![image](https://github.com/user-attachments/assets/8263a8e8-2342-4ce2-ada0-07429dc5c2c7)
   
    * ![image](https://github.com/user-attachments/assets/ec429663-d182-42db-b74c-92068d58fb95)

2. Instale la extensión de **Azure Functions** para Visual Studio Code.

![](images/part3/part3-install-extension.png)

  * Procedimiento
    * ![image](https://github.com/user-attachments/assets/f7ab34eb-413f-493b-9dd2-ab1d7ad83975)


3. Despliegue la Function de Fibonacci a Azure usando Visual Studio Code. La primera vez que lo haga se le va a pedir autenticarse, siga las instrucciones.

![](images/part3/part3-deploy-function-1.png)

![](images/part3/part3-deploy-function-2.png)

  * Procedimiento:
    * Instalamos la extensión Azure Account para iniciar sesión en Azure.
      * ![image](https://github.com/user-attachments/assets/752455d1-a9fe-4c8e-8a51-b80fd592f4ea)
        
    * Cambiamos la versión del host a una más actual.
      * ![image](https://github.com/user-attachments/assets/c26a8109-bb2f-4099-936f-4a7a52dd86c6)


4. Dirijase al portal de Azure y pruebe la function.

![](images/part3/part3-test-function.png)

  * ![image](https://github.com/user-attachments/assets/6131fae3-019e-4817-9017-c44745e9998f)

5. Modifique la coleción de POSTMAN con NEWMAN de tal forma que pueda enviar 10 peticiones concurrentes. Verifique los resultados y presente un informe.
  * Procedimiento:
    * Instalamos lo necesario para hacer el reporte
      * ![image](https://github.com/user-attachments/assets/f7862696-f4ec-4ce8-afbe-1dbf6dce972d)
        
    * Generamos un reporte en un html con detalles de las peticiones, tiempos de respuesta, códigos de estado y cualquier error.
      * ![image](https://github.com/user-attachments/assets/0e37b8d1-8a91-4429-be17-e83474eacfa1)


6. Cree una nueva Function que resuleva el problema de Fibonacci pero esta vez utilice un enfoque recursivo con memoization. Pruebe la función varias veces, después no haga nada por al menos 5 minutos. Pruebe la función de nuevo con los valores anteriores. ¿Cuál es el comportamiento?.

**Preguntas**

* ¿Qué es un Azure Function?
* ¿Qué es serverless?
* ¿Qué es el runtime y que implica seleccionarlo al momento de crear el Function App?
* ¿Por qué es necesario crear un Storage Account de la mano de un Function App?
* ¿Cuáles son los tipos de planes para un Function App?, ¿En qué se diferencias?, mencione ventajas y desventajas de cada uno de ellos.
* ¿Por qué la memoization falla o no funciona de forma correcta?
* ¿Cómo funciona el sistema de facturación de las Function App?
* Informe
