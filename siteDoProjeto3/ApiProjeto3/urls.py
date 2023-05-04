from django.urls import path

from . import views

urlpatterns = [
    path('', views.api_note, name='api_note')
]
