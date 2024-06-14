#! /bin/bash

zip -r release.zip *
git add .
git commit
git push

