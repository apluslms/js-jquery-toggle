##########################################
Instructions for using multi-state-buttons
##########################################

replaceSelectWithMultiIconButtons
==================================

You can convert dropdowns to multi-state-buttons with the following code.
The multi-state-buttons will be grouped by such that the dropdowns with
the same label text will be grouped together under the same label.
The button groups will appear at the location of the first dropdown with
that label text. Dropdowns must be surrounded by a parent node, as that will
be hidden.

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

  $('#button_1, #button_2, #button_3').replaceInputsWithMultiStateButtons();

Another way to implement multi-state-buttons is with a list of checkboxes and
radio buttons. Checkboxes will be replaced with single-icon two-state-buttons;
radio groups are replaced with multi-state-buttons with each input represented
by a state.

.. code-block:: html

  <label for="buttongroup_2">From checkboxes and radio buttons:</label><br>
  <ul id="buttongroup_2">
    <li><label><input name="options" type="checkbox" value="0"> Option 0</label></li>
    <li><label><input name="rg1" type="radio" value="0" checked> State 0</label></li>
    <li><label><input name="rg1" type="radio" value="2"> State 2</label></li>
    <li><label><input name="rg2" type="radio" value="0" checked> State 0</label></li>
    <li><label><input name="rg2" type="radio" value="1"> State 1</label></li>
    <li><label><input name="rg2" type="radio" value="2"> State 2</label></li>
  </ul>

.. code-block:: javascript

  $('#buttongroup_2').replaceInputsWithMultiStateButtons();

Default options and overriding
------------------------------

By default, if there are three or less states, a single-icon-button is used,
and for four or more, a multi-icon-button is used. This can be overriden
(however, checkboxes are always displayed as single-icon-buttons).

The default single-icon-button icons are the following:

=====   ================    ==============
State   Icon                Bootstrap name
=====   ================    ==============
0       empty checkbox      unchecked
1       checked checkbox    check
2       X                   remove
=====   ================    ==============

There are two sets of default icons for the multi-icon-buttons,
ones using Bootstrap glyphicons and another using Font Awesome icons.
The Bootstrap set is used by default, but if there is access to the
Font Awesome library, the Font Awesome icons can be used by providing
:code:`font_awesome: true` as one of the key-value pairs of the
argument object of the method :code:`replaceInputsWithMultiStateButtons`.

+------------+-------------------+--------------+--------------+---------------+
|            | Bootstrap                        | Font Awesome                 |
+            +-------------------+--------------+--------------+---------------+
|            | Icon              | Name         | Icon         |  Name         |
+============+===================+==============+==============+===============+
| icon_on    | ✓ in solid circle | check-sign   | solid circle | fas fa-circle |
+------------+-------------------+--------------+--------------+---------------+
| icon_off   | circled dot       | record       | empty circle | far fa-circle |
+------------+-------------------+--------------+--------------+---------------+

Font Awesome icons must be referred to by their full name (beginning with
'far fa-', 'fas fa-' or 'fal-fa'), but Bootstrap glyphs can be named
without 'glyphicon glyphicon-'.

The possible colors of the buttons are Bootstrap colors:

=======  ===========
Name     Color
=======  ===========
default  white
primary  bright blue
danger   red
warning  yellow
success  green
info     light blue
=======  ===========

In addition to these characteristics, there is an optional characteristic
:code:`text` for each option.
This is the text displayed on the button when that option is selected.
If :code:`text` is not defined, the text of the option (as displayed in the
dropdown, radio button or checkbox) will be displayed.

On multi-icon buttons, if the button has :code:`n` options, the button will
display :code:`n` icons, one for each option (in order). The icon of the
currently selected option will be the icon specified by the on-icon parameter
of that option, the rest will be off-icons of the other options respectively.


**General parameters**

state : Int
  The state the buttons begin with (default 0)
multi_icon: Boolean
  If set to true, displays an icon for each option on the button at all times.
  If set to false, displayes a single icon on the button at all times.
  If not set, uses false (singe-icon) if there are at most 3 states and true
  (multi-icon) if there are at least 4 states.
icon_off: String   (multi-icon)
  The icon displayed for a not-selected option if a specific icon is not defined
  for that option.
  Defaults: circled dot (Bootstrap), empty circle (Font Awesome)
icon_on: String   (multi-icon)
  The icon displayed for a selected option if a specific icon is not defined
  for that option.
  Defaults: check mark within a solid circle (Bootrap),
  solid circle (Font Awesome)
nocolor : Boolean
  If set to true, the buttons will stay white despite the state.
  If set to false (default), buttons will change color according to state.
font_awesome : Boolean
  Whether to use Font Awesome icons in default set or not.
  If set to true, uses default set consisting of Font Awesome icons.
  If set to false (default), uses default set consisting of Bootstrap icons.
buttonClass : String
  One or more space-separated classes to be added to the class attributes of
  the buttons. By default uses :code:`'btn'`, which means the button is
  displayed as a Bootstrap button. (To prevent that, provide an empty string
  or any string as the value of this key.)

**Parameters of each option/state**
*In the parameter names,* :code:`i` *is replaced by the index of the option.
Eg.* :code:`icon_on_0` *and* :code:`color_1`

icon_i : String   (single-icon)
  The only icon displayed on the button when this option/state is selected.
