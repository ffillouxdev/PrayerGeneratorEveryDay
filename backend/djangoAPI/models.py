from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.contrib.auth.models import Group, Permission
from django.db import models
from django.utils.translation import gettext_lazy as _
from .managers import CustomUserManager

class User(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(_("First Name"), max_length=30, blank=False)
    last_name = models.CharField(_("Last Name"), max_length=30, blank=False)
    email = models.EmailField(_("Email Address"), unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    username = None
    
    # Define groups and user_permissions with related_name
    groups = models.ManyToManyField(Group, verbose_name=_("Groups"), blank=True, related_name="users_custom")
    user_permissions = models.ManyToManyField(Permission, verbose_name=_("User Permissions"), blank=True, related_name="users_custom")

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name"]

    objects = CustomUserManager()

    class Meta:
        verbose_name = _("User")
        verbose_name_plural = _("Users")

    def __str__(self) -> str:
        return self.email

    @property
    def get_full_name(self):
        return f"${self.first_name}{self.last_name}"
