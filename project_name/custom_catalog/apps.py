# -*- encoding: utf-8 -*-
from catalog.apps import CustomCatalogBaseConfig


class CustomCatalogAppConfig(CustomCatalogBaseConfig):
    name = '{{ project_name }}.custom_catalog'
    verbose_name = u'Модели каталога'

    def ready(self):
        super(CustomCatalogAppConfig, self).ready()
        import {{ project_name }}.custom_catalog.signals
