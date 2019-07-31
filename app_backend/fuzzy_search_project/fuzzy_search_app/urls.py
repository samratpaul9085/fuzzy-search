from django.urls import path
from . import views

urlpatterns = [
    path('get-words', views.get_words, name='get words'),
]