rahulcc1
rahulcc2

docker login rahulcc1.azurecr.io
docker login rahulcc2.azurecr.io

docker build -t rahulcc1.azurecr.io/rahulcc1:latest .
docker build -t rahulcc2.azurecr.io/rahulcc2:latest .


docker push rahulcc1.azurecr.io/rahulcc1:latest
docker push rahulcc2.azurecr.io/rahulcc2:latest


https://s20200010212service1.azurewebsites.net
https://s20200010212service2.azurewebsites.net