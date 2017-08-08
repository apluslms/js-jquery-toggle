####################################
Django integration for jquery toggle
####################################

To install add following to your :code:`requirements.txt` (with correct version):

.. code-block:: text

  git+https://github.com/Aalto-LeTech/js-jquery-toggle.git@1.0.0#egg=js-jquery-toggle-django==1.0.0&subdirectory=django

Then add :code:`js_jquery_toggle` to `INSTALLED_APPS`.

Finally include following in your :code:`<head>`:

.. code-block:: django+html

  <!-- TODO: load bootstrap v3 css -->
  <!-- TODO: load jquery -->
  {% include 'jquery_toggle.head.html' %}
  
