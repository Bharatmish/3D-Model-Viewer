from rest_framework import serializers
from .models import ARModel

class ARModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ARModel
        fields = ['modelId', 'name', 'modelFile', 'qrurl', 'created_at']

class ARModelUploadSerializer(serializers.Serializer):
    model = serializers.FileField()

    def validate_model(self, value):
        # Validate that the uploaded file is a .glb file
        if not value.name.endswith('.glb'):
            raise serializers.ValidationError("Only .glb files are allowed.")
        return value
