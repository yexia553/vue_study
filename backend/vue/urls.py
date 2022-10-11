from django.urls import include, path
from rest_framework import routers
import vue.views as vue_views


ROUTER = routers.DefaultRouter()
ROUTER.register("courses", vue_views.CoursesViewSet, basename="courses")

urlpatterns = [] + ROUTER.urls