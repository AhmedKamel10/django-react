# Generated by Django 3.2.14 on 2024-01-28 06:43

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20240128_0823'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='body',
            field=models.TextField(default=datetime.datetime(2024, 1, 28, 6, 43, 29, 871224, tzinfo=utc)),
            preserve_default=False,
        ),
    ]
