# Generated by Django 4.2 on 2023-05-08 16:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ApiProjeto3', '0003_remove_feriado_custom_dates_remove_feriado_days_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Rotina',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=200)),
                ('descricao', models.CharField(max_length=200)),
                ('data', models.DateField()),
                ('setor', models.CharField(max_length=16)),
            ],
        ),
    ]