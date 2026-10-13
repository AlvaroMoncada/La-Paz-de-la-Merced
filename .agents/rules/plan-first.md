# Regla de Planificación y Creación de Artefactos

## Obligatorio antes de modificar código
1. **Generar Artefacto Previo:** Antes de realizar cualquier modificación, creación o eliminación de archivos de código en el proyecto, debes generar un artefacto (`.md` en el directorio de artefactos) con el plan de implementación detallado.
2. **Contenido del Plan:**
   - Resumen del objetivo y cambios propuestos.
   - Lista de archivos afectados con sus rutas completas/enlaces markdown.
   - Detalle de la lógica o diff previsto.
3. **Solicitar Confirmación:** Marca el artefacto con `RequestFeedback: true` (o solicita aprobación explícita al usuario) y no ejecutes los cambios en el código hasta recibir la confirmación o autorización del usuario.
