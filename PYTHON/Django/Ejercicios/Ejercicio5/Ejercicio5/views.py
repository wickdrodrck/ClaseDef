from django.shortcuts import render
lenguajes = ["Python", "Java", "Javascript", "C#", "Typescript"]

def Lenguajes(request):
    mensaje = ""
    if request.method == 'POST':
        nombre = request.POST['nombre_input']
        arraylengunuevos = nombre.split(",")
        if ComprobarLenguaje(arraylengunuevos) == 1:
            mensaje = "Estás empezando..."
            
        elif ComprobarLenguaje(arraylengunuevos) == 0:
            mensaje = "Espabila y ponte a estudiar ya"
        else:
            mensaje = 
        
    return render(request, 'index.html', {"lenguajes":lenguajes, "mensaje":mensaje})

def ComprobarLenguaje(arraylengunuevos):
    cont = 0
    for x in lenguajes:
        for y in arraylengunuevos:
            if x == y:
                cont += 1
            else:
                lenguajes.append(x)
    return cont

def SacarLasBuenas(nombre):
    for x in lenguajes:
        if x == 
    