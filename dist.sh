rm -rf dist
python -m build --sdist
python -m build --wheel
twine check dist/*
twine upload dist/*