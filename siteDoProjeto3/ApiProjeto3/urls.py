from django.urls import path

from . import views

urlpatterns = [
    path('Rotinas/get/<int:ano>/<int:mes>', views.pegarRotinas, name='get_rotinas'),
    path('Rotinas/update', views.atualizarRotinas, name='get_rotinas')
]
