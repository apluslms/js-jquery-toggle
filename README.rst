##################################################################
Jquery addon for creating toggle buttons for radios and checkboxes
##################################################################

Simple javascript file to help toggle bootstrap glyphs on toggle buttons.
Library adds two methdos for jquery for easy usage.
This script requires `jquery <https://jquery.com/>`_ (3.1+).

Usage
=====

When script :code:`jquery-toggle.js` is loaded,
following methods are defined.

makeToggleButton
----------------

You can add js handlers for :code:`button` with following snippet:

.. code-block:: html

  <button class="toggle">Toggle me</button>

.. code-block:: javascript

  $('button.toggle').makeToggleButton({
    onicon: 'check', // bootstrap glyph names
    oncolor: 'success', // bootstrap classes
    officon: 'unchecked',
  });

Check the script for more details.

replaceCheckboxesWithButtons
----------------------------

You can convert :code:`ul` with radio inputs or checkboxes to group of buttons with following:

.. code-block:: html

  <label for="options">Options:</label>
  <ul id="options">
    <li><label><input name="options" type="checkbox" value="0"> Option 0</label></li>
    <li><label><input name="options" type="checkbox" value="1"> Option 1</label></li>
    <li><label><input name="options" type="checkbox" value="2"> Option 2</label></li>
  </ul>

.. code-block:: javascript

  $('#options').replaceCheckboxesWithButtons();

Check the script for more details.

Inegration to frameworks
========================

There is integration to following frameworks:

* `Django <django/>`_
