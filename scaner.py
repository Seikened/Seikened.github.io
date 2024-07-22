import os

def imprimir_arbol(directorio, prefijo='', blacklist=None):
    if blacklist is None:
        blacklist = []
    # Obtiene todos los archivos y carpetas en el directorio actual
    archivos_y_carpetas = [e for e in os.listdir(directorio) if e not in blacklist]
    # Ordena los archivos y carpetas para una visualización más clara
    archivos_y_carpetas.sort()
    # Recorre todos los elementos obtenidos excepto el último
    for elemento in archivos_y_carpetas[:-1]:
        path_completo = os.path.join(directorio, elemento)
        # Agrega un emoji de carpeta o archivo según corresponda
        if os.path.isdir(path_completo):
            icono = '📂'
            if elemento not in blacklist:
                print(f"{prefijo}├── {icono} {elemento}")
                imprimir_arbol(path_completo, prefijo + "│   ", blacklist)
        else:
            icono = '🏷️ '
            print(f"{prefijo}├── {icono} {elemento}")
    # Asegura que el último elemento se maneje (para evitar el problema del 'pipe')
    if archivos_y_carpetas:
        elemento = archivos_y_carpetas[-1]
        path_completo = os.path.join(directorio, elemento)
        icono = '📂' if os.path.isdir(path_completo) else '🏷️ '
        print(f"{prefijo}└── {icono} {elemento}")
        if os.path.isdir(path_completo) and elemento not in blacklist:
            imprimir_arbol(path_completo, prefijo + "    ", blacklist)

# Función principal que solicita la ruta y ejecuta la función de imprimir el árbol
def main(tipoRuta, ruta):
    if tipoRuta == 'default':
        ruta = os.getcwd()
    else:
        ruta = ruta
    
    # Lista de elementos a ignorar (modificar según tus necesidades)
    blacklist = ['node_modules', '.git', 'target', '__pycache__', 'GestorPropiedades.code-workspace', 'env']
    print(f"Árbol de directorios para {ruta}:")
    imprimir_arbol(ruta, blacklist=blacklist)

if __name__ == "__main__":
    ruta = "/Users/fernandoleonfranco/Documents/GitHub/Seikened.github.io"
    tipoRuta = 'custom' # 'default' o 'custom'
    main(tipoRuta, ruta)
