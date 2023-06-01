from django.urls import path
from .views import fun_fact, delete_fun_fact
from . import views

urlpatterns = [
    path('Rotinas/get/<int:ano>/<int:mes>', views.pegarRotinas, name='get_rotinas'),
    path('Rotinas/post', views.salvarRotinas, name='get_rotinas'),
    path('Rotinas/update', views.atualizarRotinas, name='get_rotinas'),
    path('Rotinas/delete', views.deletarRotinas, name='get_rotinas'),
    path('api/funfact/', views.fun_fact, name='fun_fact'),
    path('api/funfact/<int:id>/', delete_fun_fact)
]
