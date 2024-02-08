from django import forms 

class FormularioEj2(forms.Form):
    nombre = forms.CharField(
        widget=forms.TextInput(
            attrs={'class':'form-control','placeholder':"Escribe aquí tu nombre"}
        ),
        label = "Nombre",
        max_length=10,
        required=True,
    )
    email = forms.CharField(
        widget=forms.EmailField(
            attrs={'class':'form-control','placeholder':"Escribe aquí tu correo"}
        ),
        label = "Correo",
        max_length=40,
        required=True,
    )
    edad = forms.CharField(
        widget=forms.IntegerField(
            attrs={'class':'form-control','placeholder':"Escribe aquí tu edad"}
        ),
        label = "Edad",
        max_length=2,
        required=True,
    )