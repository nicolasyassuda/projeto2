# Generated by Django 4.2 on 2023-05-08 15:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ApiProjeto3', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomDate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total', models.PositiveIntegerField()),
                ('mondays', models.PositiveIntegerField()),
                ('tuesdays', models.PositiveIntegerField()),
                ('wednesdays', models.PositiveIntegerField()),
                ('thursdays', models.PositiveIntegerField()),
                ('fridays', models.PositiveIntegerField()),
                ('saturdays', models.PositiveIntegerField()),
                ('sundays', models.PositiveIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='CustomDateItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('description', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Day',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total', models.PositiveIntegerField()),
                ('mondays', models.PositiveIntegerField()),
                ('tuesdays', models.PositiveIntegerField()),
                ('wednesdays', models.PositiveIntegerField()),
                ('thursdays', models.PositiveIntegerField()),
                ('fridays', models.PositiveIntegerField()),
                ('saturdays', models.PositiveIntegerField()),
                ('sundays', models.PositiveIntegerField()),
                ('hours', models.DecimalField(decimal_places=10, max_digits=15)),
            ],
        ),
        migrations.CreateModel(
            name='PublicHoliday',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total', models.PositiveIntegerField()),
                ('mondays', models.PositiveIntegerField()),
                ('tuesdays', models.PositiveIntegerField()),
                ('wednesdays', models.PositiveIntegerField()),
                ('thursdays', models.PositiveIntegerField()),
                ('fridays', models.PositiveIntegerField()),
                ('saturdays', models.PositiveIntegerField()),
                ('sundays', models.PositiveIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='PublicHolidayDate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('description', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='WeekendDay',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total', models.PositiveIntegerField()),
                ('mondays', models.PositiveIntegerField()),
                ('tuesdays', models.PositiveIntegerField()),
                ('wednesdays', models.PositiveIntegerField()),
                ('thursdays', models.PositiveIntegerField()),
                ('fridays', models.PositiveIntegerField()),
                ('saturdays', models.PositiveIntegerField()),
                ('sundays', models.PositiveIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='WorkingDay',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total', models.PositiveIntegerField()),
                ('mondays', models.PositiveIntegerField()),
                ('tuesdays', models.PositiveIntegerField()),
                ('wednesdays', models.PositiveIntegerField()),
                ('thursdays', models.PositiveIntegerField()),
                ('fridays', models.PositiveIntegerField()),
                ('saturdays', models.PositiveIntegerField()),
                ('sundays', models.PositiveIntegerField()),
                ('work_hours', models.DecimalField(decimal_places=10, max_digits=15)),
                ('wages', models.DecimalField(decimal_places=2, max_digits=15)),
            ],
        ),
        migrations.CreateModel(
            name='Feriado',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('custom_dates', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ApiProjeto3.customdate')),
                ('days', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ApiProjeto3.day')),
                ('public_holidays', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ApiProjeto3.publicholiday')),
                ('public_holidaysDate', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ApiProjeto3.customdateitem')),
                ('weekend_days', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ApiProjeto3.weekendday')),
                ('working_days', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ApiProjeto3.workingday')),
            ],
        ),
    ]
