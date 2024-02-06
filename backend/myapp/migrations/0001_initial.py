# Generated by Django 5.0.1 on 2024-02-06 12:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Audio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('audioName', models.CharField(max_length=150)),
                ('audioUrl', models.FileField(upload_to='assets/audio/')),
                ('imgAudioUrl', models.ImageField(upload_to='assets/')),
                ('author', models.CharField(max_length=100)),
                ('historyOfAudio', models.CharField(max_length=350)),
            ],
        ),
        migrations.CreateModel(
            name='Intention',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('intention_title', models.CharField(default='YourDefaultValue', max_length=70)),
                ('intention_text', models.CharField(max_length=350)),
                ('type_of_people', models.CharField(choices=[('Pour les votres', 'Pour les votres'), ('Pour votre famille', 'Pour votre famille'), ('Pour vos amis', 'Pour vos amis'), ('Pour vos ennemis', 'Pour vos ennemis')], max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Prayer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('prayer_text', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='RandomImg',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img_url', models.ImageField(upload_to='assets/')),
            ],
        ),
        migrations.CreateModel(
            name='RubriquesYS',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rubriqueName', models.CharField(max_length=100)),
            ],
        ),
    ]
