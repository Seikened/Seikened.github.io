import os

def buscar_archivos(directorios, nombres_archivos, extensiones_permitidas=None, excluir_carpetas=None):
    """
    Busca archivos en los directorios especificados que coincidan con los nombres proporcionados,
    excluyendo ciertos tipos de archivos y carpetas no deseadas.
    """
    archivos_encontrados = []
    if extensiones_permitidas is None:
        extensiones_permitidas = ['.py', '.js', '.jsx', '.ts', '.tsx','css','md']
    if excluir_carpetas is None:
        excluir_carpetas = ['__pycache__', 'node_modules']

    for directorio in directorios:
        for root, dirs, files in os.walk(directorio):
            # Excluir carpetas no deseadas
            dirs[:] = [d for d in dirs if d not in excluir_carpetas]
            for file in files:
                if any(file.startswith(nombre) for nombre in nombres_archivos) and any(file.endswith(ext) for ext in extensiones_permitidas):
                    archivos_encontrados.append(os.path.join(root, file))
    return archivos_encontrados

def leer_contenido_archivos(archivos):
    """
    Lee el contenido de los archivos proporcionados.
    """
    contenido = []
    for archivo in archivos:
        try:
            with open(archivo, 'r', encoding='utf-8') as f:
                contenido.append({
                    'ruta': archivo,
                    'contenido': f.read()
                })
        except UnicodeDecodeError:
            try:
                with open(archivo, 'rb') as f:
                    contenido_binario = f.read()
                contenido.append({
                    'ruta': archivo,
                    'contenido': contenido_binario.decode('latin-1')  # Usa latin-1 como respaldo
                })
            except Exception as e:
                print(f"Error al leer el archivo {archivo}: {e}")
                contenido.append({
                    'ruta': archivo,
                    'contenido': "<no se pudo leer el contenido>"
                })
    return contenido

def escribir_salida(contenido, archivo_salida):
    """
    Escribe el contenido de los archivos en un solo archivo de salida, con separaciones claras.
    """
    with open(archivo_salida, 'w') as f:
        for item in contenido:
            f.write(f"--- Inicio del archivo: {item['ruta']} ---\n")
            f.write(item['contenido'])
            f.write(f"\n--- Fin del archivo: {item['ruta']} ---\n\n")

def main():
    directorios = [
        '/Users/fernandoleonfranco/Documents/GitHub/Seikened.github.io'
    ]
    

# ['package','App','LandingPage','index']# ['PhysicsGraph','LandingPage','App','index','tailwind.config']

    nombres_archivos = ['Sidebar','index','tailwind.config','Blog'] #['Blog','Sidebar','TestPost','App','index','tailwind.config','LandingPage','PhysicsGraph']
    archivo_salida = 'codigo_concatenado.txt'

    archivos_encontrados = buscar_archivos(directorios, nombres_archivos)
    contenido_archivos = leer_contenido_archivos(archivos_encontrados)
    escribir_salida(contenido_archivos, archivo_salida)

    print(f"Proceso completado. Contenido escrito en {archivo_salida}")

if __name__ == "__main__":
    main()


