npx webpack --mode development
aws --profile whitespace s3 cp ./dist/bundle.js s3://whitespace.ninja/bundle.js
aws --profile whitespace s3 cp ./dist/index.html s3://whitespace.ninja/index.html