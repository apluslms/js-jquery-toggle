#!/bin/sh

get_hash() {
    hash=$(openssl dgst -sha384 -binary "$1" | openssl base64 -A)
    echo "sha384-$hash"
}

file="jquery-toggle.js"
hash=$(get_hash "$file")

cat > django/js_jquery_toggle/templates/jquery_toggle.head.html <<TMPL
{% load static %}
<script src="{% static '$file' %}" integrity="$hash" crossorigin="anonymous"></script>
TMPL

cat > django/js_jquery_toggle/templates/jquery_toggle.head.jinja <<TMPL
<script src="{{ static('$file') }}" integrity="$hash" crossorigin="anonymous"></script>
TMPL
