SHELL := bash
.DEFAULT_GOAL:=help

.PHONY: help
help: Makefile
	@echo "Usage:"
	@sed -n 's/^##//p' $<

## local    	Run a local development server
.PHONY: local
local :
	npm run dev

## production	Deploy to production
.PHONY: production
production :
	npm run deploy
	