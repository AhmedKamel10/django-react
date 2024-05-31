# Generated by Django 3.2.14 on 2024-02-25 15:16

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0009_rename_image_projects_project_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='projects',
            name='project_article',
            field=models.CharField(default=django.utils.timezone.now, max_length=200),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='projects',
            name='description',
            field=models.TextField(),
        ),
    ]