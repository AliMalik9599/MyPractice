from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Card, Course, User


class CourseSerializer(serializers.ModelSerializer):
	class Meta:
		model = Course
		fields = ('id', 'name')


class CardSerializer(serializers.ModelSerializer):
	course = serializers.StringRelatedField(many=False)
	skill = serializers.StringRelatedField(many=False)

	class Meta:
		model = Card
		fields = ('id', 'title', 'course', 'skill', 'level', 'duration', 'view_count', 'content', 'complete')


class UserSerializer(serializers.ModelSerializer):

	class Meta:
		model = User
		fields = ('id', 'name', 'username', 'password')
