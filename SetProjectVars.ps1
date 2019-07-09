$editedFiles = git diff HEAD HEAD~ --name-only
$editedFiles | ForEach-Object {
    Switch -Wildcard ($_ ) {
        'Api*' { Write-Output "##vso[task.setvariable variable=BuildApi]True" }
        'Frontend*' { Write-Output "##vso[task.setvariable variable=BuildFrontend]True" }
        'Readme*' { Write-Output "##vso[task.setvariable variable=GoodDeveloper]True" }
        'Api.Test*' { Write-Output "##vso[task.setvariable variable=GoodDeveloper]True" }
    }
}

# https://stackoverflow.com/questions/53227343/triggering-azure-devops-builds-based-on-changes-to-sub-folders