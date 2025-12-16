from django.urls import path
from .views import python_api

urlpatterns = [
    path("python/", python_api),
]
