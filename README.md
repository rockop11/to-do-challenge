# To Do Challenge

## 1) Clonar repositorio
```bash
    git clone https://github.com/rockop11/to-do-challenge.git
```

## 2) Instalar las dependencias
```bash
    npm install
```

## 3) Ejcutar la Aplicación
```bash
    npm run dev
```

## Dependencias utilizadas:
- Zustand (Estados globales)
- Shadcdn & Tailwind (Componentes / Estilos)
- Next.js (Framework)


### Funcionalidad del Proyecto

1) una vez que se ejecuta el `npm run dev` en el `localhost:3000` se vera la patanlla de inicio del proyecto.  

2) la primera vez que se ejecute el `npm run dev` no se veran notas, debido a que el store de *Zustand* esta vacìo. Debe agregar una nota.

3) se podrá observar un boton con un simbolo `+` el cual al hacer click abrira un modal para poder crear una nueva nota.

4) Se deberá agregar un tìtulo y una descripciòn a la nota. De lo contrario, apareceran las validaciones pertinentes del formulario. Una vez agregado el título y la descripción, al hacer click en `Crear`, crearà la nueva nota y cerrará el modal, limpiando los inputs, y mostrando la nota en el inicio.

5) Una vez en el inicio, veremos el array de notas con el filtro `all`. mostrando asì todas las notas que se hayan creado (que el estado por defecto de creación es *En Curso*). Y al momento de hacer click en el boton de `Completar`, La nota seleccionada, cambiará su estado a `Completada` (mostrando un *Badge* con el estado `Completada`).

6) Debajo del titulo, se podra observar los 3 distintos botones para poder filtrar la lista de notas, según su estado. 
    - Todas: muestra todas las notas almacenadas en el estado global de Zustand.
    - En Curso: muestra las notas que fueron creadas pero no completadas
    - Completadas: muestra las notas que cambiaron su estado a completadas.

7) Por último, al momento de completar una tarea, se podrá visualizar, a traves de `conditional rendering`, el boton para eliminar la nota. Esto la quita del estado global de todos y actualiza la lista de todos, sin la todo eliminada.

