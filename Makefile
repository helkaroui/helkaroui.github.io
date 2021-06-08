default: build publish_prod
export GODEBUG=x509ignoreCN=0

publish_dev:
	npm run build
	mc mv build/ s3/dev-sharek-dev --recursive

build:
	npm run build

publish_prod:
	mc rm --recursive --force s3/dev-sharek-prod/current/ || return 0
	mc cp build/ "s3/dev-sharek-prod/$(shell date +"%Y-%m-%d")_$(shell git log -1 --format=format:"%h")/" --recursive
	mc cp build/ s3/dev-sharek-prod/current/ --recursive
	rm -rf build/