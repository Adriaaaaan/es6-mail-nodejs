#!/bin/bash
mongoimport -d angularMail -c messages --jsonArray messages.json
