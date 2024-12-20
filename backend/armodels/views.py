from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ARModel
from .serializers import ARModelSerializer, ARModelUploadSerializer
from django.core.files.storage import FileSystemStorage

class ARModelInfoView(APIView):
    def get(self, request, modelId):
        try:
            ar_model = ARModel.objects.get(modelId=modelId)
            return Response({
                "model_id": ar_model.modelId,
                "model_file": ar_model.modelFile.url,  
                "name": ar_model.name,
                "created_at": ar_model.created_at,
                "qrurl": ar_model.qrurl
            })
        except ARModel.DoesNotExist:
            return Response({"message": "Model not found"}, status=status.HTTP_404_NOT_FOUND)

class ARModelUploadView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ARModelUploadSerializer(data=request.data)
        if serializer.is_valid():
            model_file = serializer.validated_data['model']
            
            # Save the file to the appropriate directory
            fs = FileSystemStorage(location='media/ar_models/')
            filename = fs.save(model_file.name, model_file)
            file_url = fs.url(filename)

            # Create a new ARModel instance
            ar_model = ARModel.objects.create(
                modelId=filename,  # Use the filename as the modelId
                name=model_file.name,
                modelFile=filename,
                qrurl="example.com/qr",  # You can dynamically generate or fetch the QR URL here
            )

            return Response({
                'message': 'Model uploaded successfully',
                'model_url': file_url
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
