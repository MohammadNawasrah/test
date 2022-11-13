from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('index', views.index, name='index2'),
    path('reg', views.std_reg, name='reg'),
]