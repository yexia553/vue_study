from rest_framework import viewsets
import vue.serializers as vue_serializers
import vue.models as vue_models
import vue.filters as vue_filers


class CoursesViewSet(viewsets.ModelViewSet):
    queryset = vue_models.Courses.objects.all()
    serializer_class = vue_serializers.CoursesSerializers
    filter_class = vue_filers.CourseFilter
    

class OrderViewSet(viewsets.ModelViewSet):
    queryset = vue_models.Order.objects.all()
    serializer_class = vue_serializers.OrderSerializers
    filter_class = vue_filers.OrderFilter