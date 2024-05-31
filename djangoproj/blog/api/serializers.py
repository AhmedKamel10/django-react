from rest_framework.serializers import ModelSerializer
from ..models import Post, Projects

class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = ['title', 'body', 'blog_date', 'image', 'id', 'discription']
class ProjectsSerializer(ModelSerializer):
    class Meta:
        model = Projects
        fields = '__all__'