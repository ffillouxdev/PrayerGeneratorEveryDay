# Generated by Django 4.2.4 on 2023-12-16 03:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0007_intention'),
    ]

    operations = [
        migrations.AddField(
            model_name='intention',
            name='type_of_people',
            field=models.CharField(choices=[('Pour les votres', 'Pour les votres'), ('Pour votre famille', 'Pour votre famille'), ('Pour vos amis', 'Pour vos amis'), ('Pour vos ennemis', 'Pour vos ennemis')], default='Pour les votres', max_length=100),
            preserve_default=False,
        ),
    ]
