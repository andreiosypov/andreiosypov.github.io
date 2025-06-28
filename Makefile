SHELL := bash
.DEFAULT_GOAL:=help

ASSIGNMENT = bandit

.PHONY: help
help: Makefile
	@echo "Usage:"
	@sed -n 's/^##//p' $<

## production    Deploy to production
.PHONY: production
production :
	npm run deploy
	