from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gallery', '0007_alter_pagecontent_unique_together_and_more'),
    ]

    operations = [
        migrations.SeparateDatabaseAndState(
            database_operations=[],
            state_operations=[
                migrations.AlterUniqueTogether(
                    name='pagecontent',
                    unique_together=set(),
                ),
            ],
        ),
    ]
