from django.urls import path
from .views import ARModelInfoView, ARModelUploadView

urlpatterns = [
    path('arinfo/<str:modelId>/', ARModelInfoView.as_view(), name='ar_model_info'),
    path('upload/', ARModelUploadView.as_view(), name='ar_model_upload'),
]
