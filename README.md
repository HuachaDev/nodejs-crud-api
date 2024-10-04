# API de Productos

## Descripción del Proyecto
La API de Productos permite gestionar un inventario de productos, incluyendo funcionalidades para listar, agregar, actualizar y eliminar productos.

## Tecnologías Utilizadas
- **Node.js**: 
- **Express**: 
- **Sequelize**: 
- **MySQL**: 

## Importación de la Base de Datos
Crear una base de datos llamada `productManagement`.

## Endpoints

### 1. Listar Productos
- **Método**: `GET`
- **Ruta**: `/productos`
- **Descripción**: Devuelve una lista de todos los productos disponibles.
- **Ejemplo de Respuesta**:
    ```json
    [
      { "id": 1, "nombre": "Producto A", "descripcion": "Descripción A", "precio": 100, "cantidad_stock": 50 },
      { "id": 2, "nombre": "Producto B", "descripcion": "Descripción B", "precio": 200, "cantidad_stock": 30 }
    ]
    ```

### 2. Crear Producto
- **Método**: `POST`
- **Ruta**: `/productos`
- **Descripción**: Permite agregar un nuevo producto al inventario.
- **Ejemplo de Solicitud**:
    ```json
    { 
      "nombre": "Nuevo Producto", 
      "descripcion": "Descripción del nuevo producto", 
      "precio": 150, 
      "cantidad_stock": 20 
    }
    ```

### 3. Ver Detalle de Producto
- **Método**: `GET`
- **Ruta**: `/productos/{id}`
- **Descripción**: Obtiene la información detallada de un producto específico por su ID.
- **Ejemplo de Respuesta**:
    ```json
    { 
      "id": 1, 
      "nombre": "Producto A", 
      "descripcion": "Descripción A", 
      "precio": 100, 
      "cantidad_stock": 50,
      "created_at": "2024-01-01 00:00:00",
      "updated_at": "2024-01-01 00:00:00"
    }
    ```

### 4. Actualizar Producto
- **Método**: `PUT`
- **Ruta**: `/productos/{id}`
- **Descripción**: Actualiza la información de un producto existente. Permite descontar stock si se proporciona el campo `descuento_stock`.
- **Ejemplo de Solicitud**:
    ```json
    { 
      "nombre": "Producto A Actualizado", 
      "descripcion": "Descripción actualizada", 
      "precio": 120, 
      "cantidad_stock": 40,
      "descuento_stock": 10 
    }
    ```

### 5. Eliminar Producto
- **Método**: `DELETE`
- **Ruta**: `/productos/{id}`
- **Descripción**: Elimina un producto del inventario.
- **Ejemplo de Respuesta**:
    ```json
    { "message": "Producto 'Nombre del Producto' eliminado con éxito." }
    ```
- **Manejo de errores**: Si el producto no existe, se devolverá un mensaje de error:
    ```json
    { "error": "Producto no encontrado." }
    ```


## Instrucciones para Ejecutar el Proyecto

1. **Clonar el repositorio**:
    ```bash
    
    
    ```

2. **Instalar las dependencias**:
    ```bash
    npm install
    ```

3. **Crear y configurar la base de datos**:
    - Crear una base de datos llamada `productManagement` en MySQL.

4. **Levantar el servidor local**:
    ```bash
    node src/server.js
    ```

El servidor estará disponible en `http://localhost:3000`.