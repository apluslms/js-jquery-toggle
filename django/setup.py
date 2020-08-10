#!/usr/bin/env python3
"""A setuptools based setup module.

See:
https://packaging.python.org/en/latest/distributing.html
https://github.com/pypa/sampleproject
"""

import sys
from codecs import open # To use a consistent encoding
from os.path import abspath, dirname, join

try:
    from setuptools import find_packages, setup
    from setuptools.command.build_py import build_py
except ImportError:
    print('Setuptools is not installed! Have you installed requirements_build.txt?', file=sys.stderr)
    sys.exit(1)

here = abspath(dirname(__file__))
root = dirname(here)


class BuildPyCopyRootData(build_py):
    """Enhanced 'build_py' command to copy data files from the root"""

    def run(self):
        super().run()
        self.copy_root_data()

    def copy_root_data(self):
        files = [
            ('jquery-toggle.js', 'js_jquery_toggle/static'),
        ]
        for filename, dest_path in files:
            target = join(self.build_lib, dest_path, filename)
            self.mkpath(dirname(target))
            srcfile = join(root, filename)
            outf, copied = self.copy_file(srcfile, target)


# Get the long description from the README file
with open(join(here, 'README.rst'), encoding='utf-8') as f:
    long_description = f.read()


# Get version from VERSION file
with open(join(root, 'VERSION'), encoding='utf-8') as f:
    version = f.read().strip()


setup(
    name='js-jquery-toggle-django',
    version=version,
    description='Simple toggle action addon for jquery',
    long_description=long_description,
    keywords='django jquery',
    url='https://github.com/Aalto-LeTech/js-jquery-toggle/',
    author='Jaakko Kantojärvi',
    author_email='jaakko@n-1.fi',
    license='MIT',

    # See https://pypi.python.org/pypi?%3Aaction=list_classifiers
    classifiers=[
        #   3 - Alpha
        #   4 - Beta
        #   5 - Production/Stable
        'Development Status :: 4 - Beta',
        'License :: OSI Approved :: MIT License',

        'Intended Audience :: Developers',
        'Environment :: Web Environment',
        'Operating System :: OS Independent',
        'Topic :: Software Development :: Build Tools',
        'Topic :: Software Development :: Libraries :: Python Modules',
        'Framework :: Django',
        'Framework :: Django :: 1.9',
        'Framework :: Django :: 1.10',
        'Framework :: Django :: 1.11',

        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3 :: Only',
    ],

    packages=find_packages(exclude=['contrib', 'docs', 'tests']),
    include_package_data = True,
    install_requires=[],
    cmdclass={
        'build_py': BuildPyCopyRootData,
    },
)
