# Generated by Django 4.2.6 on 2023-12-07 07:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0009_alter_post_category_alter_post_content1_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='slug',
            field=models.SlugField(blank=True, max_length=500, unique=True),
        ),
    ]