icon_on_i : String   (multi-icon)
  Icon displayed among other icons when this option/state is selected.
  If not provided, uses the general :code:`icon_on`.
icon_off_i : String   (multi-icon)
  Icon displayed among other icons when this option/state is not selected.
  If not provided, uses the general :code:`icon_off`.
color_i : String
  The color of the button when this option/state is selected.
  If not provided, uses the color default for the first state and
  the color in the table of the index :code:`[(i-1 % 5) + 1]`
  (loops through the last five colors).
text_i : String
  The text displayed on the button when this option/state is selected.
  If not provided, uses the text of the option in the dropdown, or the text of
  the checkbox or radio button.



Overriding with arguments
.........................

Any of the characteristics (icon / on-icon / off-icon, color, text) of an option can be
overriden.

.. code-block:: html

  <label for="ex9_1">Do you like:</label><br>
  <p id="ex9_1">
    <select>
      <option value="">Ice cream?</option>
      <option value="y">Yeah, I like ice cream</option>
      <option value="s">Somewhat</option>
      <option value="n">No</option>
    </select>
    <select>
      <option value="">Chocolate?</option>
      <option value="y">I love chocolate!</option>
      <option value="s">Sure</option>
      <option value="n">Not really</option>
    </select>
  </p>

.. code-block:: javascript

  $('#ex9_1').replaceInputsWithMultiStateButtons({
    multi_icon: true,
    icon_on_0: 'question-sign',  // solid circled question mark
    icon_off_0: 'ban-circle',
    // icon_on_1: 'ok-sign'
    icon_off_1: 'ok-circle',     // circled checkmark
    icon_on_2: 'minus-sign',     // solid circled minus
    // icon_off_2: 'record',
    color_2: 'warning',          // yellow
    text_2: 'Somewhat',          // all buttons will display 'Somewhat' on the third option
    icon_on_3: 'remove-sign',    // solid circled X
    icon_off_3: 'remove-circle', // regular circled X
    color_3: 'danger',           // red
  })


Overriding with data
....................

The characteristics of the options/states can also be overriden individually
for a button through the data attribute. These override the argument overrides.

+-------------+-----------------+-------------+------------+-----------+----------------+---------------------------+
| Data        | Possible values | Single-icon | Multi-icon | Checkbox  | Radio button   | Dropdown (select)         |
+=============+=================+=============+============+===========+================+===========================+
| officon     | Bootstrap       | X           | \-         | input-tag | \-             | \-                        |
+             + icon names      +             +            +           +                +                           +
| onicon      | (with or        |             |            |           |                |                           |
+-------------+ without         +-------------+------------+-----------+----------------+---------------------------+
| icon        | "glyphicon"     | X           | \-         | \-        | input-tag      | option-tag                |
+-------------+ text),          +-------------+------------+-----------+----------------+---------------------------+
| icon-off    | Font            | \-          | X          | \-        | input-tag      | select-tag (general, all) |
+             + Awesome         +             +            +           +                +                           +
| icon-on     | icon names      |             |            |           |                | option-tag (each option)  |
+-------------+-----------------+-------------+------------+-----------+----------------+---------------------------+
| offcolor    | Bootstrap       | X           |            | input-tag | \-             | \-                        |
+             + colors          +             +            +           +                +                           +
| oncolor     | (see            |             |            |           |                |                           |
+-------------+ list            +-------------+------------+-----------+----------------+---------------------------+
| color       | above)          | X           | X          | \-        | input-tag      | option-tag                |
+-------------+-----------------+-------------+------------+-----------+----------------+---------------------------+
| offtext     | Any string      | X           | \-         | input-tag | \-             | \-                        |
+             +                 +             +            +           +                +                           +
| ontext      |                 |             |            |           |                |                           |
+-------------+                 +-------------+------------+-----------+----------------+---------------------------+
| text        |                 | X           | X          | \-        | input-tag      | option-tag                |
+-------------+-----------------+-------------+------------+-----------+----------------+---------------------------+
| type        | "single-icon",  |             |            | \-        | input-tag      | select-tag                |
|             | "multi-icon"    |             |            |           | (last instance |                           |
|             |                 |             |            |           | overrides      |                           |
|             |                 |             |            |           | earlier ones)  |                           |
+-------------+-----------------+-------------+------------+-----------+----------------+---------------------------+

.. code-block:: html

  <p id="ex9_2">
    <select>
      <option value="c">Cookies?</option>
      <option value="y" data-color="danger" data-icon-on="heart">I adore cookies!</option>
      <option value="n"
        data-icon-on="fire" data-icon-off="remove-circle" data-text="I hate them">No
      </option>
    </select>
    <select data-icon-off="menu-right" data-icon-on="triangle-right">
      <option value="">Custard?</option>
      <option value="y" data-color="success">Yep!</option>
      <option value="s" data-text="What's that?">What's that?</option>
      <option value="dw" data-icon-on="sunglasses" data-color="primary">
        Especially with fish fingers</option>
    </select>
  </p>

.. code-block:: javascript

  $('#ex9_2').replaceSelectWithMultiStateButtons({
    multi_icon: true,
    icon_on_0: 'question-sign',
    icon_off_0: 'ban-circle',
    icon_off_1: 'ok-circle',
    color_2: 'warning',
  });
