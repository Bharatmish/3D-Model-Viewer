from django.db import models

class ARModel(models.Model):
    modelId = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    modelFile = models.FileField(upload_to='ar_models/')  # This saves files in media/ar_model/
    qrurl = models.URLField(max_length=500)
    created_at = models.DateTimeField()  # No need for auto_now_add here

    def __str__(self):
        return self.name
