# Work project

run:
	yarn install
	docker-compose up -d

stop:
	docker-compose stop

restart:
	make stop
	make run

# Lint

lc:
	yarn lint

lf:
	yarn lint:fix

lint:
	make lf
	make lc
