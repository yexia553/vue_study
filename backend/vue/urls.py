from django.urls import include, path
from rest_framework import routers
import vue.views as vue_views


ROUTER = routers.DefaultRouter()
ROUTER.register("courses", vue_views.CoursesViewSet, basename="courses")
ROUTER.register("orders", vue_views.OrderViewSet, basename="orders")
ROUTER.register("menus", vue_views.MenusViewSet, basename="menus")
ROUTER.register("get-menus", vue_views.GetMenusView, basename="get-menus")

urlpatterns = [] + ROUTER.urls