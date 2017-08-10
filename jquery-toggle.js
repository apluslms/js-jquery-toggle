(function($) {
	/*
	 * bound handler for button on:state_change
	 * updates the state of the button element (icons, text and color)
	 */
	function update_button_state(event, active) {
		var button = $(this);
		var args = button.data('toggle_button');
		var act = args[active ? "on" : "off"];
		var not = args[active ? "off" : "on"];

		args.active = active;
		if (!args.nocolor)
			button.removeClass(not.color).addClass(act.color);
		if (active) button.addClass('active');
		else button.removeClass('active');
		button.html('<i class="' + act.icon + '"></i> ' + act.text);
		button.trigger('blur');
	}

	/* bound handler for button on:click and on:toggle_state*/
	function toggle_button_state(event) {
		var button = $(this);
		var args = button.data('toggle_button');
		var active = !args.active;
		button.triggerHandler('state_change', [active]);
		return active;
	}

	/* bound handler for button on:click when used for radio buttons */
	function radio_button_click_handler(event) {
		var button = $(this);
		var input = button.data('input_element');
		var container = input.data('container_element');

		input.prop('checked', true);
		container.find('input:radio').each(function() {
			var ipt = $(this);
			var btn = ipt.data('button_element');
			var active = ipt.is(':checked');
			btn.triggerHandler('state_change', [active]);
		});
	}

	/* bound handler for button on:click when used for checkbox buttons */
	function checkbox_button_click_handler(event) {
		var button = $(this);
		var input = button.data('input_element');

		var active = !input.is(':checked');
		input.prop('checked', active);
		button.triggerHandler('state_change', [active]);
	}


	/* Default values for makeToggleButton, replaceCheckboxesWithButtons */
	var default_toggle_options = {
		active: false, // initial state
		onicon: 'check',
		oncolor: 'primary',
		// ontext: element.text()
		officon: 'unchecked',
		offcolor: 'default',
		// offtext: element.text()
		nocolor: false,
		clickHandler: toggle_button_state,
	};
	var default_checkboxes_options = {
		groupClass: 'btn-group',
		buttonClass: 'btn',
	};

	/* jquery method to make button or button like element a toggle button */
	$.fn.makeToggleButton = function(options) {
		var settings = $.extend({}, default_toggle_options, options);

        this.each(function() {
			var button = $(this);
			var args = {
				on: {
					icon: 'glyphicon glyphicon-' + settings.onicon,
					text: settings.ontext || button.text().trim(),
					color: 'btn-' + settings.oncolor,
				},
				off: {
					icon: 'glyphicon glyphicon-' + settings.officon,
					text: settings.offtext || button.text().trim(),
					color: 'btn-' + settings.offcolor,
				},
				active: settings.active || button.hasClass('active'),
				nocolor: settings.nocolor,
			};
			button.data('toggle_button', args);

			if (settings.clickHandler !== false)
				button.on('click', settings.clickHandler);
			button.on('state_change', update_button_state);
			button.on('toggle_state', toggle_button_state);

			// run the handler
			button.triggerHandler('state_change', [args.active]);
        });

        return this;
    };

	/* jquery method to replace checkboxes or radio selection with toggle buttons */
	$.fn.replaceCheckboxesWithButtons = function(options) {
		var settings = $.extend({}, default_checkboxes_options, options);

		this.each(function() {
			var widget = $(this);
			var group = $('<div></div>')
				.addClass(settings.groupClass);
			widget.after(group);
			widget.find('input:input, input:radio').each(function() {
				var input = $(this);
				var button = $('<button type="button"></button>')
					.addClass(settings.buttonClass)
					.addClass(input.data('class'));
				group.append(button);

				button.makeToggleButton({
					onicon: input.data('on-icon') || settings.onicon,
					ontext: input.data('on-text') || settings.ontext || input.parent().text().trim(),
					oncolor: input.data('on-color') || settings.oncolor || input.data('color'),
					officon: input.data('off-icon') || settings.officon,
					offtext: input.data('off-text') || settings.offtext || input.parent().text().trim(),
					offcolor: input.data('off-color') || settings.offcolor,
					nocolor: settings.nocolor,
					clickHandler: input.is(":radio") ? radio_button_click_handler : checkbox_button_click_handler,
					active: input.is(':checked'),
				});
				if (settings.buttonSetup) settings.buttonSetup(input, button, group);
				button.data('input_element', input);
				input.data('button_element', button);
				input.data('container_element', widget);
			});
			widget.addClass('hidden');
		});

		return this;
	};
}(jQuery));
