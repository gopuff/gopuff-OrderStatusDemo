# Repo to talk about Azure and Design patterns

![Order Demo Diagram](https://www.lucidchart.com/publicSegments/view/38ce5bf0-65bd-4b6f-a9f5-c7a98fd732e3/image.png "Order Demo")



still very much a work in progress.

Designed to show how to show customers real time updates based on a legacy system.
The system features a vuejs SPA against a serverless backend.

Current state is getting it wired up end to end

Dependancies:
    Node / npm
    az CLI + Devops https://docs.microsoft.com/en-us/azure/devops/cli/?view=azure-devops
    bash
    jq

## Setup
1. Install az cli
https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest

``` 
    $ curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
    $ az login
    $ az extension add --name azure-devops
```

Api
``` 
dotnet build Api
func start --script-root
```

Api.Test
```
dotnet test Api.Test
dotnet watch --project Api.Test test
```

Frontend

```
cd Frontend

npm install
npm run serve
npm run test
```


## TODO

Initial MVP:

```
[x] Basic Azure Deploy
[x] Basic vue build with URL baked in
[ ] SignalR updater
[ ] Legacy Snapshot -> Merge system
```

```
Next Steps: TBDa
```
