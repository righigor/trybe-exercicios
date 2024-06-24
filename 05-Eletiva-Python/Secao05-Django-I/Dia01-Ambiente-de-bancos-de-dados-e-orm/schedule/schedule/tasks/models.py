from django.db import models

# Create your models here.
class Task(models.Model):
  title = models.CharField(max_length=255)
  description = models.TextField()
  due_date = models.DateField()
  completed = models.BooleanField(default=False)
  priority = models.IntegerField(choices=((1, 'Low'), (2, 'Medium'), (3, 'High')))
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)