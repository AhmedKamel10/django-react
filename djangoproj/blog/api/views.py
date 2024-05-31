from rest_framework.viewsets import ModelViewSet
from ..models import Post, Projects
from .serializers import PostSerializer, ProjectsSerializer
class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class= PostSerializer
class ProjectsViewSet(ModelViewSet):
    queryset = Projects.objects.all()
    serializer_class= ProjectsSerializer