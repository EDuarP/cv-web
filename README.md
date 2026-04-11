# CV Web - Eduardo Duarte

Currículum web personal construido con React, Vite y Tailwind CSS. Desplegado en GitHub Pages.

---

## Tecnologías

- **React 19** - Framework UI
- **Vite** - Build tool rápido
- **Tailwind CSS** - Estilos utilitarios
- **Motion** - Animaciones
- **React Router** - Navegación
- **GitHub Pages** - Hosting

---

## Demo

👉 https://eduarp.github.io/cv-web

---

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Desplegar a GitHub Pages
npm run deploy
```

---

## Estructura

```
cv-web/
├── src/
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Entry point
│   ├── index.css        # Estilos globales
│   ├── components/      # Componentes reutilizables
│   └── assets/          # Imágenes y recursos
├── public/              # Archivos estáticos
└── package.json
```

---

## Personalización

Para usar como template para tu propio CV:

1. Fork del repositorio
2. Editar contenido en `src/components/`
3. Actualizar datos personales
4. Configurar `homepage` en `package.json` con tu URL
5. Ejecutar `npm run deploy`

---

## Licencia

MIT