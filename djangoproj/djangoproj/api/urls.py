from rest_framework.routers import DefaultRouter
from blog.api.urls import post_router, Projects_router
from django.urls import path, include

router= DefaultRouter()
router.registry.extend(post_router.registry)
router.registry.extend(Projects_router.registry)

urlpatterns = [
    path('', include(router.urls))
]