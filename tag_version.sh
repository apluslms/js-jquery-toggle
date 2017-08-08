#!/bin/sh

version=$(cat VERSION)
git tag -a $version -m "v$version"
git push --tags
