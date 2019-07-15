##############################################################################################
Jquery addon for creating multi-state- and toggle buttons for radios, checkboxes and dropdowns
##############################################################################################

Simple javascript file to help toggle bootstrap glyphs on toggle buttons
and replace checkboxes, radio groups and dropdowns with multi-state-buttons.
Library adds four methods for jquery for easy usage.
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

Supported in versions later than 1.0.0 by calling method ::code:`makeMultiStateButton`.

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

In version 1.0.0, radio buttons were converted to toggle buttons (one button per
each option), but in later versions, radio buttons are converted to
multi-state-buttons (one button per radio group).

Supported in versions later than 1.0.0 by calling method
::code:`replaceInputsWithMultiStateButtons`.

Check the script for more details.

makeMultiStateButton
--------------------

You can add js handlers for :code:`button` with following snippet:

.. code-block:: html

  <button class="mltsb-3-stage">Click to change state</button>

.. code-block:: javascript

  $('button.mltsb-3-stage').makeMultiIconButton({
    num_of_states: 3,
		text_0: 'Option 0',
		text_1: 'Option 1',
		text_2: 'Option 2',
  })

Check the script for more details.

replaceInputsWithMultiStateButtons
----------------------------------

You can convert dropdowns to multi-state-buttons with the following code:

.. code-block:: html

  <label for="dropdowns_1">Buttons:</label>
  <p id="dropdowns_1">
    <select>
      <option value="">Default</option>
      <option value="a">Option A</option>
      <option value="b">Option B</option>
    </select>
    <select>
      <option value="">Default</option>
      <option value="c">Option C</option>
    </select>
  </p>
  <label for="dropdowns_2">Different group of buttons:</label>
  <p id="dropdowns_2">
    <select>
      <option value="">Default</option>
      <option value="d">Option D</option>
      <option value="e">Option E</option>
    </select>
  </p>

.. code-block:: javascript

  $('#dropdowns_1, #dropdowns_2').replaceInputsWithMultiStateButtons();

You can convert checkboxes and radio groups to multi-state buttons with the
following code:

.. code-block:: html

  <label for="cbAndRadio">Checkboxes and radio buttons:</label><br>
  <ul id="cbAndRadio">
    <li><label><input name="options" type="checkbox" value="0"> Option 0</label></li>
    <li><label><input name="rg1" type="radio" value="0" checked> State 0</label></li>
    <li><label><input name="rg1" type="radio" value="1"> State 1</label></li>
    <li><label><input name="rg1" type="radio" value="2"> State 2</label></li>
    <li><label><input name="options" type="checkbox" value="2"> Option 2</label></li>
    <li><label><input name="rg2" type="radio" value="0"> State 0</label></li>
    <li><label><input name="rg2" type="radio" value="1" checked> State 1</label></li>
    <li><label><input name="rg2" type="radio" value="2"> State 2</label></li>
  </ul>

.. code-block:: javascript

  $('#cbAndRadio').replaceInputsWithMultiStateButtons();

Multi-state-buttons can either be single-icon-buttons (displays a single icon
on the button at all times) or multi-icon-buttons (displays an icon for each of
the states on the button at all times, allowing the icon of the current state to
be different in some way).
By default, buttons with three or less states are single-icon-buttons and ones
with four or more states are multi-state-buttons.

More details can be found in the
`instruction file <multi_state_button_instructions.rst>`_.


Integration to frameworks
=========================

There is integration to following frameworks:

* `Django <django/>`_
