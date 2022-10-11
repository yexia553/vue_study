import vue.models as vue_models
from rest_framework import serializers


class CoursesSerializers(serializers.ModelSerializer):
    class Meta:
        model = vue_models.Courses
        fields = "__all__"


class OrderSerializers(serializers.ModelSerializer):
    class Meta:
        model = vue_models.Order
        fields = "__all__"