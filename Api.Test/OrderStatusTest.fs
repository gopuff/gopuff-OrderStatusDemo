module UnitTests

open NUnit.Framework
open FsUnit

open Microsoft.AspNetCore.Http
open Microsoft.AspNetCore.Mvc
open Microsoft.AspNetCore.Http.Internal
open Microsoft.Extensions.Logging.Abstractions

open Microsoft.Extensions.Logging

open OrderStatus

let nullLogger = (new NullLoggerFactory()).CreateLogger("null")
let request = DefaultHttpRequest(DefaultHttpContext())

[<Test>]
let ``Http Trigger test`` () =
    request.QueryString <- QueryString "?name=aaron"
    Api.vieworder(request, nullLogger).Value
        |> should equal (JsonResult({status="ok"; body="done"}: Api.Result).Value)