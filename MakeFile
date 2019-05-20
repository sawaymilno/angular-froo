start: up
stop: clean

clean:
	docker-compose rm --force --stop -v

up:
	docker-compose up --force-recreate