from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import PostViewSet, ProjectsViewSet
post_router = DefaultRouter()
Projects_router = DefaultRouter()
post_router.register(r'posts', PostViewSet)
Projects_router.register(r'Projects', ProjectsViewSet)
